/* The manage-books page will read and display information from the books table.
 * Additionally, it will have functionality to update and delete rows from the
 * books table. Information about the one-to-many relationship between books
 * and checkoutOrders will be displayed in the table by showing the order
 * number associated with each book. */

import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import Page from '../../components/Page'
import PageBanner from '../../components/PageBanner'
import PageContent from '../../components/styles/PageContent'
import Table from '../../components/table/Table'
import TableContext from '../../context/table-context'
import ModalContext from '../../context/modal-context'
import AddBookModal from '../../components/modals/AddBookModal'

import Button from '../../components/styles/Button'

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

  // Used to fill table with data from database
  const [tableData, setTableData] = useState(props.bookData)
  // Whether or not a query is being processed
  const [isLoading, setIsLoading] = useState(false)
  // Table headers for headers
  const [tableHeaders, setTableHeaders] = useState(
    isEditable ? () => [...props.keys, 'modify'] : () => [...props.keys]
  )

  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  // Functionality: updating a row from the books table
  const handleUpdateBook = async body => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/books/update-manage-book', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      const updatedBooks = data.books.map(book => ({ id: book.bookId, ...book }))

      // Setting table with updated information
      setTableData(updatedBooks)
      setIsLoading(false)
      // Return true/false depending on whether row was successfully updated.
      return data.statusNo === 0 ? true : false
    } catch (error) {
      console.log(error)
    }
  }

  // Functionality: deleting a row from the books table
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

      // Updating table data
      setTableData(updatedBooks)
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
        <PageContent>
          <FlexContainer>
            <h1>Admin: Manage Books</h1>
            <StyledAddButton>
              <Button onClick={openModal}>Add Book +</Button>
            </StyledAddButton>
          </FlexContainer>

          <ModalContext.Provider
            value={{
              isOpen,
              closeModal,
              setTableData
            }}
          >
            <AddBookModal />
          </ModalContext.Provider>

          <TableContext.Provider
            value={{
              tableData,
              tableHeaders,
              setTableData,
              isEditable,
              handleUpdate: handleUpdateBook,
              handleDelete: handleDeleteBook,
              item: 'book'
            }}
          >
            <Table />
          </TableContext.Provider>
        </PageContent>
      </Layout>
    </Page>
  )
}

// Functionality: Reading the initial book data from database
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
