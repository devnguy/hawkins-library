import styled from 'styled-components'
import TdRow from './TdRow'

const StyledTbody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #f8f8f8;
  }
`

const Tbody = ({ data, deleteItems, item }) => (
  <StyledTbody>
    {data.map((row, index) => (
      <TdRow key={row.id} row={row} deleteItem={deleteItems[index]} item={item} />
    ))}
  </StyledTbody>
)

export default Tbody
