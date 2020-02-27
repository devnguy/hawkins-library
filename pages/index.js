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
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ab iusto facere, minus non pariatur. Animi iste sunt omnis aliquid ipsam, recusandae, vero, mollitia illo totam odit.',
    button: 'See our collection ',
    imgUrl: '/features/feature03.jpeg'
  }
  const feature2 = {
    name:
      'There is no such thing as a child who hates to read; there are only children who have not found the right book.',
    description:
      'At our monthly reading clubs, pairs of volunteers read aloud to small groups of children, while their parents receive training on how to encourage their children to read at home.',
    button: 'Find out more ',
    imgUrl: '/features/feature02.jpeg'
  }
  return (
    <Page>
      <Hero />
      <Layout>
        <Section>
          <LeftFeature content={feature1} button={feature1.button} />
        </Section>
        <Section>
          <RightFeature content={feature2} button={feature2.button} />
        </Section>
      </Layout>
    </Page>
  )
}

export default Index
