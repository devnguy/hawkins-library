import styled from 'styled-components'

/* Source: https://codepen.io/vkjgr/pen/VYMeXp*/
const Dropdown = styled.div`
  margin-left: 5px;
  width: 40%;
  select {
    /* styling */
    background-color: white;
    border: solid 1px ${props => props.theme.lightgray};
    display: inline-block;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    font-size: 1em;

    /* reset */
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  select.genreSelect {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }
  select.genreSelect:focus {
    outline: 0;
  }
`

export default Dropdown
