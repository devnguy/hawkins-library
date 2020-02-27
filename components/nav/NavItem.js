import Link from 'next/link'
import styled from 'styled-components'

// Default nav
const StyledNavItem = styled.li`
  margin: 0 1em;
  text-transform: uppercase;
  line-height: 8rem;
  padding: 0 0.94rem;
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
`

export const AdminNavItem = props => (
  <StyledAdminNavItem lineHeight={props.lineHeight}>
    <Link href={props.route}>
      <a>{props.pageName}</a>
    </Link>
  </StyledAdminNavItem>
)

export default NavItem
