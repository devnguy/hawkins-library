import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import Modal from 'react-modal'

import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'
import Divider from '../../components/styles/Divider'

import { FormFields } from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/styles/Button'
import { modalStyle, StyledModalContent } from '../../components/styles/modalStyle'

/**
 * STYLES
 */
const FlexContainer = styled.div`
  top: -2.4rem;
  display: flex;
  justify-content: space-between;
  h1 {
    margin: 0;
  }
  margin-bottom: 2.4rem;
`

const StyledAddButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    height: 80%;
  }
`

/**
 * COMPONENT
 */
const ManageBooks = props => {
  const isEditable = true

  const [tableData, setTableData] = useState(props.bookData)
  const [isLoading, setIsLoading] = useState(false)
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

  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  // Getting book titles for delete functionality
  const [bookTitles, setBookTitles] = useState(props.bookData.map(book => book.title))

  // Send data as post request to server to insert book.
  const handleAddBook = async e => {
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
      // Reset input state and fields, close modal.
      setTitle('')
      setAuthor('')
      setPublisher('')
      setGenre('')
      setImgUrl('')
      closeModal()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateBook = async data => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/books/update-manage-book', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      const updatedBooks = res.map(book => ({ id: book.bookId, ...book }))
      setTableData(updatedBooks)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteBook = async data => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/books/delete-book', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      const updatedBooks = res.map(book => ({ id: book.bookId, ...book }))
      setTableData(updatedBooks)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Page>
      <PageBanner bannerUrl="/banners/admin-banner.jpeg" />
      <Layout>
        <PageContent>
          <FlexContainer>
            <h1>Admin: Manage Books</h1>
            <StyledAddButton>
              <Button onClick={openModal}>Add Book +</Button>
            </StyledAddButton>
          </FlexContainer>

          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={modalStyle}
            ariaHideApp={false}
            closeTimeoutMS={100}
          >
            <StyledModalContent>
              <h2>Adding Book</h2>
              <Divider />
              <form onSubmit={handleAddBook}>
                <FormFields>
                  <Input
                    type="text"
                    placeholder="Title *"
                    value={title}
                    name="title"
                    id="title"
                    onChange={e => {
                      setTitle(e.target.value)
                    }}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Author *"
                    value={author}
                    name="author"
                    id="author"
                    onChange={e => {
                      setAuthor(e.target.value)
                    }}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Publisher *"
                    value={publisher}
                    name="publisher"
                    id="publisher"
                    onChange={e => {
                      setPublisher(e.target.value)
                    }}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Genre *"
                    value={genre}
                    name="genre"
                    id="genre"
                    onChange={e => {
                      setGenre(e.target.value)
                    }}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Book Image URL"
                    value={imgUrl}
                    name="imgUrl"
                    id="imgUrl"
                    onChange={e => {
                      setImgUrl(e.target.value)
                    }}
                  />
                </FormFields>
                <Button>Add Book</Button>
                <a onClick={closeModal}>CANCEL</a>
              </form>
            </StyledModalContent>
          </Modal>

          <TableContext.Provider
            value={{
              tableData,
              tableHeaders,
              setTableData,
              isEditable,
              handleUpdate: handleUpdateBook,
              handleDelete: handleDeleteBook,
              deleteItems: bookTitles,
              item: 'book'
            }}
          >
            <Table />
          </TableContext.Provider>
        </PageContent>
        {/* <span>{console.log(bookTitles)}</span> */}
      </Layout>
    </Page>
  )
}

ManageBooks.getInitialProps = async () => {
  const url =
    process.env.NODE_ENV !== 'production' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/books/get-manage-books`)
  const data = await response.json()

  return {
    keys: Object.keys(data[0]),
    bookData: data.map(entry => ({
      id: entry.bookId,
      oid: entry.oid,
      title: entry.title,
      author: entry.author,
      publisher: entry.publisher,
      genre: entry.genre
    }))
  }
}

export default ManageBooks
