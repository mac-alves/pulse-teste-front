import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 10px;
  width: 100%;
  position: relative;

  .icon {
    position: absolute;
    height: 45px;
    margin-left: 15px;
    color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
  }

  .visible {
    position: absolute;
    right: 10px;
    height: 45px;
    color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;

    &:focus {
      outline: none;
    }
  }
`

interface Props {
  isIcon: boolean
}

export const InputField = styled.input<Props>`
  height: 45px;
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  padding-left: ${props => (props.isIcon ? '40px' : '10px')};
  padding-right: 40px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.placeholder};
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.3s linear;
  border-radius: 7px;

  ::-webkit-input-placeholder {
    color: ${props => props.theme.colors.placeholder};
  }

  :-moz-placeholder {
    color: ${props => props.theme.colors.placeholder};
  }

  ::-moz-placeholder {
    color: ${props => props.theme.colors.placeholder};
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.colors.placeholder};
  }

  &:focus {
    outline: 0;
    transform: scale(1.01);
    border: 2px solid ${props => props.theme.colors.secondary};
  }
`

export const Error = styled.span`
  color: #f2c7a8;
`