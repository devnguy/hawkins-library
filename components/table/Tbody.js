import styled from 'styled-components'
import TdRow from './TdRow'

const StyledTbody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #f8f8f8;
  }
`

const Tbody = ({ data, item }) => (
  <StyledTbody>
    {data.map(row => (
      <TdRow key={row.id} row={row} item={item} />
    ))}
  </StyledTbody>
)

export default Tbody
