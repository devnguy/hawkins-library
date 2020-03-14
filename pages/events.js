/* The events page will read and display information about events in the
 * database. It will also create a many-to-many relationship between
 * events and customers when customers sign up for events by adding
 * a row to the eventRegistrations table. */

import { useState } from 'react'
import fetch from 'isomorphic-unfetch'

import styled from 'styled-components'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import { LeftFeature, RightFeature } from '../components/Feature'
import Section from '../components/styles/Section'

const Events = props => {
  // Events state
  const [events, setEvents] = useState(props.eventData)

  // Returning the content that will be displayed on the page
  return (
    <Page>
      <PageBanner bannerUrl="/banners/events-banner.jpeg" />
      <Layout>
        {events.map((event, index) => (
          <Section key={index}>
            {index % 2 ? (
              <RightFeature content={event} button="Register" eventId={event.eventId} />
            ) : (
              <LeftFeature content={event} button="Register" eventId={event.eventId} />
            )}
          </Section>
        ))}
      </Layout>
    </Page>
  )
}

// Reading the initial book data from the database
Events.getInitialProps = async () => {
  const url =
    process.env.NODE_ENV !== 'production' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/library-events/get-library-events`)
  const data = await response.json()

  return {
    eventData: data.map(entry => entry)
  }
}

export default Events
