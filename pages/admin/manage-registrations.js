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

  const [tableData, setTableData] = useState(props.registrationData)
  // tableHeaders probably doesn't need to useState
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  const [registrations, setRegistrations] = useState(props.registrationData)

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
