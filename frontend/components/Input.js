import styled from 'styled-components'

const Input = styled.input`
  font-size: 1.6rem;
  background-color: ${props => props.theme.white};
  border: solid 1px ${props => props.theme.lightgray};
  line-height: 4rem;
  padding: 0 1rem;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`

export default Input