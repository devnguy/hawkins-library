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
  // Replace this garbage with data from db.
  const features = [
    {
      title: 'That perfect tranquility of life, which is nowhere to be found but in retreat, a faithful friend, and a good library.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ab iusto facere, minus non pariatur. Animi iste sunt omnis aliquid ipsam, recusandae, vero, mollitia illo totam odit.',
      button: 'Register ',
      imgSrc: '/features/feature04.jpeg'
    }, {
      title: 'There is no such thing as a child who hates to read; there are only children who have not found the right book.',
      body: 'At our monthly reading clubs, pairs of volunteers read aloud to small groups of children, while their parents receive training on how to encourage their children to read at home.',
      button: 'Register ',
      imgSrc: '/features/feature01.jpeg'
    }, {
      title: 'A reader lives a thousand lives before he dies. The man who never reads lives only one.',
      body: 'Meet George R.R. Martin, the renowned author of Harry Pooter and the Storm of Swords. At this book signing and Q&A, ask him questions like "How dare you?" and "Will you marry me?"',
      button: 'Register ',
      imgSrc: '/features/feature02.jpeg'
    }, {
      title: 'We read to know we\'re not alone.',
      body: 'After 1000 years of solitude, Huckleberry Finn is finally able to escape the evil grasps of Jay Gatsby. He meets the love of his life, Peta, a talking chocolate factory.',
      button: 'Register ',
      imgSrc: '/features/feature03.jpeg'
    }
  ]
  return (
    <Page>
      <PageBanner bannerUrl="/banners/events-banner.jpeg" />
      <Layout>
        {features.map((feature, index) => (
          <Section key={index}>
            {index % 2 ? <RightFeature content={feature} /> : <LeftFeature content={feature} />}
          </Section>
        ))}
      </Layout>
    </Page>
  )
}

export default Events