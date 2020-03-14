/**
 * Table Head component merely sets the text-align of each Th tag.
 */

import styled from 'styled-components'

const StyledTh = styled.th`
  text-align: left;
`

const Th = props => <StyledTh>{props.content}</StyledTh>

export default Th
