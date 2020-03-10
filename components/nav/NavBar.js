import styled from 'styled-components'
import { useState } from 'react'
import NavItem, { AdminNavItem } from './NavItem'
import useScrollFromTop from '../hooks/useScrollFromTop'
import NavLogo, { ExpandableMenuLogo } from './NavLogo'
import Styles from './Styles'
import IconLinks from './IconLinks'
import { FlexContainer } from '../styles/Container'

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: ${props => props.theme.maxWidthNav};
  padding: 0 0.5rem;
  ul {
    z-index: 3;
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

const DimPage = styled.div`
  display: none;
  top: 0;
  left: 0;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    display: block;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

// Responsive expandable nav
const ExpandableMenuHeader = styled.div`
  display: none;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    padding-right: 4rem;
    color: ${props => props.theme.black};
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: ${props => props.theme.screenSizeSm}) {
    padding-right: 2.4rem;
  }
`

// Responsive expandable nav
const StyledMenuIcon = styled.div`
  display: none;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 700;
    i {
      padding: 2.4rem;
      font-size: 3rem;
      :hover {
        cursor: pointer;
      }
    }
  }
`

const StyledIconLinks = styled.div`
  display: none;
  /* align-self: flex-end; */
  /* width: 100%; */
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    display: flex;
    ul {
      margin-right: 2.8rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      i {
        padding: 1.2rem;
        font-size: 2.4rem;
      }
      @media (max-width: ${props => props.theme.screenSizeSm}) {
        margin-right: 1.2rem;
      }
    }
  }
`

const NavBar = () => {
  const isTop = useScrollFromTop()
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <Styles>
      <StyledNavContainer className={isTop ? 'default-nav' : ''}>
        <StyledNavBar>
          {isActive && <DimPage onClick={toggleIsActive} />}
          <NavLogo />

          <StyledMenuIcon>
            <a onClick={toggleIsActive}>
              <i className="material-icons">menu</i>
            </a>
          </StyledMenuIcon>

          <ul className={isActive ? 'expandable-menu active' : 'expandable-menu'}>
            {/* <div> */}
            {isActive && (
              <li>
                <ExpandableMenuHeader>
                  <StyledMenuIcon>
                    <a onClick={toggleIsActive}>
                      <i className="material-icons">close</i>
                    </a>
                  </StyledMenuIcon>
                  <ExpandableMenuLogo />
                </ExpandableMenuHeader>
              </li>
            )}
            <div className="admin-dropdown">
              <NavItem route="#" pageName="Admin" />
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
            {/* </div> */}

            {isActive && (
              <div>
                <StyledIconLinks>
                  <IconLinks />
                </StyledIconLinks>
              </div>
            )}
          </ul>
        </StyledNavBar>
      </StyledNavContainer>
    </Styles>
  )
}

export default NavBar
