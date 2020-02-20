import styled from 'styled-components'
import Td from './Td'


const StyledTdRow = styled.tr`
  border: 1px;
`


const TdRow = ({ row }) => (
  <StyledTdRow>
    <Td content={row.name} />
    <Td content={row.age} />
    <Td content={row.food} />
  </StyledTdRow>
)

export default TdRow