import styled from 'styled-components'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import { LeftFeature, RightFeature } from '../components/Feature'
import Section from '../components/styles/Section'



// import Book from '../components/Book'

const StyledEventsContent = styled.div`
  /* display: flex;
  justify-content: space-around;
  flex-wrap: wrap; */
`

const Events = () => (
  <Page>
    <PageBanner bannerUrl="/banners/events-banner.jpeg" />
    <Layout>
      <PageContent pageTitle="Events">
        {/* <StyledEventsContent> */}
          {/* Content will be replaced with database content */}
          <Section>
            <LeftFeature />
          </Section>
          <Section>
            <RightFeature />
          </Section>

        {/* </StyledEventsContent> */}
      </PageContent>
    </Layout>
  </Page>
)

export default Events