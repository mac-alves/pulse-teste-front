import styled from 'styled-components'

export const Logo = styled.img`
  width: auto;
  height: auto;
  max-width: 179px;
`

export const Form = styled.div`
  padding: 20px 30px 0px 30px;
`

export const Input = styled.input`
  height: 45px;
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.secondary};
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  transition: all 0.3s linear;
  border-radius: 7px;
  margin-bottom: 10px;

  ::-webkit-input-placeholder {
    color: ${props => props.theme.colors.secondary};
  }

  :-moz-placeholder {
    color: ${props => props.theme.colors.secondary};
  }

  ::-moz-placeholder {
    color: ${props => props.theme.colors.secondary};
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.colors.secondary};
  }

  &:focus {
    outline: 0;
    transform: scale(1.01);
  }
`

export const BannerLogin = styled.img`
  width: auto;
  height: auto;
  max-width: 350px;
`
