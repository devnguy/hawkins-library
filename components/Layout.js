/**
 * Component to render children in a Container Component.
 */

import Container from './styles/Container'

const Layout = props => (
  <>
    <Container>{props.children}</Container>
  </>
)

export default Layout
