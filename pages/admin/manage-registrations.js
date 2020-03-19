/* The manage-registrations page will read and display information from the
 * eventRegistrations table. This page will serve as the table to show
 * the many-to-many relationship between events and customers by displaying
 * the ID and name of customers have signed up for an event. */

import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'

const ManageRegistrations = props => {
  const isEditable = false

  // Used to fill table with data from database
  const [tableData, setTableData] = useState(props.registrationData)
  // Table headers for table
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  const [registrations, setRegistrations] = useState(props.registrationData)

  // Returning the content that will be displayed on the page
  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Admin: Manage Registrations">
          <TableContext.Provider
            value={{
              tableData,
              tableHeaders,
              setTableData,
              deleteItems: registrations,
              item: 'registration'
            }}
          >
            <Table />
          </TableContext.Provider>
        </PageContent>
      </Layout>
    </Page>
  )
}

/* Many-to-many relationship between customers and events: Reading the initial registration
 * data from the eventRegistrations table */
ManageRegistrations.getInitialProps = async () => {
  const url =
    process.env.NODE_ENV !== 'production' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/registrations/get-registrations`)
  const data = await response.json()

  return {
    keys: Object.keys(data[0]),
    registrationData: data.map(entry => entry)
  }
}

export default ManageRegistrations
