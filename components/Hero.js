/**
 * Renders banner image, search bar, and site welcome message displayed
 * on the index page.
 */

import styled from 'styled-components'
import Container from '../components/styles/Container'
import SearchBar from '../components/SearchBar'

const StyledHero = styled.div`
  background-image: url('/hero.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 70vh;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin-bottom: 0;
  text-align: left;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.3); /*tailwindcss xl shadow*/
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    padding: 3.2rem;
  }
`

const StyledHeroContent = styled.div`
  max-width: ${props => props.theme.maxWidth};
  color: ${props => props.theme.white};
  h1 {
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.23); /*md shadow*/
    font-size: 4.2rem;
    line-height: 5rem;
  }
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    h1 {
      font-size: 3.6rem;
    }
  }
`

const Hero = () => (
  <StyledHero>
    <Container>
      <StyledHeroContent>
        <h1>Welcome to the Hawkins Public Library. Explore the world's knowledge.</h1>
        <SearchBar isExpandable={true} />
      </StyledHeroContent>
    </Container>
  </StyledHero>
)

export default Hero
