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
import LibraryModal from '../components/modals/LibraryModal'
import ModalContext from '../context/modal-context'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'

const StyledLibraryContent = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2.4rem 2.4rem;
`

const StyledCheckoutInput = styled.div`
  width: 100%;
`

const StyledSearchBar = styled.div`
  padding-bottom: 25px;
  display: flex;

  input {
    width: 55%;
    /* box-shadow: 2px 6px 7px rgb(210, 210, 210); */
    /* transition: all 700ms cubic-bezier(0.23, 1, 0.32, 1);
    :focus {
      width: 93%;
    } */
    border-right: none;
  }
  button {
    width: 5%;
    margin: auto;
    font-size: 1.6rem;
    color: #757575;
    background-color: ${props => props.theme.white};
    border: solid 1px ${props => props.theme.lightgray};
    border-left: none;
    line-height: 4rem;
    padding: 0 1rem;
    padding-left: 0;
    box-sizing: border-box;
  }
  select {
    width: 100%;
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
  const [allBooks, setAllBooks] = useState(props.bookData)

  // Used for book search
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // Used to track checked books added to order
  const [checkedBooks, setCheckedBooks] = useState([])
  const [checkedBookIds, setCheckedBookIds] = useState([])

  const [checkoutMade, setCheckoutMade] = useState(false)

  const [genre, setGenre] = useState('All Books')
  const handleGenreChange = e => {
    setGenre(e.target.value)

    e.target.value === 'All Books'
      ? setSearchResults(allBooks)
      : setSearchResults(allBooks.filter(book => book.genre === e.target.value))
  }

  // Adding/removing checked book titles to array
  const addCheckedBook = newBook => {
    setCheckedBooks([...checkedBooks, newBook])
  }
  const removeCheckedBook = book => {
    setCheckedBooks(checkedBooks.filter(checkedBook => checkedBook !== book))
  }

  // Adding/removing checked book IDs to array
  const addCheckedId = newId => {
    setCheckedBookIds([...checkedBookIds, newId])
  }
  const removeCheckedId = id => {
    setCheckedBookIds(checkedBookIds.filter(checkedId => checkedId !== id))
  }

  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setCheckoutMade(false)
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
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  const dropDownOptions = () => {
    var result = allBooks.reduce((unique, newBook) => {
      if (!unique.some(book => book.genre === newBook.genre)) {
        unique.push(newBook)
      }
      return unique
    }, [])

    return (
      <Dropdown>
        <select value={genre} onChange={handleGenreChange} className="genreSelect">
          <option value="All Books" label="All Books"></option>
          {result.map(book => (
            <option value={book.genre} label={book.genre}>
              {book.genre}
            </option>
          ))}
        </select>
      </Dropdown>
    )
  }

  return (
    <Page>
      <PageBanner bannerUrl="/banners/library-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Library">
          <StyledSearchBar>
            <Input
              type="text"
              placeholder="Search for a book"
              value={searchTerm}
              onChange={handleChange}
            ></Input>
            <button disabled>
              <i className="fa fa-search"></i>
            </button>
            <span> </span>
            {dropDownOptions()}
          </StyledSearchBar>
          <StyledLibraryContent>
            <BookContext.Provider
              value={{
                checkedBooks,
                addCheckedBook,
                removeCheckedBook,
                checkedBookIds,
                addCheckedId,
                removeCheckedId
              }}
            >
              {searchResults.map(book => (
                <Book
                  key={book.bookId}
                  bookTitle={book.title}
                  bookImgUrl={book.imgUrl}
                  bookAuthor={book.author}
                  id={book.bookId}
                  action="add"
                />
              ))}
            </BookContext.Provider>
          </StyledLibraryContent>

          <StyledCheckoutInput>
            <Button onClick={checkedBooks && openModal}>
              Check Out <i className="material-icons">arrow_forward_ios</i>
            </Button>

            <ModalContext.Provider
              value={{
                isOpen,
                closeModal,
                setSearchResults,
                setCheckedBooks,
                setCheckedBookIds,
                checkoutMade,
                setCheckoutMade
              }}
            >
              <LibraryModal checkedBooks={checkedBooks} checkedBookIds={checkedBookIds} />
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
