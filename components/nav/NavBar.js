import styled from 'styled-components'
import NavItem, { AdminNavItem } from './NavItem'
import useScrollFromTop from '../hooks/useScrollFromTop'
import NavLogo from './NavLogo'


const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.white};
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  margin: 0;
  width: 100%;
  /* height: 7rem; */
  /* padding: 0 5%; */
  box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1);
  transition: 250ms;

  ul {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 1.3rem;
  }
`

const StyledNavContainer = styled.div`
  /* Transparent nav, active when at the top of page. */
  .default-nav {
    background: transparent;
    box-shadow: inset 0 4rem 40px rgba(0,0,0,0.22);
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
  }
  .admin-dropdown-menu {
    padding: 1rem 0;
    background: ${props => props.theme.white};
    width: 200px;
    display: none;
    position: absolute;
    /* vertical-align: baseline; */
    transition: 200ms;
    box-shadow: 0px 10px 15px -10px rgba(0,0,0,0.3); /*md shadow*/
    li a {
      color: ${props => props.theme.black};
      line-height: 1rem;
      :hover {
        color: ${props => props.theme.red};
      }
    }
  }
  .admin-dropdown:hover .admin-dropdown-menu {
    display: block;
  }
`

const NavBar = () => {
  const isTop = useScrollFromTop()
  
  return (
    <StyledNavContainer>
      <StyledNavBar className={isTop ? 'default-nav' : ''} id="nav">
        <NavLogo />
        <ul>
          <div className="admin-dropdown">
            <NavItem route="/" pageName="Admin" />
            <div className="admin-dropdown-menu">
              <AdminNavItem route="/admin/manage-books" pageName="Manage Books" />
              <AdminNavItem route="/manage-events" pageName="Manage Events" />
              <AdminNavItem route="/checkouts" pageName="Manage Checkouts" />
              <AdminNavItem route="/" pageName="Another" />
            </div>

          </div>
          <NavItem route="/library" pageName="Library" />
          <NavItem route="/events" pageName="Events" />
          <NavItem route="/return" pageName="Return Books" />
          <NavItem route="/signup" pageName="Sign Up" />
        </ul>
      </StyledNavBar>
    </StyledNavContainer>
  )
}


export default NavBar