/**
 * Table row component that uses context to call the appropriate UPDATE
 * or DELETE function. Context is used because rows may contain data
 * from any table in the schema.
 *
 * - Handles confirmation modals for deleting rows.
 * - Conditionally renders inputs when 'isInEditMode'
 */

import styled from 'styled-components'
import { useState, useContext, useEffect } from 'react'
import TableContext from '../../context/table-context'
import Td from './Td'
import Button from '../styles/Button'
import Input from '../Input'
import Spinner from '../Spinner'

import Modal from 'react-modal'
import { modalStyleDelete, StyledModalContent } from '../../components/styles/modalStyle'
import Divider from '../../components/styles/Divider'

const StyledTdRow = styled.tr`
  a {
    :hover {
      cursor: pointer;
    }
  }
`

const TableInput = ({ value, onChange, id, type }) => {
  const handleChange = event => {
    const text = event.target.value
    onChange(id, text)
  }
  return (
    <td>
      <Input onChange={handleChange} value={value} type={type} />
    </td>
  )
}

const TdRow = props => {
  const { tableHeaders, handleUpdate, handleDelete, isEditable } = useContext(TableContext)

  const [isInEditMode, setIsInEditMode] = useState(false)
  const [isUniqueInput, setIsUniqueInput] = useState(true)
  const [row, setRow] = useState(props.row)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // modal
  const [prevRowData, setPrevRowData] = useState(row)

  const handleInputChange = (inputId, value) => {
    setRow({ ...row, [tableHeaders[inputId]]: value })
  }

  const fieldsArray = Object.values(row)
  const tdFields = fieldsArray.map((field, index) => (
    <Td key={index} content={field} isInEditMode={isInEditMode} />
  ))
  // Don't render input for id or dateJoined.
  // Render date/text input depending on data being edited.
  const inputFields = fieldsArray.map((field, index) =>
    tableHeaders[index].toLowerCase().includes('id') ||
    tableHeaders[index].toLowerCase().includes('datejoined') ? (
      <td key={index}>{field}</td>
    ) : (
      <TableInput
        type={tableHeaders[index].toLowerCase().includes('date') ? 'date' : 'text'}
        key={index}
        id={index}
        onChange={handleInputChange}
        value={row[tableHeaders[index]]}
      />
    )
  )

  /**
   * Call the appropriate UPDATE/DELETE function using context. The
   * UPDATE/DELETE function may need to be called on a row of any table
   * in the schema, so the correct function is accessed using context.
   * Asynchronous functions will also set isLoading state.
   */
  const handleDeleteRow = async () => {
    setIsLoading(true)
    closeModal()
    await handleDelete(row)
  }
  const handleToggleUpdate = () => {
    // Remember old row before changes are made
    setPrevRowData(row)
    setIsInEditMode(!isInEditMode)
  }
  const handleSubmitUpdate = async () => {
    setIsLoading(true)
    setIsInEditMode(false)
    const updateIsSuccessful = await handleUpdate(row)
    // Revert row back to prevRowData if update was unsuccessful
    if (!updateIsSuccessful) {
      setRow({ ...prevRowData })
      setIsUniqueInput(false)
      openModal(true)
    }
    setIsLoading(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const modalMessage = () => {
    if (!isUniqueInput) {
      return (
        <StyledModalContent>
          <h2>Invalid {props.item.charAt(0).toUpperCase() + props.item.slice(1)} Edit</h2>
          <Divider />
          <p>
            This {props.row.title ? 'title' : 'email'} already exits. Please use a unique{' '}
            {props.row.title ? 'title' : 'email'}.
          </p>
          <Button onClick={closeModal}>Return</Button>
        </StyledModalContent>
      )
    } else {
      return (
        <StyledModalContent>
          <h2>
            Delete{' '}
            {props.row.title || props.row.name || `${props.row.firstName} ${props.row.lastName}`}
          </h2>
          <Divider />
          <p>Are you sure you want to delete this {props.item}?</p>
          <Button onClick={handleDeleteRow}>Delete</Button>
          <a onClick={closeModal}>CANCEL</a>
        </StyledModalContent>
      )
    }
  }

  return (
    <StyledTdRow>
      {!isInEditMode ? tdFields : inputFields}
      {/* Submit/edit + delete/spinner logic */}
      {isEditable && (
        <td>
          {isInEditMode ? (
            <Button onClick={handleSubmitUpdate}>Submit</Button>
          ) : isLoading ? (
            <Spinner />
          ) : (
            <span>
              <a onClick={handleToggleUpdate}>
                <i className="material-icons">edit</i>
              </a>
              <a onClick={openModal}>
                <i className="material-icons">delete</i>
              </a>
            </span>
          )}
        </td>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyleDelete}
        ariaHideApp={false}
        closeTimeoutMS={100}
      >
        {modalMessage()}
      </Modal>
    </StyledTdRow>
  )
}

export default TdRow
