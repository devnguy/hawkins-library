import styled from 'styled-components'

const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 0;
  text-transform: uppercase;
  background: ${props => props.theme.red};
  color: ${props => props.theme.white};
  line-height: 1.3rem;
  /* padding: 10px 36px 10px 18px; */
  padding: 1rem 1.8rem;
  font-size: 1.3rem;
  i {
    font-size: 1rem;
  }
`

export const LargeButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 0;
  text-transform: uppercase;
  background: ${props => props.theme.red};
  color: ${props => props.theme.white};
  line-height: 2rem;
  margin: 2rem 0;
  /* padding: 10px 36px 10px 18px; */
  padding: 1rem 1.8rem;
  font-size: 1.3rem;
  i {
    font-size: 1rem;
  }
`


export default Button