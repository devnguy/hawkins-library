import styled from 'styled-components'
import Container, { BannerContainer } from '../components/styles/Container'


const StyledBanner = styled.div`
  background-color: ${props => props.theme.black};
  height: 280px;
`

const StyledBannerContent = styled.div`
  max-width: ${props => props.theme.maxWidthBanner};
  color: ${props => props.theme.white};
  height: 300px;
  padding-top: 9.6rem;
  /* img {
    object-fit: cover;
    padding-top: 1.6rem;
    width: 100%;
    height: 340px;
    z-index: -1;
  } */
`

const StyledBannerBackgroundImage = styled.div`
  background-image: url(${props => props.bannerUrl});
  height: 300px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

const PageBanner = props => (
  <StyledBanner>
    <BannerContainer>
      <StyledBannerContent>
        <StyledBannerBackgroundImage bannerUrl={props.bannerUrl} />
      </StyledBannerContent>
    </BannerContainer>
  </StyledBanner>
)

export default PageBanner