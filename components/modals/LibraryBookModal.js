/**
 * Modal to inform user of the maximum number of books per
 * checkoutOrder.
 */

import styled from 'styled-components'
import Modal from 'react-modal'
import { useContext } from 'react'

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

const LibraryBookModal = props => {
  const { isOpen, closeModal, isMaxOrder, setIsMaxOrder } = useContext(ModalContext)

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
            <h2>Maximum Number of Books Checked Out</h2>
            <Divider />
            <p>Please select at most five books.</p>
            <Button onClick={closeModal}>Return</Button>
          </StyledCheckoutForm>
          <StyledCheckoutModalImage>
            <img src="/checkout.jpeg" />
          </StyledCheckoutModalImage>
        </StyledCheckoutModalContainer>
      </StyledModalContent>
    </Modal>
  )
}

export default LibraryBookModal
