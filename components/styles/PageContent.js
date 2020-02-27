import styled from 'styled-components'

const StyledPageContent = styled.div`
  background-color: ${props => props.theme.white};
  padding: 6.4rem;
  width: 100%;
  margin: 5.4rem 0;
  z-index: 2;
  h1 {
    margin-top: 0;
  }
  box-shadow: 0px 20px 20px -20px rgba(0, 0, 0, 0.4); /*xl shadow*/
`

const PageContent = props => (
  <StyledPageContent>
    <h1>{props.pageTitle}</h1>
    {props.children}
  </StyledPageContent>
)

export default PageContent
