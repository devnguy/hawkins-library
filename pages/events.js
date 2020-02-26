import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import styled from 'styled-components'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import { LeftEvent, RightEvent } from '../components/Event'
import { LeftFeature, RightFeature } from '../components/Feature'
import Section from '../components/styles/Section'


const StyledEventsContent = styled.div`
`

const Events = (props) => {
  // Events state
  const [events, setEvents] = useState(props.eventData)

  return (
    <Page>
      <PageBanner bannerUrl="/banners/events-banner.jpeg" />
      <Layout>
        {events.map((event, index) => (
          <Section key={index}>
            {
              index % 2 ? 
                <RightFeature content={event} button="Register" eventId={event.eventId} /> : 
                <LeftFeature content={event} button="Register" eventId={event.eventId} />
            }
          </Section>
        ))}
      </Layout>
    </Page>
  )
}

Events.getInitialProps = async () => {
  const url = process.env.NODE_ENV !== 'production' ? 
    process.env.DEV_ENDPOINT : 
    process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/library-events/get-library-events`)
  const data = await response.json()

  return {
    eventData: data.map(entry => entry)
  }
}

export default Events