import styled from 'styled-components'

const StyledSearchResult = styled.section`
  padding: 2.8rem 5.4rem;
  border-bottom: 1px solid rgb(230, 230, 230);
  h4 {
    font-size: 2.2rem;
    margin: 0;
    font-weight: 400;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      margin-right: 3rem;
      line-height: 3rem;
    }
    i {
      line-height: 3rem;
      font-size: 2.4rem;
      display: inline;
      vertical-align: top;
      color: ${props => props.theme.gray};
    }
  }
`

export default StyledSearchResult
