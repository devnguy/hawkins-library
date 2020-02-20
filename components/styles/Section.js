import styled from 'styled-components'

const StyledSection = styled.section`
  /* margin: auto; */
  margin: 5.4rem 0;
`


const Section = props => (
  <StyledSection>
    {props.children}
  </StyledSection>
)

export default Section