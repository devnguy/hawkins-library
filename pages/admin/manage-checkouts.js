import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'
import Form from '../../components/Form'


const ManageCheckouts = () => {
  const url = `http://localhost:3000`
  const isEditable = false

  const [tableData, setTableData] = useState([])
  const [tableHeaders, setTableHeaders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/get-checkout-orders`)
        const checkoutsData = await response.json()
        setTableHeaders(Object.keys(checkoutsData[0]))
        setTableHeaders(
          isEditable ? headers => [...headers, 'modify'] : headers => [...headers]
        )
        setTableData(checkoutsData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Admin: Manage Checkouts">
          
          <TableContext.Provider value={{ tableData, tableHeaders, setTableData, isEditable }}>
            <Table />
          </TableContext.Provider>

        </PageContent>
      </Layout>
    </Page>

  )
}

export default ManageCheckouts