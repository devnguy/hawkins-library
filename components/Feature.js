import styled from 'styled-components'
import Button from '../components/styles/Button'


const StyledFeature = styled.div`
  display: flex;
  /* max-width: ${props => props.theme.maxWidth}; */
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1); /*tailwindcss large shadow*/
  margin: auto;
`

const StyledFeatureBody = styled.div`
  /* background-color: ${props => props.theme.black}; */
  background-color: ${props => props.bgColor};
  flex: ${props => props.size};
  color: ${props => props.fontColor};
  padding: 6.4rem;
  width: 100%;
`

const StyledFeatureImage = styled.div`
  background-color: ${props => props.theme.red};;
  flex: ${props => props.size};
  overflow: hidden;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  height: 360px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* position: center; */
    box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.3); /*tailwindcss large shadow*/
  }

`

export const LeftFeature = () => (
  <StyledFeature>
    <StyledFeatureBody size="2" bgColor={props => props.theme.white} fontColor={props => props.theme.black}>
      <h2>That perfect tranquility of life, which is nowhere to be found but in retreat, a faithful friend, and a good library.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ab iusto facere, minus non pariatur. Animi iste sunt omnis aliquid ipsam, recusandae, vero, mollitia illo totam odit.</p>
      <p></p>

      <Button>See our collection <i className="material-icons">arrow_forward_ios</i></Button>
    </StyledFeatureBody>
    <StyledFeatureImage size="1" paddingLeft="2.4rem" paddingRight="0">
      <img src="/features/feature03.jpeg"></img>
    </StyledFeatureImage>
  </StyledFeature>
)

export const RightFeature = () => (
  <StyledFeature>
    <StyledFeatureImage size="1" paddingLeft="0" paddingRight="0">
      <img src="/features/feature02.jpeg"></img>
    </StyledFeatureImage>
    <StyledFeatureBody size="2" bgColor={props => props.theme.black} fontColor={props => props.theme.white}>
      <h2>There is no such thing as a child who hates to read; there are only children who have not found the right book.</h2>
      <p>At our monthly reading clubs, pairs of volunteers read aloud to small groups of children, while their parents receive training on how to encourage their children to read at home.</p>
      <Button>Find out more <i className="material-icons">arrow_forward_ios</i></Button>
    </StyledFeatureBody>
  </StyledFeature>
)
