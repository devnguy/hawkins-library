import styled from 'styled-components'
import { useState, useContext } from 'react'
import TableContext from '../../context/table-context'
import Td from './Td'
import Button from '../styles/Button'
import Input from '../Input'

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
  const { tableHeaders, handleUpdate, isEditable } = useContext(TableContext)

  const [isInEditMode, setIsInEditMode] = useState(false)
  const [row, setRow] = useState(props.row)

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
  const handleDelete = () => {
    console.log(props.row.id)
  }
  const handleToggleUpdate = () => {
    setIsInEditMode(!isInEditMode)
  }
  const handleSubmitUpdate = () => {
    setIsInEditMode(false)
    handleUpdate(row)
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
              <a onClick={handleDelete}>
                <i className="material-icons">delete</i>
              </a>
            </span>
          )}
        </td>
      )}
    </StyledTdRow>
  )
}

export default TdRow
