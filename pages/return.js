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
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
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

const StyledForm = styled.form`
  button {
    margin-left: 2.4rem;
  }
  input {
    width: 60%;
  }
`

const StyledReturnSection = styled.div`
  background-color: ${props => props.theme.white};
  padding: 6.4rem;
  width: 100%;
  margin: 5.4rem 0;
  z-index: 2;
  h2 {
    margin-top: 0;
  }
  box-shadow: 0px 20px 20px -20px rgba(0, 0, 0, 0.4); /*xl shadow*/
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    padding: 4.8rem;
  }
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
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [checkedBooks, setCheckedBooks] = useState([])
  let currentEmail = ''

  const addCheckedBook = newBook => {
    setCheckedBooks([...checkedBooks, newBook])
  }

  const removeCheckedBook = book => {
    setCheckedBooks(checkedBooks.filter(checkedBook => checkedBook !== book))
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

  return (
    <Page>
      <PageBanner bannerUrl="/banners/return-banner.jpeg" />
      <Layout>
        <Section>
          <ReturnSection title="Return Books">
            <StyledForm onSubmit={getCheckedOutBooks}>
              <p>
                Enter your email to see which books are currently checked out under your account.
                Once the status message appears, scroll down to view results. Click on each book you
                want to return, then click 'Return Selected Books'
              </p>
              {isLoading ? (
                <Spinner />
              ) : (
                status && (
                  <span className={status.statusNo ? 'status--error' : 'status--ok'}>
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
          </ReturnSection>
        </Section>

        {status.statusNo === 0 && status.numberOfBooks ? (
          <Section>
            <ReturnSection title={`Books Checked Out By ${status.userEmail}`}>
              <StyledReturnContent>
                <BookContext.Provider value={{ checkedBooks, addCheckedBook, removeCheckedBook }}>
                  {books.map(book => (
                    <Book
                      key={book.bookId}
                      bookTitle={book.title}
                      bookImgUrl={book.imgUrl}
                      bookAuthor={book.author}
                      action="keyboard_return"
                    />
                  ))}
                </BookContext.Provider>
              </StyledReturnContent>
              <LargeButton>
                Return Selected Books <i className="material-icons">arrow_forward_ios</i>
              </LargeButton>
            </ReturnSection>
          </Section>
        ) : null}
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
