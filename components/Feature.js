/**
 * Generic Feature component mostly used to display events at the
 * library. Contains Left/RightFeature with the direction indicating
 * the position of the text body. If the Feature is rendered to display
 * event data, the button click will render a modal for the user to
 * register for the event.
 */

import styled from 'styled-components'
import Button from '../components/styles/Button'
import { useState } from 'react'
import EventModal from '../components/modals/EventModal'
import ModalContext from '../context/modal-context'
import Link from 'next/link'

const StyledFeature = styled.div`
  display: flex;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); /*tailwindcss large shadow*/
  margin: auto;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    flex-direction: column;
  }
`

const StyledFeatureBody = styled.div`
  background-color: ${props => props.bgColor};
  flex: ${props => props.size};
  color: ${props => props.fontColor};
  padding: 6.4rem;
  width: 100%;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    padding: 3.2rem;
  }
`

const StyledFeatureImage = styled.div`
  background-color: ${props => props.theme.red};
  flex: ${props => props.size};
  overflow: hidden;
  padding-left: ${props => props.paddingLeft};
  /* height: 360px; */
  width: 100%;
  @media (max-width: ${props => props.theme.screenSizeMed}) {
    padding-left: 0;
    max-height: 236px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* position: center; */
    box-shadow: -3px 10px 15px -3px rgba(0, 0, 0, 0.3); /*tailwindcss large shadow*/
  }
`

export const LeftFeature = props => {
  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <StyledFeature>
      <StyledFeatureBody
        size="2"
        bgColor={props => props.theme.white}
        fontColor={props => props.theme.black}
      >
        <h2>{props.content.name}</h2>
        <p>{props.content.description}</p>
        {/* <p>{props.content.date}</p> */}

        {props.eventId ? (
          <Button onClick={openModal}>
            {props.button}
            <i className="material-icons">arrow_forward_ios</i>
          </Button>
        ) : (
          <Link href={props.route}>
            <a>
              <Button>
                {props.button} <i className="material-icons">arrow_forward_ios</i>
              </Button>
            </a>
          </Link>
        )}

        <ModalContext.Provider value={{ isOpen, closeModal }}>
          <EventModal
            title={props.content.name}
            imgUrl={props.content.imgUrl}
            eventId={props.eventId}
            date={props.content.date}
            guest={props.content.guest}
          />
        </ModalContext.Provider>
      </StyledFeatureBody>
      <StyledFeatureImage size="1" paddingLeft="2.4rem" paddingRight="0">
        <img src={props.content.imgUrl}></img>
      </StyledFeatureImage>
    </StyledFeature>
  )
}

export const RightFeature = props => {
  // Modal state and functions
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <StyledFeature>
      <StyledFeatureImage size="1" paddingLeft="0" paddingRight="0">
        <img src={props.content.imgUrl}></img>
      </StyledFeatureImage>
      <StyledFeatureBody
        size="2"
        bgColor={props => props.theme.black}
        fontColor={props => props.theme.white}
      >
        <h2>{props.content.name}</h2>
        <p>{props.content.description}</p>

        {props.eventId ? (
          <Button onClick={openModal}>
            {props.button}
            <i className="material-icons">arrow_forward_ios</i>
          </Button>
        ) : (
          <Link href={props.route}>
            <a>
              <Button>
                {props.button} <i className="material-icons">arrow_forward_ios</i>
              </Button>
            </a>
          </Link>
        )}

        <ModalContext.Provider value={{ isOpen, closeModal }}>
          <EventModal
            title={props.content.name}
            imgUrl={props.content.imgUrl}
            eventId={props.eventId}
            date={props.content.date}
            guest={props.content.guest}
          />
        </ModalContext.Provider>
      </StyledFeatureBody>
    </StyledFeature>
  )
}
