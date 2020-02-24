import { useState, useEffect } from 'react'

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
  // Events state
  const [events, setEvents] = useState([])

  // Get initial state from db.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/library-events/get-library-events')
        const eventData = await response.json()
        setEvents(eventData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Page>
      <PageBanner bannerUrl="/banners/events-banner.jpeg" />
      <Layout>
        {events.map((event, index) => (
          <Section key={index}>
            {index % 2 ? <RightFeature content={event} button="Register" /> : <LeftFeature content={event} button="Register" />}
          </Section>
        ))}
      </Layout>
    </Page>
  )
}

export default Events