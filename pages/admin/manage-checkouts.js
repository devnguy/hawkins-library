/* The manage-checkouts page will read and display information from the
 * checkoutOrders table. Information about the one-to-many relationship
 * between checkoutOrders and customers will be displayed in the table
 * by showing each checkout a customer has made. */

import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import styled from 'styled-components'
import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'

const ManageCheckouts = props => {
  const isEditable = false

  // Used to fill table with data from database
  const [tableData, setTableData] = useState(props.checkoutData)
  // Table headers for table
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  // Checkout data that will be displayed within the table
  const [checkouts, setCheckouts] = useState(props.checkoutData)

  // Returning the content that will be displayed on the page
  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Admin: Manage Checkouts">
          <TableContext.Provider
            value={{
              tableData,
              tableHeaders,
              setTableData,
              isEditable,
              deleteItems: checkouts,
              item: 'checkout'
            }}
          >
            <Table />
          </TableContext.Provider>
        </PageContent>
      </Layout>
    </Page>
  )
}

// Reading initial checkout data from the checkoutOrders table
ManageCheckouts.getInitialProps = async () => {
  const url =
    process.env.NODE_ENV !== 'production' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/checkouts/get-checkouts`)
  const data = await response.json()

  return {
    keys: Object.keys(data[0]),
    checkoutData: data.map(entry => entry)
  }
}

export default ManageCheckouts
