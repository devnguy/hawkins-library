import styled from 'styled-components'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import { LargeButton } from '../components/styles/Button'


import Form from '../components/Form'

const StyledSignupContent = styled.div`
  /* display: flex;
  justify-content: space-around;
  flex-wrap: wrap; */
`



/**
 * Post request to server. Insert customer into db.
 */
const Signup = () => (
  <Page>
    <PageBanner bannerUrl="/banners/signup-banner.jpeg" />
    <Layout>
      <PageContent pageTitle="Become a Hawkins Library Patron">
        
        <StyledSignupContent>
          <Form />
          <LargeButton>Sign Up <i className="material-icons">arrow_forward_ios</i></LargeButton>
        </StyledSignupContent>

      </PageContent>
    </Layout>
  </Page>
)

export default Signup