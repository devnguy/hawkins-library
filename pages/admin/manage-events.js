import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'
import Form from '../../components/Form'

import { FormFields } from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/styles/Button'

/**
 * Post request to server. Insert customer into db.
 */
const ManageEvents = () => {
  const url = `http://localhost:3000`
  const isEditable = true

  const [tableData, setTableData] = useState([])
  const [tableHeaders, setTableHeaders] = useState([])

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [guest, setGuest] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/get-events`)
        const eventData = await response.json()
        setTableHeaders(Object.keys(eventData[0]))

        setTableHeaders(
          isEditable ? headers => [...headers, 'modify'] : headers => [...headers]
        )

        setTableData(eventData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const addEvent = async (e) => {
    e.preventDefault()
    const data = {
      name,
      date,
      guest
    }

    try {
      const response = await fetch(`${url}/add-event`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const eventData = await response.json()
      setTableData(eventData)

      setName('')
      setDate('')
      setGuest('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Admin: Manage Events">
          
          <TableContext.Provider value={{ tableData, tableHeaders, setTableData, isEditable }}>
            <Table />

            <form onSubmit={addEvent}>
              <FormFields>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  id="name"
                  onChange={(e) => {setName(e.target.value)}}
                />
                <Input
                  type="date"
                  value={date}
                  name="date"
                  id="date"
                  onChange={(e) => {setDate(e.target.value)}}
                />
                <Input
                  type="text"
                  placeholder="Guest"
                  value={guest}
                  name="guest"
                  id="guest"
                  onChange={(e) => {setGuest(e.target.value)}}
                />
              </FormFields>
              <Button>Add Event</Button>
            </form>

          </TableContext.Provider>

        </PageContent>
      </Layout>
    </Page>

  )
}

export default ManageEvents