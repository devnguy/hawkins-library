import styled from 'styled-components'
import Modal from 'react-modal'
import { useState, useEffect, useContext } from 'react'

import Input from '../components/Input'
import Button from '../components/styles/Button'
import Divider from '../components/styles/Divider'
import ModalContext from '../context/modal-context'
import { modalStyleEvent, StyledModalContent } from '../components/styles/modalStyle'
import Spinner from '../components/Spinner'

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
  .status--ok {
    color: green;
  }
  .status--error {
    color: ${props => props.theme.red};
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
    /* position: center; */
    box-shadow: -3px 10px 15px -3px rgba(0, 0, 0, 0.5); /*tailwindcss large shadow*/
  }
`

const LibraryModal = props => {
  const {
    isOpen,
    closeModal,
    setSearchResults,
    setCheckedBooks,
    checkoutMade,
    setCheckoutMade
  } = useContext(ModalContext)

  const [email, setEmail] = useState('')
  const [bookIds, setBookIds] = useState(props.checkedBookIds)
  const [status, setStatus] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const numBooks = props.checkedBooks.length

  // Resets state on modal close
  useEffect(() => {
    return () => {
      setStatus({})
    }
  }, [isOpen])

  // Adds order to database
  const addOrder = async e => {
    e.preventDefault()
    setIsLoading(true)
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
      setCheckoutMade(true)
    } catch (error) {
      console.log(error)
    }
  }

  const validOrder = () => {
    if (numBooks === 0 && checkoutMade === false) {
      return (
        <div>
          <Divider />
          <p>No books selected. Please select at least one book.</p>
          <Button onClick={closeModal}>Return</Button>
        </div>
      )
    } else {
      return (
        <div>
          {props.checkedBooks.map((title, index) =>
            numBooks - 1 === index ? <span>{title}</span> : <span>{title}, </span>
          )}
          <p>
            {' '}
            {isLoading ? (
              <Spinner />
            ) : (
              status && (
                <span className={status.statusNo ? 'status--error' : 'status--ok'}>
                  {status.message}
                </span>
              )
            )}
          </p>
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
                setBookIds(props.checkedBookIds)
              }}
              required
            />
            <Button onClick={setCheckoutMade(true)}>Checkout</Button>
            <a onClick={closeModal}>CANCEL</a>
          </form>
        </div>
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
          <StyledCheckoutForm>
            <h2>Selected Books:</h2>
            {validOrder()}
            {/* <p>
              {numBooks === 0 ? (
                <p>No books selected for checkout. Please select at least one book.</p>
              ) : (
                props.checkedBooks.map((title, index) =>
                  numBooks - 1 === index ? <span>{title}</span> : <span>{title}, </span>
                )
              )}
            </p>
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
              {numBooks === 0 ? (
                <p></p>
              ) : (
                <Input
                  type="email"
                  placeholder="User Email *"
                  value={email}
                  name="email"
                  id="email"
                  onChange={e => {
                    setEmail(e.target.value)
                    setBookIds(props.checkedBookIds)
                  }}
                  required
                />
              )}
              {numBooks === 0 ? (
                <a onClick={closeModal}>
                  <i className="material-icons">{'keyboard_return'}</i>
                </a>
              ) : (
                <Button>Checkout</Button>
              )}
              {numBooks === 0 ? <span></span> : <a onClick={closeModal}>CANCEL</a>}
            </form> */}
          </StyledCheckoutForm>
          <StyledCheckoutModalImage>
            <img src="/checkout.jpeg" />
          </StyledCheckoutModalImage>
        </StyledCheckoutModalContainer>
      </StyledModalContent>
    </Modal>
  )
}

export default LibraryModal
