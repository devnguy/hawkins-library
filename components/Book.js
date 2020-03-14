/**
 * Book component resembles a card, with an image on top and book
 * information below. This component maintains the state of whether
 * or not its been selected (clicked). If the maximum number of
 * Books have been selected, the component will render a modal
 * informing the user.
 */

import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import BookContext from '../context/book-context'
import LibraryBookModal from '../components/modals/LibraryBookModal'
import ModalContext from '../context/modal-context'
import HoverStyles from '../components/styles/HoverStyles'

const StyledBook = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 12px -10px rgba(0, 0, 0, 0.5); /*lg shadow*/
  width: 250px;
  margin-bottom: 3.6rem;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${props => props.theme.screenSizeSm}) {
    width: 100%;
  }
`

const StyledBookImage = styled.div`
  height: 150px;
  overflow: hidden;
  img {
    /* object-fit: cover; */
    width: 100%;
  }
`

const StyledBookInfo = styled.div`
  padding: 2rem 1rem 2rem 2rem;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-size: 2rem;
    line-height: 3.2rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.screenSizeSm}) {
    height: 150px;
  }
`

const StyledAddIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Book = props => {
  // Checked books are those in the user's checkout order
  const {
    checkedBooks,
    addCheckedBook,
    removeCheckedBook,
    addCheckedId,
    removeCheckedId
  } = useContext(BookContext)

  // Icon changes depending on if book is in order or not
  const [icon, setIcon] = useState()
  // const [checkoutLength, setCheckoutLength] = useState(checkedBooks.length)
  const [isMaxOrder, setIsMaxOrder] = useState(false)

  // Changes the book's icon to checked/unchecked depending on if in order
  const clickBook = () => {
    // setCheckoutLength(checkedBooks.length)
    if (checkedBooks.length === 5 && bookIcon() === props.action && isMaxOrder === false) {
      setIsMaxOrder(true)
      openModal()
      console.log('Too many!!')
    } else if (bookIcon() === props.action && isMaxOrder === false) {
      setIcon('check')
      addCheckedBook(props.bookTitle)
      addCheckedId(props.id)
    }
    // Book is being removed from order
    else if (bookIcon() === 'check' && isMaxOrder === false) {
      setIcon(props.action)
      removeCheckedBook(props.bookTitle)
      removeCheckedId(props.id)
    }
  }

  // Determines whether book should be checked or not.
  const bookIcon = () => {
    if (checkedBooks.includes(props.bookTitle)) {
      return 'check'
    } else {
      return props.action
    }
  }

  const iconColor = () => {
    if (checkedBooks.includes(props.bookTitle)) {
      return { color: '#e50812' }
    } else {
      return { color: 'black' }
    }
  }

  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
    setIsMaxOrder(false)
  }

  // Returning book display on library page
  return (
    <HoverStyles>
      <StyledBook
        className={bookIcon() == props.action ? 'hvr-underline-reveal' : 'hvr-underline-clicked'}
        onClick={clickBook}
      >
        <StyledBookImage>
          <img src={props.bookImgUrl}></img>
        </StyledBookImage>
        <StyledBookInfo>
          <div>
            <h3>{props.bookTitle}</h3>
            <p>{props.bookAuthor}</p>
          </div>
          <StyledAddIcon>
            <a>
              <i className="material-icons" style={iconColor()}>
                {bookIcon()}
              </i>
            </a>
          </StyledAddIcon>
        </StyledBookInfo>
        <ModalContext.Provider
          value={{
            isOpen,
            closeModal,
            isMaxOrder,
            setIsMaxOrder
          }}
        >
          <LibraryBookModal />
        </ModalContext.Provider>
      </StyledBook>
    </HoverStyles>
  )
}

export default Book
