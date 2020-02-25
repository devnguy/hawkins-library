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


const ManageBooks = (props) => {
  const isEditable = true

  // Table state using initial props
  const [tableData, setTableData] = useState(props.bookData)
  // tableHeaders probably doesn't need to useState
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  // Form state
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [genre, setGenre] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  // Send data as post request to server to insert book.
  const addBook = async (e) => {
    e.preventDefault()
    const data = {
      title,
      author,
      publisher,
      genre,
      imgUrl
    }
    try {
      const response = await fetch('/api/books/add-book', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // Convert returned promise to json and set state.
      const bookData = await response.json()
      setTableData(bookData)
      // Reset input state and fields.
      setTitle('')
      setAuthor('')
      setPublisher('')
      setGenre('')
      setImgUrl('')
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Admin: Manage Books">
          
          <TableContext.Provider value={{ tableData, tableHeaders, setTableData, isEditable }}>
            <Table />

            <form onSubmit={addBook}>
              <FormFields>
                <Input 
                  type="text" 
                  placeholder="Title" 
                  value={title}
                  name="title" 
                  id="title"
                  onChange={(e) => {setTitle(e.target.value)}}
                  />
                <Input 
                  type="text" 
                  placeholder="Author" 
                  value={author}
                  name="author" 
                  id="author"
                  onChange={(e) => {setAuthor(e.target.value)}}
                  />
                <Input 
                  type="text" 
                  placeholder="Publisher" 
                  value={publisher}
                  name="publisher" 
                  id="publisher"
                  onChange={(e) => {setPublisher(e.target.value)}}
                  />
                <Input 
                  type="text" 
                  placeholder="Genre" 
                  value={genre}
                  name="genre" 
                  id="genre"
                  onChange={(e) => {setGenre(e.target.value)}}
                />
                <Input
                  type="text"
                  placeholder="Book Image URL"
                  value={imgUrl}
                  name="imgUrl"
                  id="imgUrl"
                  onChange={(e) => {setImgUrl(e.target.value)}}
                />
              </FormFields>
              <Button>Add Book</Button>
            </form>

          </TableContext.Provider>

        </PageContent>
      </Layout>
    </Page>
  )
}

ManageBooks.getInitialProps = async () => {
  const url = process.env.NODE_ENV !== 'production' ? 
    process.env.DEV_ENDPOINT : 
    process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/books/get-manage-books`)
  const data = await response.json()

  return {
    keys: Object.keys(data[0]),
    bookData: data.map(entry => entry)
  }
}

export default ManageBooks