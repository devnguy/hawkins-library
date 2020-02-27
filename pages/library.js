import { useState, useEffect, useContext } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import Button from '../components/styles/Button'
import Input from '../components/Input'
import Book from '../components/Book'
import BookContext from '../context/book-context'

const StyledLibraryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.4rem 2.4rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    grid-template-columns: 1fr;
  }
`

const StyledCheckoutInput = styled.div`
  width: 100%;
`

/**
 * When user clicks on '+', translate/transform to check mark.
 * Use state to keep track of books added and removed from 'cart'.
 * At bottom of page, have user type in user id, and click checkout button.
 * Send request to database to with changes.
 * Modal pop up confirming checkout successful.
 */
const Library = props => {
  // Books state
  const [books, setBooks] = useState(props.bookData)
  // var checkedBooks = []
  const [checkedBooks, setCheckedBooks] = useState([])

  const addCheckedBook = newBook => {
    setCheckedBooks([...checkedBooks, newBook])
  }

  const removeCheckedBook = book => {
    setCheckedBooks(checkedBooks.filter(checkedBook => checkedBook !== book))
  }

  return (
    <Page>
      <PageBanner bannerUrl="/banners/library-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Library">
          <StyledLibraryContent>
            <BookContext.Provider
              value={{ checkedBooks, addCheckedBook, removeCheckedBook }}
            >
              {books.map(book => (
                <Book
                  key={book.bookId}
                  bookTitle={book.title}
                  bookImgUrl={book.imgUrl}
                  bookAuthor={book.author}
                  action="add"
                />
              ))}
            </BookContext.Provider>
          </StyledLibraryContent>

          <StyledCheckoutInput>
            <Input placeholder="User ID" />
            <Button>
              Check Out <i className="material-icons">arrow_forward_ios</i>
            </Button>
          </StyledCheckoutInput>
        </PageContent>
      </Layout>
    </Page>
  )
}

Library.getInitialProps = async () => {
  const url =
    process.env.NODE_ENV !== 'production'
      ? process.env.DEV_ENDPOINT
      : process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/books/get-library-books`)
  const data = await response.json()

  return {
    bookData: data.map(entry => entry)
  }
}

export default Library
