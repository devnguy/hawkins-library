import styled from 'styled-components'
import TdRow from './TdRow'

const StyledTbody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #f8f8f8;
  }
`

const Tbody = ({ data }) => (
  <StyledTbody>
    {data.map(row => (
      <TdRow key={row.id} row={row} />
    ))}
  </StyledTbody>
)

export default Tbody
