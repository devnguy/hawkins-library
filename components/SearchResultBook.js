import { useState } from 'react'
import StyledSearchResult from './styles/StyledSearchResult'
import BookModal, { BookUnavailableModal } from '../components/modals/BookModal'
import ModalContext from '../context/modal-context'

const SearchResultBook = ({ data }) => {
  // Modal state and functions
  const [isCheckedOut, setIsCheckedOut] = useState(data.oid ? true : false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUnavailable, setIsOpenUnavailable] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const openUnavailable = () => {
    setIsOpenUnavailable(true)
  }
  const closeUnavailable = () => {
    setIsOpenUnavailable(false)
  }

  return (
    <StyledSearchResult>
      <h4>
        <a onClick={isCheckedOut ? openUnavailable : openModal}>
          {data.title}, {data.author}
        </a>
      </h4>
      <ul>
        <li>
          <i className="material-icons-sharp">book</i>
          {data.genre}
        </li>
        {isCheckedOut ? (
          <li>
            <i className="material-icons">close</i>Checked out
          </li>
        ) : (
          <li>
            <i className="material-icons">check</i>Available
          </li>
        )}
      </ul>
      <ModalContext.Provider
        value={{ isOpen, isOpenUnavailable, closeUnavailable, closeModal, setIsCheckedOut }}
      >
        <BookModal title={data.title} imgUrl={data.imgUrl} author={data.author} bookId={data.id} />
        <BookUnavailableModal title={data.title} />
      </ModalContext.Provider>
    </StyledSearchResult>
  )
}

export default SearchResultBook
