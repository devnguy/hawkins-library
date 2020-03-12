import Link from '../../components/Link'
import styled from 'styled-components'

// Default nav
const StyledNavItem = styled.li`
  margin: 0 1em;
  text-transform: uppercase;
  line-height: 8rem;
  padding: 0 0.94rem;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    line-height: 3.4rem;
    margin: 0;
    padding: 0 4rem;
  }
  @media (max-width: ${props => props.theme.screenSizeSm}) {
    line-height: 3.4rem;
    margin: 0;
    padding: 0 2.4rem;
  }
`

const NavItem = props => (
  <StyledNavItem lineHeight={props.lineHeight}>
    <Link href={props.route}>
      <a>{props.pageName}</a>
    </Link>
  </StyledNavItem>
)

// Admin nav
export const StyledAdminNavItem = styled.li`
  margin: 0 1em;
  text-transform: uppercase;
  line-height: 4rem;
  padding: 0 0.94rem;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    line-height: 3.4rem;
    margin: 0;
    padding: 0 4rem 0 0;
  }
  @media (max-width: ${props => props.theme.screenSizeSm}) {
    padding: 0 2.4rem;
  }
`

export const AdminNavItem = props => (
  <StyledAdminNavItem lineHeight={props.lineHeight}>
    <Link href={props.route}>
      <a>{props.pageName}</a>
    </Link>
  </StyledAdminNavItem>
)

export default NavItem
