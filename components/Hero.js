import styled from 'styled-components'
import Container from '../components/styles/Container'
import SearchBar from '../components/SearchBar'


const StyledHero = styled.div`
  background-image: url("/hero.jpeg");
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
  box-shadow: 0px 20px 25px -5px rgba(0,0,0,0.3); /*tailwindcss xl shadow*/
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
`

const StyledHeroContent = styled.div`
  max-width: ${props => props.theme.maxWidth};
  color: ${props => props.theme.white};
  h1 {
    text-shadow: 0px 4px 6px rgba(0,0,0,0.23); /*md shadow*/
    font-size: 4.2rem;
    line-height: 5rem;
  }
`


const Hero = () => (
  <StyledHero>
    <Container>
      <StyledHeroContent>
        <h1>Welcome to the Hawkins Public Library Lorem Ipsum Dolor Cat Lady</h1>
        <div>
          <input placeholder="Find a book or event"></input>
          {/* <button><i className="material-icons">search</i></button> */}

        </div>
        {/* <SearchBar /> */}
      </StyledHeroContent>
    </Container>
  </StyledHero>
)

export default Hero