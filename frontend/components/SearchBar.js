import styled from 'styled-components'

const Styles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  height: 6.6rem;
  input {
    font-size: 2.4rem;
    padding: 1.9rem 1.6rem;
    width: 60%;
    background: rgba(255,255,255,0.95);
    border: none;
    color: ${props => props.theme.black};
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0,0.30);
    outline: none;
    transition: all 700ms cubic-bezier(0.23,1,0.32,1);
    :focus {
      width: 100%;
    }
  }
  button {
    height: 100%
  }
`

const SearchBar = () => (
  <Styles>
    <input placeholder="Find a book or event"></input>
    <button><i className="material-icons">search</i></button>
  </Styles>
)


export default SearchBar