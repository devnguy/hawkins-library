import { useState, useEffect, useContext } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import Button from '../components/styles/Button'
import Book from '../components/Book'
import BookContext from '../context/book-context'
import LibraryModal from '../components/LibraryModal'
import ModalContext from '../context/modal-context'

const StyledLibraryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.4rem 2.4rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    grid-template-columns: 1fr;
  }
`

const StyledCheckoutInput = styled.div`
  width: 100%;
`

const StyledSearchBar = styled.div`
  margin: -5rem 0rem 5rem 0rem;
  input {
    font-size: 3rem;
    padding: 1rem 1rem;
    margin: 0rem 0rem 0rem 10.5rem;
    width: 60%;
    background: rgba(255, 255, 255, 0.95);
    /* border: none; */
    color: ${props => props.theme.black};
    /* box-shadow: 5px 10px 8px #888888; */
    outline: none;
    transition: all 700ms cubic-bezier(0.23, 1, 0.32, 1);
    :focus {
      width: 83.5%;
    }
  }
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

  // Used for book search
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const [checkedBooks, setCheckedBooks] = useState([])
  const addCheckedBook = newBook => {
    setCheckedBooks([...checkedBooks, newBook])
  }
  const removeCheckedBook = book => {
    setCheckedBooks(checkedBooks.filter(checkedBook => checkedBook !== book))
  }

  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  /* Setting search term in order to find matching book titles.
     Source for filter: https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg */
  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  // Filtering book titles based on search term.
  useEffect(() => {
    const results = books.filter(book => book.title.toLowerCase().includes(searchTerm))
    setSearchResults(results)
  }, [searchTerm])

  return (
    <Page>
      <PageBanner bannerUrl="/banners/library-banner.jpeg" />
      <StyledSearchBar>
        <input
          type="text"
          placeholder="Search for a book"
          value={searchTerm}
          onChange={handleChange}
        ></input>
      </StyledSearchBar>
      <Layout>
        <PageContent pageTitle="Library">
          <StyledLibraryContent>
            <BookContext.Provider
              value={{
                checkedBooks,
                addCheckedBook,
                removeCheckedBook
              }}
            >
              {searchResults.map(book => (
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
            <Button onClick={checkedBooks && openModal}>
              Check Out <i className="material-icons">arrow_forward_ios</i>
            </Button>

            <ModalContext.Provider value={{ isOpen, closeModal }}>
              <LibraryModal checkedBooks={checkedBooks} />
            </ModalContext.Provider>
          </StyledCheckoutInput>
        </PageContent>
      </Layout>
    </Page>
  )
}

Library.getInitialProps = async () => {
  const url =
    process.env.NODE_ENV !== 'production' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/books/get-library-books`)
  const data = await response.json()

  return {
    bookData: data.map(entry => entry)
  }
}

export default Library
