import { useState } from 'react'
import StyledSearchResult from './styles/StyledSearchResult'
import EventModal from '../components/modals/EventModal'
import ModalContext from '../context/modal-context'

const SearchResultEvent = ({ data }) => {
  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <StyledSearchResult>
      <h4>
        <a onClick={openModal}>{data.name}</a>
      </h4>
      <ul>
        <li>
          <i className="material-icons-sharp">event</i>
          {data.date}
        </li>
        <li>
          <i className="material-icons-sharp">person</i>
          {data.guest}
        </li>
      </ul>
      <ModalContext.Provider value={{ isOpen, closeModal }}>
        <EventModal
          title={data.name}
          imgUrl={data.imgUrl}
          eventId={data.id}
          date={data.date}
          guest={data.guest}
        />
      </ModalContext.Provider>
    </StyledSearchResult>
  )
}

export default SearchResultEvent
