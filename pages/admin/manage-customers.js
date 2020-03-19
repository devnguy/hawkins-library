/* The manage-customers page will read and display information from the customers table.
 * Additionally, it will have functionality to update and delete rows from
 * the customers table. */

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

  // Used to fill table with data from database
  const [tableData, setTableData] = useState(props.customerData)
  // Whether or not a query is being processed
  const [isLoading, setIsLoading] = useState(false)
  // Table headers for table
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  // Getting full names of customers for delete functionality
  const [customerNames, setCustomerNames] = useState(
    props.customerData.map(customer => customer.firstName + ' ' + customer.lastName)
  )

  // Functionality: updating a row from the customers table
  const handleUpdateCustomer = async body => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/customers/update-customer', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      const updatedCustomers = data.customers.map(customer => ({
        id: customer.customerId,
        ...customer
      }))

      // Setting table with updated information
      setTableData(updatedCustomers)
      setIsLoading(false)
      // Return true/false depending on whether row was successfully updated.
      return data.statusNo === 0 ? true : false
    } catch (error) {
      console.log(error)
    }
  }

  // Functionality: deleting a row from the customers table
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

      // Setting table with updated information
      setTableData(updatedCustomers)
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

// Reading the initial customer data from the customers table
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
