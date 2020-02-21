import styled from 'styled-components'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import { LeftFeature, RightFeature } from '../components/Feature'
import Section from '../components/styles/Section'


const StyledEventsContent = styled.div`
  /* display: flex;
  justify-content: space-around;
  flex-wrap: wrap; */
`

const Events = () => {
  const feature1 = {
    title: 'That perfect tranquility of life, which is nowhere to be found but in retreat, a faithful friend, and a good library.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ab iusto facere, minus non pariatur. Animi iste sunt omnis aliquid ipsam, recusandae, vero, mollitia illo totam odit.',
    button: 'See our collection ',
    imgSrc: '/features/feature03.jpeg',
  }
  const feature2 = {
    title: 'There is no such thing as a child who hates to read; there are only children who have not found the right book.',
    body: 'At our monthly reading clubs, pairs of volunteers read aloud to small groups of children, while their parents receive training on how to encourage their children to read at home.',
    button: 'Find out more ',
    imgSrc: '/features/feature02.jpeg'
  }
  return (
    <Page>
      <PageBanner bannerUrl="/banners/events-banner.jpeg" />
      <Layout>
        {/* <PageContent pageTitle="Events"> */}
          {/* <StyledEventsContent> */}
            {/* Content will be replaced with database content */}
            <Section>
              <LeftFeature content={feature1} />
            </Section>
            <Section>
              <RightFeature content={feature2} />
            </Section>

          {/* </StyledEventsContent> */}
        {/* </PageContent> */}
      </Layout>
    </Page>

  )
}

export default Events