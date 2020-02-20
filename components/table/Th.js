import styled from 'styled-components'

const StyledTh = styled.th`

`


const Th = (props) => (
  <StyledTh>
    {props.content}
  </StyledTh>
)

export default Th