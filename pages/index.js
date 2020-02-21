import Layout from '../components/Layout'
import { LeftFeature, RightFeature } from '../components/Feature'
import Section from '../components/styles/Section'
import Page from '../components/Page'
import Hero from '../components/Hero'

const Index = () => {
  const title1 = 'That perfect tranquility of life, which is nowhere to be found but in retreat, a faithful friend, and a good library.'
  const body1 = ''
  return (
    <Page>
      <Hero />
      <Layout>
        <Section>
          <LeftFeature />
        </Section>
        <Section>
          <RightFeature />
        </Section>
      </Layout>
    </Page>
  )
}

export default Index