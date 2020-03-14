/* The search page reads information from the books table and the
 * events table. It displays what events are taking place as well
 * as what books are available for checkout and what books have
 * already been checked out. The customer will then be able to
 * either register for an event or check out any available books.
 * Therefore, a checkout can be added and a one-to-many relationship
 * can be made between books and checkoutOrders. It is also possible
 * to create a many-to-many relationship between customers and events. */

import { withRouter } from 'next/router'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import Layout from '../components/Layout'
import PageContent from '../components/styles/PageContent'
import SearchResultBook from '../components/SearchResultBook'
import SearchResultEvent from '../components/SearchResultEvent'
import SearchBar from '../components/SearchBar'
import StyledSearchResult from '../components/styles/StyledSearchResult'

// Displaying all books/events that match the input in the search bar
const Search = ({ searchTerm, searchResults }) => {
  return (
    <Page>
      <PageBanner bannerUrl="/banners/search-banner.jpg" />
      <Layout>
        <PageContent pageTitle="Search Results">
          <SearchBar isExpandable={false} />
          <StyledSearchResult>
            <b>{searchResults.books.length + searchResults.events.length} </b>
            items matching your search for
            <b> {`"${searchTerm}"`}</b>
          </StyledSearchResult>

          {searchResults.books.map(book => (
            <SearchResultBook key={book.id} data={book} />
          ))}
          {searchResults.events.map(event => (
            <SearchResultEvent key={event.id} data={event} />
          ))}
        </PageContent>
      </Layout>
    </Page>
  )
}

// Reading the data from the books and events tables
Search.getInitialProps = async ({ query }) => {
  const url =
    process.env.NODE_ENV !== 'production' ? process.env.DEV_ENDPOINT : process.env.PROD_ENDPOINT
  const body = { searchTerm: query.q }
  const response = await fetch(`${url}/api/search/get-search-results`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return {
    searchTerm: query.q,
    searchResults: {
      books: data.books.map(book => ({
        id: book.bookId,
        oid: book.oid,
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        genre: book.genre,
        imgUrl: book.imgUrl
      })),
      events: data.events.map(event => ({
        id: event.eventId,
        name: event.name,
        date: event.date,
        guest: event.guest,
        description: event.description,
        imgUrl: event.imgUrl
      }))
    }
  }
}

export default withRouter(Search)
