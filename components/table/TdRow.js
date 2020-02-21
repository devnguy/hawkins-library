import styled from 'styled-components'
import Td from './Td'
import { useContext } from 'react'
import TableContext from '../../context/table-context'



const StyledTdRow = styled.tr`
`


const TdRow = ({ row }) => {
  const { isEditable } = useContext(TableContext)
  const values = Object.values(row)
  return (
    <StyledTdRow>
      {values.map(value => (
        <Td key={value} content={value} />
      ))}
      {
        isEditable &&
        <td>
          <i className="material-icons">edit</i>
          <i className="material-icons">delete</i>
        </td>
      }
    </StyledTdRow>
  )
}

export default TdRow