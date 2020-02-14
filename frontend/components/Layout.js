import Header from './Header'
import Container from './styles/Container'


const Layout = props => (
  <>
    <Header />
    <Container>
      {props.children}
    </Container>
  </>
)

export default Layout
