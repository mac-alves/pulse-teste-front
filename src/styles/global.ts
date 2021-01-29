import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.text};
    font: 400 16px 'Poppins', sans-serif;
  }
`
