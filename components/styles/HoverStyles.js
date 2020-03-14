/**
 * Underline reveal hover style used for Book component.
 *
 * Source: https://github.com/IanLunn/Hover
 */

import styled from 'styled-components'

const HoverStyles = styled.div`
  .hvr-underline-reveal {
    /* display: inline-block; */
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    /* box-shadow: 0 0 1px rgba(0, 0, 0, 0); */
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-reveal:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.red};
    height: 0.8rem;
    -webkit-transform: translateY(0.8rem);
    transform: translateY(0.8rem);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-underline-reveal:hover:before,
  .hvr-underline-reveal:focus:before,
  .hvr-underline-reveal:active:before {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .hvr-underline-clicked {
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-clicked:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.red};
    height: 0.8rem;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
  }
  .hvr-underline-clicked:after {
    -webkit-transform: translateY(0.8rem);
    transform: translateY(0.8rem);
  }
`

export default HoverStyles
