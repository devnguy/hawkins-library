/**
 * Table data component merely sets the styling of its child input
 * components.
 */

import styled from 'styled-components'

const StyledTd = styled.td`
  input {
    line-height: 3rem;
  }
`

const Td = props => <StyledTd>{props.content}</StyledTd>

export default Td
