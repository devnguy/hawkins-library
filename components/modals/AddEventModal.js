/**
 * Modal used in pages/admin/manage-events. Allows admin to add events.
 * Implements CREATE functionality on 'events' table.
 *
 * See pages/api/library-events/add-event for query.
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
  const { isOpen, closeModal, setTableData } = useContext(ModalContext)
  const [status, setStatus] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  // Form state
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [guest, setGuest] = useState('')
  const [description, setDescription] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  // Reset state on modal close.
  useEffect(() => {
    return () => {
      setStatus({})
      setIsLoading(false)
    }
  }, [isOpen])

  /**
   * Implements CREATE functionality on 'events' table. Makes request
   * to server to execute database operation. Updates the state with
   * updated data.
   */
  const handleAddEvent = async e => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      name,
      date,
      guest,
      description,
      imgUrl
    }
    try {
      const response = await fetch('/api/library-events/add-event', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const eventData = await response.json()
      setTableData(
        eventData.map(event => ({
          id: event.eventId,
          name: event.name,
          date: event.date,
          guest: event.guest,
          description: event.description
        }))
      )
      setName('')
      setDate('')
      setGuest('')
      setDescription('')
      setImgUrl('')
      closeModal()
    } catch (error) {
      console.log(error)
    }
    setIsLoading(true)
  }

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
          <h2>Adding Event {isLoading ? <Spinner /> : null}</h2>
          <i className="material-icons" onClick={closeModal}>
            close
          </i>
        </StyledModalHeader>
        <Divider />

        <form onSubmit={handleAddEvent}>
          <FormFields>
            <Input
              type="text"
              placeholder="Name *"
              value={name}
              name="name"
              id="name"
              onChange={e => {
                setName(e.target.value)
              }}
              required
            />
            <Input
              type="date"
              value={date}
              name="date"
              id="date"
              onChange={e => {
                setDate(e.target.value)
              }}
              required
            />
            <Input
              type="text"
              placeholder="Guest"
              value={guest}
              name="guest"
              id="guest"
              onChange={e => {
                setGuest(e.target.value)
              }}
            />
            <Input
              type="text"
              placeholder="Event Description"
              value={description}
              name="description"
              id="description"
              onChange={e => {
                setDescription(e.target.value)
              }}
            />
            <Input
              type="text"
              placeholder="Event Image URL"
              value={imgUrl}
              name="imgUrl"
              id="imgUrl"
              onChange={e => {
                setImgUrl(e.target.value)
              }}
            />
          </FormFields>
          <Button>Add Event</Button>
          <a onClick={closeModal}>CANCEL</a>
        </form>
      </StyledModalContent>
    </Modal>
  )
}

export default AddBookModal
