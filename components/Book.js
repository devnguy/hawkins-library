import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import BookContext from '../context/book-context'
// import LibraryBookModal from '../components/modals/LibraryBookModal'
// import ModalContext from '../context/modal-context'

const HoverStyles = styled.div`
  .hvr-underline-reveal {
    /* display: inline-block; */
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    /* box-shadow: 0 0 1px rgba(0, 0, 0, 0); */
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-reveal:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.red};
    height: 0.8rem;
    -webkit-transform: translateY(0.8rem);
    transform: translateY(0.8rem);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-underline-reveal:hover:before,
  .hvr-underline-reveal:focus:before,
  .hvr-underline-reveal:active:before {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .hvr-underline-clicked {
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-clicked:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.red};
    height: 0.8rem;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
  }
  .hvr-underline-clicked:after {
    -webkit-transform: translateY(0.8rem);
    transform: translateY(0.8rem);
  }
`

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

  // Changes the book's icon to checked/unchecked depending on if in order
  const clickBook = () => {
    // if (bookIcon() === props.action && checkedBooks > 5) {
    // }
    // Book is being added to order
    if (bookIcon() === props.action) {
      setIcon('check')
      addCheckedBook(props.bookTitle)
      addCheckedId(props.id)
    }
    // Book is being removed from order
    else {
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
    setCheckoutMade(false)
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
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
        {/* <ModalContext.Provider
          value={{
            isOpen,
            closeModal
          }}
        >
          <LibraryBookModal checkedBooks={checkedBooks} />
        </ModalContext.Provider> */}
      </StyledBook>
    </HoverStyles>
  )
}

export default Book
