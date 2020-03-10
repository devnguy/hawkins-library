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
  const [isLoading, setIsLoading] = useState(false)
  // tableHeaders probably doesn't need to useState
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  // Getting full names of customers for delete functionality
  const [customerNames, setCustomerNames] = useState(
    props.customerData.map(customer => customer.firstName + ' ' + customer.lastName)
  )

  const handleUpdateCustomer = async data => {
    // e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('/api/customers/update-customer', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      const updatedCustomers = res.map(customer => ({ id: customer.customerId, ...customer }))
      setTableData(updatedCustomers)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteCustomer = async data => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/customers/delete-customer', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      const updatedCustomers = res.map(customer => ({ id: customer.customerId, ...customer }))
      setTableData(updatedCustomers)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Admin: Manage Customers">
          <TableContext.Provider
            value={{
              tableData,
              tableHeaders,
              isEditable,
              handleUpdate: handleUpdateCustomer,
              handleDelete: handleDeleteCustomer,
              deleteItems: customerNames,
              item: 'customer'
            }}
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
    process.env.NODE_ENV !== 'production' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/customers/get-customers`)
  const data = await response.json()

  return {
    keys: Object.keys(data[0]),
    customerData: data.map(entry => ({
      id: entry.customerId,
      firstName: entry.firstName,
      lastName: entry.lastName,
      email: entry.email,
      phone: entry.phone,
      dateJoined: entry.dateJoined
    }))
  }
}

export default ManageCustomers
