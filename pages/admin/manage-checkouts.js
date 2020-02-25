import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import styled from 'styled-components'
import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'

const ManageCheckouts = (props) => {
  const isEditable = false

  const [tableData, setTableData] = useState(props.checkoutData)
  // tableHeaders probably doesn't need to useState
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

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

ManageCheckouts.getInitialProps = async () => {
  const url = process.env.NODE_ENV !== 'production' ? 
    process.env.DEV_ENDPOINT : 
    process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/checkouts/get-checkouts`)
  const data = await response.json()

  return {
    keys: Object.keys(data[0]),
    checkoutData: data.map(entry => entry)
  }
}

export default ManageCheckouts