import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './Header'
import Meta from './Meta'
import Footer from './Footer'

const theme = {
  red: '#E50A13',
  black: '#221F1F',
  gray: '#3A3A3A' /* unedited */,
  lightgray: '#E6E6E6',
  offWhite: '#F5F5F1',
  white: '#FFFFFF',
  maxWidth: '1200px',
  maxWidthBanner: '1320px',
  maxWidthNav: '1440px',
  fontFamily: `'Open Sans', sans-serif`,
  // fontFamily: `'Roboto', sans-serif`,
  screenSizeMed: '768px',
  screenSizeSm: '550px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)' /* unedited */
}

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.75;
    font-family: ${props => props.theme.fontFamily};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
    transition: 250ms;
  }
  a:hover {
    color: ${props => props.theme.red};
  }
  button {  font-family: ${props => props.theme.fontFamily} }
  .status--ok {
    color: green;
  }
  .status--error {
    color: ${props => props.theme.red};
  }
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          {this.props.children}
        </StyledPage>
        <Footer />
      </ThemeProvider>
    )
  }
}

export default Page
