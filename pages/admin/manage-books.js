import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import BooksTableContext from '../../context/books-table-context'
import Form from '../../components/Form'

/**
 * Post request to server. Insert customer into db.
 */
const ManageBooks = () => {
  const sampleDataFromServer = {
    headers: ['name', 'age', 'food'],
    data: [
      {
        name: 'fred',
        age: '12',
        food: 'chicky nuggies'
      }, {
        name: 'mills',
        age: '34',
        food: 'chicky parm parm'
      }
    ]
  }

  const [tableData, setTableData] = useState(sampleDataFromServer)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://flip2.engr.oregonstate.edu:8042`)
        const workoutData = await response.json()
        console.log(workoutData);
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
        <PageContent pageTitle="Admin: Manage Books">
          
          <BooksTableContext.Provider value={{ tableData, setTableData }}>
            <Table />
          </BooksTableContext.Provider>

        </PageContent>
      </Layout>
    </Page>

  )
}

export default ManageBooks