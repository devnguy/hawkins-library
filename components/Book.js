import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import BookContext from '../context/book-context'

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
`

const StyledBook = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 12px -10px rgba(0, 0, 0, 0.5); /*lg shadow*/
  width: 320px;
  margin-bottom: 3.6rem;
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
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 400;
  }
`

const StyledAddIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Book = props => {
  const { checkedBooks, addCheckedBook, removeCheckedBook } = useContext(
    BookContext
  )
  const [icon, setIcon] = useState(props.action)

  const clickBook = () => {
    if (icon == props.action) {
      setIcon('check')
      addCheckedBook(props.bookTitle)
      console.log(checkedBooks)
      // checkedBook = props.bookTitle
      // alert(checkedBook)
      // props.checkedBooks = [...props.checkedBooks, props.bookTitle]
      // alert(props.checkedBooks)
    } else {
      setIcon(props.action)
      removeCheckedBook(props.bookTitle)
      // checkedBook = ''
      // alert(checkedBook)
    }
  }

  return (
    <HoverStyles>
      <StyledBook className="hvr-underline-reveal" onClick={clickBook}>
        <StyledBookImage>
          <img src={props.bookImgUrl}></img>
        </StyledBookImage>
        <StyledBookInfo>
          <div>
            <h3>{props.bookTitle}</h3>
            <p>{props.bookAuthor}</p>
          </div>
          <StyledAddIcon>
            <Link href="/">
              <a>
                <i className="material-icons">{icon}</i>
              </a>
            </Link>
          </StyledAddIcon>
        </StyledBookInfo>
      </StyledBook>
    </HoverStyles>
  )
}

export default Book
