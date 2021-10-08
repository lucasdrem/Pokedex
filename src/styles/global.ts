import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;

  }

  body {
    -webkit-font-smoothing: antialiased;

    background: #F6F8FC;
    color: #0E2030;

    padding: 32px;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }


`

export default GlobalStyles
