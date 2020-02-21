import styled from 'styled-components'

const StyledTd = styled.td`
`


const Td = (props) => (
  <StyledTd>
    {props.content}
  </StyledTd>
)

export default Td