import styled from 'styled-components'
import Td from './Td'
import { useContext } from 'react'
import TableContext from '../../context/table-context'

const StyledTdRow = styled.tr``

const TdRow = props => {
  const { isEditable } = useContext(TableContext)
  const values = Object.values(props.row)

  // Have access to bookId, delete where bookId = props.bookId
  const handleDelete = () => {
    console.log(props.row.id)
  }

  return (
    <StyledTdRow>
      {values.map(value => (
        <Td key={value} content={value} />
      ))}
      {isEditable && (
        <td>
          <i className="material-icons">edit</i><i onClick={handleDelete} className="material-icons">delete</i>
        </td>
      )}
    </StyledTdRow>
  )
}

export default TdRow
