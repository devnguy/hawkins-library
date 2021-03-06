/**
 * Modal used in pages/library. Allows user to enter their email to
 * checkout books. Implements CREATE functionality on 'checkoutOrders'
 * table, and UPDATE functionality on 'books' table.
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

const StyledCheckoutModalContainer = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    flex-direction: column-reverse;
  }
`

const StyledCheckoutForm = styled.div`
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

const StyledCheckoutModalImage = styled.div`
  flex: 1;
  background-color: ${props => props.theme.red};
  overflow: hidden;
  padding-left: 1.6rem;
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

const LibraryModal = props => {
  const {
    isOpen,
    closeModal,
    setSearchResults,
    setCheckedBooks,
    setCheckedBookIds,
    checkoutMade,
    setCheckoutMade
  } = useContext(ModalContext)

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const numBooks = props.checkedBooks.length

  // Resets state on modal close
  useEffect(() => {
    return () => {
      setStatus({})
    }
  }, [isOpen])

  /**
   * Implements CREATE functionality on 'checkoutOrders' table. Makes
   * request to server to execute database operation. Sets the
   * component state to the updated data.
   */
  const addOrder = async e => {
    e.preventDefault()
    setIsLoading(true)

    const bookIds = props.checkedBookIds
    const data = {
      email,
      bookIds
    }
    try {
      const response = await fetch('/api/checkouts/add-checkout', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      // Converting promise to json and setting state
      const res = await response.json()
      setStatus(res)
      setIsLoading(false)

      console.log(res.bookData)

      setSearchResults(res.bookData)

      // Resetting email state and fields, closing modal
      setEmail('')
      setCheckedBooks([])
      setCheckedBookIds([])
      // setBookIds([])
      setCheckoutMade(true)
    } catch (error) {
      console.log(error)
    }
  }

  const validOrder = () => {
    if (numBooks === 0 && checkoutMade === false) {
      return (
        <StyledCheckoutForm>
          <h2>Selected Books:</h2>
          <Divider />
          <p>No books were selected. Please select at least one book.</p>
          <Button onClick={closeModal}>Return</Button>
        </StyledCheckoutForm>
      )
    } else {
      return (
        <StyledCheckoutForm>
          <h2>Selected Books:</h2>
          {props.checkedBooks.map((title, index) =>
            numBooks - 1 === index ? <span>{title}</span> : <span>{title}, </span>
          )}{' '}
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
          <form onSubmit={addOrder}>
            <Input
              type="email"
              placeholder="User Email *"
              value={email}
              name="email"
              id="email"
              onChange={e => {
                setEmail(e.target.value)
                // setBookIds(props.checkedBookIds)
              }}
              required
            />
            <Button onClick={setCheckoutMade(true)}>Checkout</Button>
            <a onClick={closeModal}>CANCEL</a>
          </form>
        </StyledCheckoutForm>
      )
    }
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
        <StyledCheckoutModalContainer>
          {validOrder()}
          <StyledCheckoutModalImage>
            <img src="/checkout.jpeg" />
          </StyledCheckoutModalImage>
        </StyledCheckoutModalContainer>
      </StyledModalContent>
    </Modal>
  )
}

export default LibraryModal
