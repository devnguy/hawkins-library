import styled from 'styled-components'
import Th from './Th'


const StyledThead = styled.thead`

`


const Thead = ({ columns }) => (
  <StyledThead>
    <tr>
      {columns.map(column => (
        <Th key={column} content={column} />
      ))}
    </tr>
  </StyledThead>
)

export default Thead