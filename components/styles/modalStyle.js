import styled from 'styled-components'

export const modalStyle = {
  modal: {
  },
  content: {
    padding: '3.6rem',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: '1s',
    borderRadius: '0',
    border: 'none',
    boxShadow: '0px 20px 20px -20px rgba(0,0,0,1)',
    width: '70vw',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: '2'
  } 
}

export const StyledModalContent = styled.div`
  h2 {
    margin-top: 0;
  }
  button {
    margin-top: 2.4rem;
    margin-right: 2.4rem;
  }
  a {
    cursor: pointer;
    font-size: 1.3rem;
  }
`