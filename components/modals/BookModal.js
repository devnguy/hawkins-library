/**
 * Modal used in pages/search. Modal rendered depends on whether or not
 * the book is available (not checked out).
 * If the book is available, allows the user to checkout the book,
 * making a request to the server to CREATE a checkout.
 *
 * See pages/api/checkouts/add-checkout for query.
 */

import styled from 'styled-components'
import Modal from 'react-modal'
import { useState, useEffect, useContext } from 'react'

import Input from '../Input'
import Button from '../styles/Button'
import Divider from '../styles/Divider'
import ModalContext from '../../context/modal-context'
import { modalStyleEvent, StyledModalContent } from '../styles/modalStyle'
import Spinner from '../Spinner'

const StyledBookModalContainer = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    flex-direction: column-reverse;
  }
`

const StyledBookForm = styled.div`
  flex: 2;
  padding: 3.6rem;
  h2 {
    margin-bottom: 1.2rem;
  }
  h4 {
    margin: 0;
  }
  p {
    margin-top: 0;
    span {
      font-weight: 700;
    }
  }
  @media (max-width: ${props => props.theme.screenSizeMed}) {
  }
`

const StyledBookModalImage = styled.div`
  flex: 1;
  background-color: ${props => props.theme.red};
  overflow: hidden;
  padding-left: 1.6rem;
  max-height: 360px;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    max-height: 100px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    box-shadow: -3px 10px 15px -3px rgba(0, 0, 0, 0.5);
  }
`

const BookModal = props => {
  const { isOpen, closeModal, setIsCheckedOut } = useContext(ModalContext)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // Reset state on modal close.
  useEffect(() => {
    return () => {
      setStatus({})
    }
  }, [isOpen])

  /**
   * Implements CREATE functionality on 'checkoutOrder' table, UPDATE
   * functionality on 'books' table. Makes request to server to execute
   * database operation. Updates the state with updated data.
   */
  const addRegistration = async e => {
    e.preventDefault()
    setIsLoading(true)
    const body = {
      email,
      bookIds: [props.bookId]
    }
    try {
      const response = await fetch('/api/checkouts/add-checkout', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setStatus(data)
      if (data.statusNo === 0) {
        setIsCheckedOut(true)
        setEmail('')
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyleEvent}
      ariaHideApp={false}
      closeTimeoutMS={100}
    >
      <StyledModalContent>
        <StyledBookModalContainer>
          <StyledBookForm>
            <h2>Checking out:</h2>
            <h4>{props.title}</h4>
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
            <form onSubmit={addRegistration}>
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
              <Button>Checkout</Button>
              <a onClick={closeModal}>CANCEL</a>
            </form>
          </StyledBookForm>
          <StyledBookModalImage>
            <img src={props.imgUrl} />
          </StyledBookModalImage>
        </StyledBookModalContainer>
      </StyledModalContent>
    </Modal>
  )
}

/**
 * Modal to inform user that the book is unavailable.
 */
export const BookUnavailableModal = props => {
  const { isOpenUnavailable, closeUnavailable } = useContext(ModalContext)
  return (
    <Modal
      isOpen={isOpenUnavailable}
      onRequestClose={closeUnavailable}
      style={modalStyleEvent}
      ariaHideApp={false}
      closeTimeoutMS={100}
    >
      <StyledModalContent>
        <StyledBookModalContainer>
          <StyledBookForm>
            <h2>Book Unavailable</h2>
            <Divider />
            <p>Sorry, {props.title} is currently unavailable. Please check back later.</p>
          </StyledBookForm>
        </StyledBookModalContainer>
      </StyledModalContent>
    </Modal>
  )
}

export default BookModal
