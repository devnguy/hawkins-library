import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'

import { FormFields } from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/styles/Button'


const ManageEvents = (props) => {
  const isEditable = true

  const [tableData, setTableData] = useState(props.eventData)
  // tableHeaders probably doesn't need to useState
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [guest, setGuest] = useState('')
  const [description, setDescription] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const addEvent = async (e) => {
    e.preventDefault()
    const data = {
      name,
      date,
      guest,
      description,
      imgUrl
    }

    try {
      const response = await fetch('/api/library-events/add-event', {
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
      setDescription('')
      setImgUrl('')

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
                <Input
                  type="text"
                  placeholder="Event Description"
                  value={description}
                  name="description"
                  id="description"
                  onChange={(e) => {setDescription(e.target.value)}}
                />
                <Input
                  type="text"
                  placeholder="Event Image URL"
                  value={imgUrl}
                  name="imgUrl"
                  id="imgUrl"
                  onChange={(e) => {setImgUrl(e.target.value)}}
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

ManageEvents.getInitialProps = async () => {
  const url = process.env.NODE_ENV !== 'production' ? 
    process.env.DEV_ENDPOINT : 
    process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/library-events/get-manage-events`)
  const data = await response.json()

  return {
    keys: Object.keys(data[0]),
    eventData: data.map(entry => entry)
  }
}

export default ManageEvents