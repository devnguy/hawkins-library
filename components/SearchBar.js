/**
 * Implementation and styling of a search bar. Maintains state of its
 * value. On submit, reroutes the user to pages/search with their
 * query.
 *
 * Takes a bool as a prop to indicate whether the search bar should
 * expand when focused.
 */

import styled from 'styled-components'
import Router from 'next/router'
import { useState } from 'react'

const Styles = styled.div`
  form {
    display: flex;
    max-width: ${props => props.theme.maxWidth};
    height: 6.6rem;
  }
  input,
  button {
    border: ${props => (props.isExpandable ? 'none' : `solid 1px ${props.theme.lightgray}`)};
    padding: 1.9rem 1.6rem;
    background: rgba(255, 255, 255, 0.95);
    /* border: none; */
  }
  input {
    font-size: 2.4rem;
    width: ${props => (props.isExpandable ? '60%' : '100%')};
    color: ${props => props.theme.black};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0, 0.3);
    outline: none;
    transition: all 700ms cubic-bezier(0.23, 1, 0.32, 1);
    border-right: none;
    :focus {
      width: 100%;
    }
  }
  button {
    height: 100%;
    border-left: none;
    :hover {
      cursor: pointer;
    }
    i {
      font-size: 2.4rem;
    }
  }
`

const SearchBar = ({ isExpandable }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    Router.push({ pathname: '/search', query: { q: searchTerm } })
  }

  return (
    <Styles isExpandable={isExpandable}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Find a book or event"
          required
        ></input>
        <button>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </Styles>
  )
}

export default SearchBar
