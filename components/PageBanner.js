/**
 * Implementation and styling of the banner image of each page. The url
 * of the image must be passed in as a prop.
 */

import styled from 'styled-components'
import { BannerContainer } from '../components/styles/Container'

const StyledBanner = styled.div`
  background-color: ${props => props.theme.black};
  height: 280px;
`

const StyledBannerContent = styled.div`
  max-width: ${props => props.theme.maxWidthBanner};
  color: ${props => props.theme.white};
  height: 300px;
  padding-top: 9.6rem;
`

const StyledBannerBackgroundImage = styled.div`
  background-image: url(${props => props.bannerUrl});
  height: 300px;
  background-size: cover;
  background-position: center;
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
