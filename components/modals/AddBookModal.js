/**
 * Modal used in pages/library. Allows user to check out selected
 * books. Implements CREATE and UPDATE functionality on 'books' table.
 *
 * See pages/api/books/add-book.js for query.
 */

import styled from 'styled-components'
import Modal from 'react-modal'
import { useState, useEffect, useContext } from 'react'
import Divider from '../styles/Divider'

import Input from '../Input'
import Button from '../styles/Button'
import ModalContext from '../../context/modal-context'
import { modalStyle, StyledModalContent } from '../styles/modalStyle'
import Spinner from '../Spinner'
import { FormFields } from '../Form'

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
  i:hover {
    cursor: pointer;
  }
`

const AddBookModal = props => {
  const {
    isOpen,
    openModal,
    closeModal,
    setTableData,
    isUniqueTitle,
    setIsUniqueTitle
  } = useContext(ModalContext)

  const [status, setStatus] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  // Form state
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [genre, setGenre] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  // Reset state on modal close.
  useEffect(() => {
    return () => {
      setStatus({})
      setIsLoading(false)
    }
  }, [isOpen])

  /**
   * Implements CREATE functionality on 'books' table, and UPDATE
   * functionality on 'books' table. Makes request to server to execute
   * database operations. Updates the state with updated data.
   */
  const handleAddBook = async e => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      title,
      author,
      publisher,
      genre,
      imgUrl
    }
    try {
      const response = await fetch('/api/books/add-book', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // Convert returned promise to json and set state.
      const bookData = await response.json()
      setTableData(
        bookData.books.map(book => ({
          id: book.bookId,
          oid: book.oid,
          title: book.title,
          author: book.author,
          publisher: book.publisher,
          genre: book.genre
        }))
      )

      setTitle('')
      setAuthor('')
      setPublisher('')
      setGenre('')
      setImgUrl('')
      closeModal()

      if (bookData.statusNo === 0) {
        setIsUniqueTitle(true)
      } else {
        setIsUniqueTitle(false)
        openModal()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const modalMessage = () => {
    if (isUniqueTitle === true) {
      return (
        <form onSubmit={handleAddBook}>
          <FormFields>
            <Input
              type="text"
              placeholder="Title *"
              value={title}
              name="title"
              id="title"
              onChange={e => {
                setTitle(e.target.value)
              }}
              required
            />
            <Input
              type="text"
              placeholder="Author *"
              value={author}
              name="author"
              id="author"
              onChange={e => {
                setAuthor(e.target.value)
              }}
              required
            />
            <Input
              type="text"
              placeholder="Publisher *"
              value={publisher}
              name="publisher"
              id="publisher"
              onChange={e => {
                setPublisher(e.target.value)
              }}
              required
            />
            <Input
              type="text"
              placeholder="Genre *"
              value={genre}
              name="genre"
              id="genre"
              onChange={e => {
                setGenre(e.target.value)
              }}
              required
            />
            <Input
              type="text"
              placeholder="Book Image URL"
              value={imgUrl}
              name="imgUrl"
              id="imgUrl"
              onChange={e => {
                setImgUrl(e.target.value)
              }}
            />
          </FormFields>
          <Button>Add Book</Button>
          <a onClick={closeModal}>CANCEL</a>
        </form>
      )
    } else {
      return (
        <div>
          <p>The book title entered is not unique, so it was not added to the library.</p>
          <Button onClick={closeModal}>Return</Button>
        </div>
      )
    }
  }

  // Render the modal.
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      ariaHideApp={false}
      closeTimeoutMS={100}
    >
      <StyledModalContent>
        <StyledModalHeader>
          <h2>Adding Book {isLoading ? <Spinner /> : null}</h2>
          <i className="material-icons" onClick={closeModal}>
            close
          </i>
        </StyledModalHeader>

        <Divider />
        {modalMessage()}
      </StyledModalContent>
    </Modal>
  )
}

export default AddBookModal
