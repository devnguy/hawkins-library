import styled from 'styled-components'
import { useState } from 'react'
import Input from '../Input'

const StyledTd = styled.td`
  input {
    line-height: 3rem;
  }
`

const Td = props => <StyledTd>{props.content}</StyledTd>

export default Td
