import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import Button from '../components/styles/Button'
import Input from '../components/Input'


import Book from '../components/Book'

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
const Library = () => {
  // Books state
  const [books, setBooks] = useState([])

  // Get initial state from db.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/books/get-library-books')
        const bookData = await response.json()
        setBooks(bookData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])


  return (
    <Page>
      <PageBanner bannerUrl="/banners/library-banner.jpeg" />
      <Layout>
        <PageContent pageTitle="Library">
          
          <StyledLibraryContent>

            {books.map(book => (
              <Book key={book.bookId} bookTitle={book.title} bookImgUrl="https://res.cloudinary.com/zlibrary/image/upload/v1567801421/hawkins/efazzzqzpzdotkvzpcvy.jpg" bookAuthor={book.author} action="add"/>
            ))}

          </StyledLibraryContent>

          <StyledCheckoutInput>
            <Input placeholder="User ID" />
            <Button>Check Out</Button>
          </StyledCheckoutInput>
        </PageContent>
      </Layout>
    </Page>
  )
}

export default Library


/* 
<Book bookTitle="To Kill A Mockingbird" bookImgUrl="/books/to-kill-a-mockingbird.jpg" bookAuthor="Harper Lee" action="add" />
<Book bookTitle="Pride and Prejudice" bookImgUrl="/books/pride-and-prejudice.jpg" bookAuthor="Jane Austen" action="add" />
<Book bookTitle="The Hunger Games" bookImgUrl="/books/hunger-games.jpg" bookAuthor="Suzanne Collins" action="add" />
<Book bookTitle="Harry Potter and The Sorcerer's Stone" bookImgUrl="/books/harry-potter-sorcerers-stone.jpg" bookAuthor="JK Rowling" action="add" />
<Book bookTitle="The Fault In Our Stars" bookImgUrl="/books/fault-in-our-stars.jpg" bookAuthor="John Green" action="add" />
<Book bookTitle="The Elephant Tree" bookImgUrl="/books/elephant-tree.jpg" bookAuthor="John Green" action="add" />
<Book bookTitle="The Book Thief" bookImgUrl="/books/book-thief.jpg" bookAuthor="RD Ronald" action="add" />
<Book bookTitle="1984" bookImgUrl="/books/1984.jpg" bookAuthor="George Orwell" action="add" />
<Book bookTitle="The Giving Tree" bookImgUrl="/books/giving-tree.jpg" bookAuthor="Shel Silverstein" action="add" />
<Book bookTitle="The Alchemist" bookImgUrl="/books/alchemist.jpg" bookAuthor="Paulo Coelho" action="add" /> 
*/