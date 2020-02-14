import styled from 'styled-components'
import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/Table'




import Form from '../../components/Form'

/**
 * Post request to server. Insert customer into db.
 */
const ManageBooks = () => (
  <Page>
    <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
    <Layout>
      <PageContent pageTitle="Admin: Manage Books">
        
        <Table />

      </PageContent>
    </Layout>
  </Page>
)

export default ManageBooks