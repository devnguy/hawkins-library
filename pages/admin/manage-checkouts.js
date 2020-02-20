import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'
import Form from '../../components/Form'

/**
 * Post request to server. Insert customer into db.
 */
const ManageCheckouts = () => {
  const url = `http://localhost:3000`
  const sampleDataFromServer = {
    headers: ['name', 'age', 'food'],
    data: [
      {
        name: 'marney',
        age: '54',
        food: 'poppy seeds'
      }, {
        name: 'marvin',
        age: '81',
        food: 'bagel'
      }
    ]
  }

  const [tableData, setTableData] = useState(sampleDataFromServer)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}`)
        const bookData = await response.json()
        console.log(bookData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    
  })


  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Admin: Manage Checkouts">
          
          <TableContext.Provider value={{ tableData, setTableData }}>
            <Table />
          </TableContext.Provider>

        </PageContent>
      </Layout>
    </Page>

  )
}

export default ManageCheckouts