/**
 * Generic container classes.
 */

import styled from 'styled-components'

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding-bottom: 2rem;
`

export const BannerContainer = styled.div`
  max-width: ${props => props.theme.maxWidthBanner};
  margin: 0 auto;
  padding-bottom: 2rem;
`

export const FlexContainer = styled.div`
  display: flex;
`

export default Container
