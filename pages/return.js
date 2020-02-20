import styled from 'styled-components'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import PageContent from '../components/styles/PageContent'
import { LargeButton } from '../components/styles/Button'


import Book from '../components/Book'

// Using flex. Change to grid?
const StyledReturnContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Return = () => (
  <Page>
    <PageBanner bannerUrl="/banners/return-banner.jpeg" />
    <Layout>
      <PageContent pageTitle="Return Books">
        <StyledReturnContent>
          {/* Content will be replaced with database content */}

          <Book bookTitle="To Kill A Mockingbird" bookImgUrl="/books/to-kill-a-mockingbird.jpg" bookAuthor="Harper Lee" action="keyboard_return" />
          <Book bookTitle="Pride and Prejudice" bookImgUrl="/books/pride-and-prejudice.jpg" bookAuthor="Jane Austen" action="keyboard_return" />
          <Book bookTitle="The Hunger Games" bookImgUrl="/books/hunger-games.jpg" bookAuthor="Suzanne Collins" action="keyboard_return" />
          <Book bookTitle="Harry Potter and The Sorcerer's Stone" bookImgUrl="/books/harry-potter-sorcerers-stone.jpg" bookAuthor="JK Rowling" action="keyboard_return" />
          <Book bookTitle="The Fault In Our Stars" bookImgUrl="/books/fault-in-our-stars.jpg" bookAuthor="John Green" action="keyboard_return" />
          <Book bookTitle="The Elephant Tree" bookImgUrl="/books/elephant-tree.jpg" bookAuthor="John Green" action="keyboard_return" />
          <Book bookTitle="The Book Thief" bookImgUrl="/books/book-thief.jpg" bookAuthor="RD Ronald" action="keyboard_return" />
          <Book bookTitle="1984" bookImgUrl="/books/1984.jpg" bookAuthor="George Orwell" action="keyboard_return" />
          <Book bookTitle="The Giving Tree" bookImgUrl="/books/giving-tree.jpg" bookAuthor="Shel Silverstein" action="keyboard_return" />
          <Book bookTitle="The Alchemist" bookImgUrl="/books/alchemist.jpg" bookAuthor="Paulo Coelho" action="keyboard_return" />

        </StyledReturnContent>
        <LargeButton>Return Selected Books ></LargeButton>
      </PageContent>
    </Layout>
  </Page>
)

export default Return