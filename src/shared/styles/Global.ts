import { createGlobalStyle } from 'styled-components'
import { DEVICE } from '../utils'

export default createGlobalStyle`

  @keyframes toLeft {
      from {
          opacity: 0;
          transform: translateX(2rem);
      }
      to {
          opacity: 1;
      }
  }

  @keyframes up {
      from {
          opacity: 0;
          transform: translateY(2rem);
      }
      to {
          opacity: 1;
      }
  }

  @keyframes toRight {
      from {
          opacity: 0;
          transform: translateX(-2rem);
      }
      to {
          opacity: 1;
      }
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content:center;
    align-items: center;

    background: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.text};
    font: 400 16px 'Poppins', sans-serif;
  }

  @media ${DEVICE.mobileL} {
    body {
      align-items: flex-start;
      padding-top: 20px;
    }
  }
`
