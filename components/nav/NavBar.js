import styled from 'styled-components'
import { useState } from 'react'
import NavItem, { AdminNavItem } from './NavItem'
import useScrollFromTop from '../hooks/useScrollFromTop'
import NavLogo from './NavLogo'

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
      position: static;
    }
  }
  .admin-dropdown-menu {
    padding: 1rem 0;
    background: ${props => props.theme.white};
    width: 200px;
    display: none;
    position: absolute;
    transition: 200ms;
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
      display: block;
      position: static;
      padding: 0;
    }
  }
  .admin-dropdown:hover .admin-dropdown-menu {
    display: block;
  }

  .expandable-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${props => props.theme.white};
    width: 250px;
    box-sizing: border-box;
    transition: all 250ms;
    -webkit-transform: translateZ(0) translateX(100%);
    transform: translateZ(0) translateX(100%);
    li a {
      color: ${props => props.theme.black};
    }
  }
  .active {
    transform: translateZ(0) translateX(0);
    transform: translateZ(0) translateX(0);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    color: red;
  }
`

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: ${props => props.theme.maxWidthNav};
  padding: 0 0.5rem;
  ul {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 1.3rem;
    @media (max-width: ${props => props.theme.screenSizeMed}) {
      flex-direction: column;
      text-align: right;
    }
  }
`

const StyledNavContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.white};
  position: fixed;
  /* box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1); */
  box-shadow: 0px 10px 12px -10px rgba(0, 0, 0, 0.5);
  transition: 250ms;
  z-index: 1;
`

const NavBar = () => {
  const isTop = useScrollFromTop()
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <Styles>
      <StyledNavContainer className={isTop ? 'default-nav' : ''} id="nav">
        <StyledNavBar>
          <NavLogo />

          <button onClick={toggleIsActive}></button>

          <ul className={isActive ? 'expandable-menu active' : 'expandable-menu'}>
            <div className="admin-dropdown">
              <NavItem route="/" pageName="Admin" />
              <div className="admin-dropdown-menu">
                <AdminNavItem route="/admin/manage-books" pageName="Manage Books" />
                <AdminNavItem route="/admin/manage-events" pageName="Manage Events" />
                <AdminNavItem route="/admin/manage-checkouts" pageName="Manage Checkouts" />
                <AdminNavItem route="/admin/manage-customers" pageName="Manage Customers" />
                <AdminNavItem route="/admin/manage-registrations" pageName="Manage Registrations" />
              </div>
            </div>
            <NavItem route="/library" pageName="Library" />
            <NavItem route="/events" pageName="Events" />
            <NavItem route="/return" pageName="Return Books" />
            <NavItem route="/signup" pageName="Sign Up" />
          </ul>
        </StyledNavBar>
      </StyledNavContainer>
    </Styles>
  )
}

export default NavBar
