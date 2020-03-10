import styled from 'styled-components'
import { useState, useContext } from 'react'
import TableContext from '../../context/table-context'
import Td from './Td'
import Button from '../styles/Button'
import Input from '../Input'

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

const TableInput = ({ value, onChange, id }) => {
  const handleChange = event => {
    const text = event.target.value
    onChange(id, text)
  }
  return (
    <td>
      <Input onChange={handleChange} value={value} />
    </td>
  )
}

const TdRow = props => {
  const { tableHeaders, handleUpdate, handleDelete, isEditable } = useContext(TableContext)

  const [isInEditMode, setIsInEditMode] = useState(false)
  const [row, setRow] = useState(props.row)
  const [deleteItem, setDeleteItem] = useState(props.deleteItem)

  const handleInputChange = (inputId, value) => {
    setRow({ ...row, [tableHeaders[inputId]]: value })
  }

  const fieldsArray = Object.values(row)
  const inputFields = fieldsArray.map((field, index) =>
    // Don't render input for id
    tableHeaders[index].toLowerCase().includes('id') ? (
      <td key={index}>{field}</td>
    ) : (
      <TableInput
        key={index}
        id={index}
        onChange={handleInputChange}
        value={row[tableHeaders[index]]}
      />
    )
  )

  const tdFields = fieldsArray.map((field, index) => (
    <Td key={index} content={field} isInEditMode={isInEditMode} />
  ))

  // Have access to bookId, delete where bookId = props.bookId
  // Place holder
  const handleDeleteRow = () => {
    handleDelete(row)
    closeModal()
  }
  const handleToggleUpdate = () => {
    setIsInEditMode(!isInEditMode)
  }
  const handleSubmitUpdate = () => {
    setIsInEditMode(false)
    handleUpdate(row)
  }

  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <StyledTdRow>
      {!isInEditMode ? tdFields : inputFields}
      {isEditable && (
        <td>
          {isInEditMode ? (
            <Button onClick={handleSubmitUpdate}>Submit</Button>
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
        <StyledModalContent>
          <h2>Delete {deleteItem}</h2>
          <Divider />
          <p>Are you sure you want to delete this {props.item}?</p>
          <Button onClick={handleDeleteRow}>Delete</Button>
          <a onClick={closeModal}>CANCEL</a>
        </StyledModalContent>
      </Modal>
    </StyledTdRow>
  )
}

export default TdRow
