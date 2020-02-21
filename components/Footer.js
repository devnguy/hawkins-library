import { useState } from 'react'
import Link from 'next/link'
import NavItem from './nav/NavItem'
import styled from 'styled-components'

const StyledFooterLogo = styled.div`
  margin: 0 1em;
  text-transform: uppercase;
  /* line-height: 8rem; */
  padding: 0 .94rem;
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

const FlexContainer = styled.div`
  /* display: flex;
  flex-direction: ${props => props.direction}; */
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
  /* position: fixed;
  top: 0px;
  left: 0px; */
  z-index: 1;
  margin: 0;
  width: 100%;
  /* height: 7rem; */
  /* background: red; */
  /* padding: 0 5%; */
  /* box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1); */

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
  /* background: blue; */
  
`

const StyledFooterTopRow = styled.div`
  display: flex;
  justify-content: flex-end;
  li {
    line-height: 4.8rem;
    font-size: 1.4rem;
    margin: 0 1.6rem;
    font-weight: 700;
  }
  li i {
    font-size: 2.4rem;
  }
  padding-bottom: 1.6rem;
`

const StyledFooterBottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  /* padding-bottom: 3.6rem; */
  /* background: green; */
`

const StyledFooterRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  h4, p {
    margin: 0 1.6rem;
  }
  p {
    color: ${props => props.theme.grey};
  }
  /* background: pink; */
`

const Footer = () => (
  <StyledFooterContainer>
    <StyledFooter>
      <FooterLogo />
      <StyledFooterRowContainer>
        <StyledFooterTopRow>
          <ul>
            <li>FOLLOW US</li>
            <li><a href="https://github.com/hdn301" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt"></i></a></li>
            <li><a href="https://github.com/RebekahKoon" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://github.com/hdn301/hawkins-library" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-code"></i></a></li>
          </ul>
        </StyledFooterTopRow>
        <StyledFooterBottomRow>
          <h4>Hawkins Public Library</h4>
          <p>Images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
        </StyledFooterBottomRow>
      </StyledFooterRowContainer>
    </StyledFooter>
  </StyledFooterContainer>

)

export default Footer