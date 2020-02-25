import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import { LargeButton } from '../components/styles/Button'
import Book from '../components/Book'


const StyledReturnContent = styled.div`
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

const Return = (props) => {
  const [books, setBooks] = useState(props.bookData)
  return (
    <Page>
      <PageBanner bannerUrl="/banners/return-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Return Books">
          <StyledReturnContent>

            {books.map(book => (
              <Book key={book.bookId} bookTitle={book.title} bookImgUrl={book.imgUrl} bookAuthor={book.author} action="keyboard_return"/>
            ))}

          </StyledReturnContent>
          <LargeButton>Return Selected Books <i className="material-icons">arrow_forward_ios</i></LargeButton>
        </PageContent>
      </Layout>
    </Page>
  )
}

Return.getInitialProps = async () => {
  const url = process.env.NODE_ENV !== 'production' ? 
    process.env.DEV_ENDPOINT : 
    process.env.PROD_ENDPOINT
  const response = await fetch(`${url}/api/books/get-library-books`)
  const data = await response.json()

  return {
    bookData: data.map(entry => entry)
  }
}

export default Return