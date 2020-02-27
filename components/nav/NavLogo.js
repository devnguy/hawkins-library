import styled from 'styled-components'
import Link from 'next/link'

const StyledNavLogo = styled.div`
  margin: 0 1em;
  text-transform: uppercase;
  line-height: 8rem;
  padding: 0 0.94rem;
  height: 7rem;
  a {
    font-family: 'Raleway', sans-serif;
    font-size: 3.2rem;
  }
`

const NavLogo = () => (
  <StyledNavLogo>
    <Link href="/">
      <a>HAWKINS</a>
    </Link>
  </StyledNavLogo>
)

export default NavLogo
