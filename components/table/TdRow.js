import styled from 'styled-components'
import Td from './Td'


const StyledTdRow = styled.tr`
  border: 1px;
`


const TdRow = ({ row }) => {
  const values = Object.values(row)
  return (
    <StyledTdRow>
      {values.map(value => (
        <Td key={value} content={value} />
      ))}
    </StyledTdRow>
  )
}

export default TdRow