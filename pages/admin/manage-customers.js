import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'

const ManageCustomers = props => {
  const isEditable = true

  const [tableData, setTableData] = useState(props.customerData)
  // tableHeaders probably doesn't need to useState
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Admin: Manage Customers">
          <TableContext.Provider
            value={{ tableData, tableHeaders, setTableData, isEditable }}
          >
            <Table />
          </TableContext.Provider>
        </PageContent>
      </Layout>
    </Page>
  )
}

ManageCustomers.getInitialProps = async () => {
  const url =
    process.env.NODE_ENV !== 'production'
      ? process.env.DEV_ENDPOINT
      : process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/customers/get-customers`)
  const data = await response.json()

  return {
    keys: Object.keys(data[0]),
    customerData: data.map(entry => (
      {
        id: entry.customerId,
        firstName: entry.firstName,
        lastName: entry.lastName,
        email: entry.email,
        phone: entry.phone,
        dateJoined: entry.dateJoined,
      }
    ))
  }
}

export default ManageCustomers
