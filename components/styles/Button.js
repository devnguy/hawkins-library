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
    transition: 700ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  :hover i {
    transform: translate(5px, 0);
  }
  /* margin-top: 2.4rem; */
`

export const AltButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 0;
  text-transform: uppercase;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  line-height: 1.3rem;
  /* padding: 10px 36px 10px 18px; */
  padding: 1rem 1.8rem;
  font-size: 1.3rem;
  i {
    font-size: 1rem;
    transition: 700ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  :hover i {
    transform: translate(5px, 0);
  }
  /* margin-top: 2.4rem; */
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
    transition: 700ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  :hover i {
    transform: translate(5px, 0);
  }
`

export default Button
