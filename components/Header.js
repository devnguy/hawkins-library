import Link from 'next/link'
import NavBar from './nav/NavBar'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <>
    <NavBar />
  </>
)

export default Header