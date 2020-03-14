/**
 * Implementation and styling of <hr /> tag.
 */

import styled from 'styled-components'

const Divider = styled.hr`
  border: none;
  height: 3px;
  width: 40%;
  text-align: left;
  background: ${props => props.theme.red};
  margin: 1em 0;
  margin-bottom: 2em;
`

export default Divider
