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

export const LeftFeature = (props) => (
  <StyledFeature>
    <StyledFeatureBody size="2" bgColor={props => props.theme.white} fontColor={props => props.theme.black}>
      <h2>{props.content.name}</h2>
      <p>{props.content.description}</p>
      <p></p>

      <Button>{props.button} <i className="material-icons">arrow_forward_ios</i></Button>
    </StyledFeatureBody>
    <StyledFeatureImage size="1" paddingLeft="2.4rem" paddingRight="0">
      <img src={props.content.imgUrl}></img>
    </StyledFeatureImage>
  </StyledFeature>
)

export const RightFeature = (props) => (
  <StyledFeature>
    <StyledFeatureImage size="1" paddingLeft="0" paddingRight="0">
      <img src={props.content.imgUrl}></img>
    </StyledFeatureImage>
    <StyledFeatureBody size="2" bgColor={props => props.theme.black} fontColor={props => props.theme.white}>
      <h2>{props.content.name}</h2>
      <p>{props.content.description}</p>
      <Button>{props.button} <i className="material-icons">arrow_forward_ios</i></Button>
    </StyledFeatureBody>
  </StyledFeature>
)
