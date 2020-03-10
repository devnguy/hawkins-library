import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import Button, { LargeButton } from '../components/styles/Button'
import Book from '../components/Book'
import Input from '../components/Input'
import Divider from '../components/styles/Divider'
import BookContext from '../context/book-context'
import Section from '../components/styles/Section'
import Spinner from '../components/Spinner'

const StyledReturnContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2.4rem 2.4rem;
`

const StyledForm = styled.form`
  button {
    margin-left: 2.4rem;
  }
  input {
    width: 60%;
  }
  .status--ok {
    color: green;
  }
  .status--error {
    color: ${props => props.theme.red};
  }
`

const StyledReturnSection = styled.div`
  background-color: ${props => props.theme.white};
  width: 100%;
  h2 {
    margin: 3.6rem 0;
  }
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    padding: 4.8rem;
  }
`

const StyledSpan = styled.span`
  padding-left: 20px;
`

const ReturnSection = props => (
  <StyledReturnSection>
    <h2>{props.title}</h2>
    {props.children}
  </StyledReturnSection>
)

const Return = () => {
  const [books, setBooks] = useState([])
  const [status, setStatus] = useState({})
  const [returnStatus, setReturnStatus] = useState({})
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingReturn, setIsLoadingReturn] = useState(false)
  const [checkedBooks, setCheckedBooks] = useState([])
  const [checkedBookIds, setCheckedBookIds] = useState([])

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

  const getCheckedOutBooks = async e => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      email
    }
    try {
      const response = await fetch('/api/books/get-return-books', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      setStatus(res)
      setBooks(res.checkedOutBooks)
      setIsLoading(false)
      currentEmail = email
      setEmail('')
    } catch (error) {
      console.log(error)
    }
  }

  const returnBooks = async e => {
    e.preventDefault()
    setIsLoadingReturn(true)

    const data = {
      email,
      checkedBookIds
    }

    try {
      const response = await fetch('/api/books/update-return-book', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      setStatus(res)
      setReturnStatus(res)
      setBooks(res.checkedOutBooks)
      setIsLoadingReturn(false)
      currentEmail = email
      console.log('success')
      setEmail('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Page>
      <PageBanner bannerUrl="/banners/return-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Return Books">
          <StyledForm onSubmit={getCheckedOutBooks}>
            <p>
              Enter your email to see which books are currently checked out under your account. Once
              the status message appears, scroll down to view results. Click on each book you want
              to return, then click 'Return Selected Books'
            </p>
            {isLoading ? (
              <Spinner />
            ) : (
              status && (
                <span
                  className={
                    status.statusNo && status.numberOfBooks === 0 ? 'status--error' : 'status--ok'
                  }
                >
                  {status.message}
                </span>
              )
            )}
            <Divider />
            <Input
              type="email"
              placeholder="User Email *"
              value={email}
              name="email"
              id="email"
              onChange={e => {
                setEmail(e.target.value)
              }}
              required
            />
            <Button>
              Submit <i className="material-icons">arrow_forward_ios</i>
            </Button>
          </StyledForm>

          {status.statusNo === 0 && status.numberOfBooks ? (
            <ReturnSection title={`Books Checked Out By ${status.userEmail}`}>
              <StyledReturnContent>
                <BookContext.Provider
                  value={{
                    checkedBooks,
                    addCheckedBook,
                    removeCheckedBook,
                    addCheckedId,
                    removeCheckedId
                  }}
                >
                  {books.map(book => (
                    <Book
                      key={book.bookId}
                      bookTitle={book.title}
                      bookImgUrl={book.imgUrl}
                      bookAuthor={book.author}
                      id={book.bookId}
                      action="keyboard_return"
                    />
                  ))}
                </BookContext.Provider>
              </StyledReturnContent>
              <form onSubmit={returnBooks}>
                <LargeButton>
                  Return Selected Books <i className="material-icons">arrow_forward_ios</i>
                </LargeButton>
                <StyledSpan>
                  {isLoadingReturn ? (
                    <Spinner />
                  ) : (
                    returnStatus && (
                      <span
                        className={
                          returnStatus.statusNo && returnStatus.numberOfBooks === 0
                            ? 'status--error'
                            : 'status--ok'
                        }
                      >
                        {returnStatus.returnMessage}
                      </span>
                    )
                  )}
                </StyledSpan>
              </form>
            </ReturnSection>
          ) : null}
        </PageContent>
      </Layout>
    </Page>
  )
}

// Return.getInitialProps = async () => {
//   const url =
//     process.env.NODE_ENV !== 'production' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT
//   const response = await fetch(`${url}/api/books/get-library-books`)
//   const data = await response.json()

//   return {
//     bookData: data.map(entry => entry)
//   }
// }

export default Return
