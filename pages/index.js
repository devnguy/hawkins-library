/* The index page of the website will display information about
 * the library's website, contain search functionality for
 * events and books, and provide links to the library and
 * event pages. */

import Layout from '../components/Layout'
import { LeftFeature, RightFeature } from '../components/Feature'
import Section from '../components/styles/Section'
import Page from '../components/Page'
import Hero from '../components/Hero'

const Index = () => {
  const feature1 = {
    name:
      'That perfect tranquility of life, which is nowhere to be found but in retreat, a faithful friend, and a good library.',
    description:
      'We are a nonprofit, public library located in the quiet, uneventful town of Hawkins. We have over 100,000 books available for checkout at our physical location and online.',
    button: 'See our collection ',
    imgUrl: '/features/feature03.jpeg',
    route: '/library'
  }
  const feature2 = {
    name:
      'There is no such thing as a child who hates to read; there are only children who have not found the right book.',
    description:
      'At our monthly reading clubs, pairs of volunteers read aloud to small groups of children, while their parents receive training on how to encourage their children to read at home.',
    button: 'Find out more ',
    imgUrl: '/features/feature02.jpeg',
    route: '/events'
  }
  return (
    <Page>
      <Hero />
      <Layout>
        <Section>
          <LeftFeature content={feature1} button={feature1.button} route={feature1.route} />
        </Section>
        <Section>
          <RightFeature content={feature2} button={feature2.button} route={feature2.route} />
        </Section>
      </Layout>
    </Page>
  )
}

export default Index
