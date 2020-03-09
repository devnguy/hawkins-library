import styled from 'styled-components'

const Styles = styled.div`
  /* Transparent nav, active when at the top of page. */
  .default-nav {
    background: transparent;
    box-shadow: inset 0 4rem 40px rgba(0, 0, 0, 0.22);
    a {
      color: ${props => props.theme.white};
      :hover {
        color: ${props => props.theme.red};
      }
    }
  }

  /* Drop down menu on hover over admin nav item. */
  .admin-dropdown {
    position: relative;
    display: inline-block;
    @media (max-width: ${props => props.theme.screenSizeMed}) {
      display: block;
      /* position: static; */
    }
  }
  .admin-dropdown-menu {
    padding: 1rem 0;
    background: ${props => props.theme.white};
    width: 200px;
    display: none;
    position: absolute;
    /* transition: 200ms; */
    box-shadow: 0px 10px 15px -10px rgba(0, 0, 0, 0.3); /*md shadow*/
    margin: 0;
    li a {
      color: ${props => props.theme.black};
      line-height: 1rem;
      margin: 0;
      :hover {
        color: ${props => props.theme.red};
      }
    }
    @media (max-width: ${props => props.theme.screenSizeMed}) {
      padding: 1rem 0;
      display: block;
      position: static;
      width: 100%;
      box-shadow: none;
      li a {
        padding: 0 1.2rem;
      }
    }
  }
  .admin-dropdown:hover .admin-dropdown-menu {
    display: block;
  }

  .expandable-menu {
    a:hover {
      color: ${props => props.theme.red};
    }
    @media (max-width: ${props => props.theme.screenSizeMed}) {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      padding: 0;
      overflow: hidden;
      background-color: ${props => props.theme.white};
      width: 45vw;
      box-sizing: border-box;
      transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1);
      -webkit-transform: translateZ(0) translateX(100%);
      transform: translateZ(0) translateX(100%);
      li a {
        color: ${props => props.theme.black};
        :hover {
          ${props => props.theme.red};
        }
      }
    }
    @media (max-width: ${props => props.theme.screenSizeSm}) {
      width: 60vw;
    }
  }
  .active {
    transform: translateZ(0) translateX(0);
  }
`

export default Styles
