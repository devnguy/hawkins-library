import { withRouter } from 'next/router'
import Page from '../components/Page'
import PageBanner from '../components/PageBanner'
import Layout from '../components/Layout'
import PageContent from '../components/styles/PageContent'
import SearchResultBook from '../components/SearchResultBook'
import SearchResultEvent from '../components/SearchResultEvent'
import SearchBar from '../components/SearchBar'
import StyledSearchResult from '../components/styles/StyledSearchResult'

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
