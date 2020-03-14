/* The manage-events page will read and display information from the events table.
 * Additionally, it will have functionality to update and delete rows
 * from the events table. */

import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

import Button from '../../components/styles/Button'
import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'
import ModalContext from '../../context/modal-context'
import AddEventModal from '../../components/modals/AddEventModal'

const FlexContainer = styled.div`
  top: -2.4rem;
  display: flex;
  justify-content: space-between;
  h1 {
    margin: 0;
  }
  margin-bottom: 2.4rem;
`

const StyledAddButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    height: 80%;
  }
`

const ManageEvents = props => {
  const isEditable = true

  // Used to fill table with data from database
  const [tableData, setTableData] = useState(props.eventData)
  // Whether or not a query is being processed
  const [isLoading, setIsLoading] = useState(false)
  // Table headers for table
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  // Functionality: updating a row from the events table
  const handleUpdateEvent = async data => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/library-events/update-event', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      const updatedEvents = res.map(event => ({ id: event.eventId, ...event }))

      // Setting table with updated information
      setTableData(updatedEvents)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // Functionality: deleting a row from the events table
  const handleDeleteEvent = async data => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/library-events/delete-event', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      const updatedEvents = res.map(event => ({ id: event.eventId, ...event }))
      setTableData(updatedEvents)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // Returning the content that will be displayed on the page
  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent>
          <FlexContainer>
            <h1>Admin: Manage Events</h1>
            <StyledAddButton>
              <Button onClick={openModal}>Add Event +</Button>
            </StyledAddButton>
          </FlexContainer>

          <ModalContext.Provider
            value={{
              isOpen,
              closeModal,
              setTableData
            }}
          >
            <AddEventModal />
          </ModalContext.Provider>

          <TableContext.Provider
            value={{
              tableData,
              tableHeaders,
              setTableData,
              isEditable,
              handleUpdate: handleUpdateEvent,
              handleDelete: handleDeleteEvent,
              item: 'event'
            }}
          >
            <Table />
          </TableContext.Provider>
        </PageContent>
      </Layout>
    </Page>
  )
}

// Reading the initial event data from the events table
ManageEvents.getInitialProps = async () => {
  const url =
    process.env.NODE_ENV !== 'production' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/library-events/get-manage-events`)
  const data = await response.json()

  return {
    keys: Object.keys(data[0]),
    eventData: data.map(entry => ({
      id: entry.eventId,
      name: entry.name,
      date: entry.date,
      guest: entry.guest,
      description: entry.description
    }))
  }
}

export default ManageEvents
