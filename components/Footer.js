import { useState } from 'react'
import Link from 'next/link'
import NavItem from './nav/NavItem'
import styled from 'styled-components'
import IconLinks from './nav/IconLinks'

const StyledFooterLogo = styled.div`
  margin: 0 1em;
  text-transform: uppercase;
  /* line-height: 8rem; */
  padding: 0 0.94rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  /* background: gray; */
  a {
    color: ${props => props.theme.black};
    font-family: 'Raleway', sans-serif;
    font-size: 2.4rem;
  }
`

const FooterLogo = () => (
  <div>
    <StyledFooterLogo>
      <Link href="/">
        <a>HAWKINS</a>
      </Link>
    </StyledFooterLogo>
  </div>
)

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
  z-index: 1;
  margin: auto;
  max-width: ${props => props.theme.maxWidthNav};
  padding: 0 2.4rem 0 1.2rem;

  ul {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 1.3rem;
  }
`

const StyledFooterContainer = styled.div`
  padding: 2.4rem 0;
`

const StyledFooterTopRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1.6rem;
  list-style: none;
  li {
    line-height: 4.8rem;
    font-size: 1.4rem;
    margin: 0 1.6rem;
    font-weight: 700;
  }
  li i {
    font-size: 2.4rem;
  }
  @media (max-width: ${props => props.theme.screenSizeSm}) {
    flex-direction: column;
    text-align: right;
    align-self: flex-end;
  }
`

const StyledFooterBottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  h4,
  p {
    margin: 0 1.6rem;
  }
  p {
    color: ${props => props.theme.grey};
  }
  @media (max-width: ${props => props.theme.screenSizeSm}) {
    flex-direction: column;
    text-align: right;
    h4 {
      margin-bottom: 0.8rem;
    }
  }
`

const StyledFooterRowContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer = () => (
  <StyledFooterContainer>
    <StyledFooter>
      <FooterLogo />
      <StyledFooterRowContainer>
        <StyledFooterTopRow>
          <li>FOLLOW US</li>
          <IconLinks />
        </StyledFooterTopRow>
        <StyledFooterBottomRow>
          <h4>Hawkins Public Library</h4>
          <p>
            Images from{' '}
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
              Unsplash
            </a>
          </p>
        </StyledFooterBottomRow>
      </StyledFooterRowContainer>
    </StyledFooter>
  </StyledFooterContainer>
)

export default Footer
