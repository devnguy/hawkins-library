import styled from 'styled-components'
import TdRow from './TdRow'


const StyledTbody = styled.tbody`

`


const Tbody = ({ data }) => (
  <StyledTbody>
    {data.map(row => (
      <TdRow key={row.title} row={row} />
    ))}
  </StyledTbody>
)

export default Tbody