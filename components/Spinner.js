import styled from 'styled-components'

const StyledSpinner = styled.div`
  .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${props => props.theme.red};
    border-left-color: ${props => props.theme.red};
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }
  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  display: inline-block;
`

const Spinner = () => (
  <StyledSpinner>
    <div className='spinner-icon'></div>
  </StyledSpinner>
)

export default Spinner