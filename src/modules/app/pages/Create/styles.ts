import styled from 'styled-components'
import { Form as FormWeb } from '@unform/web'

export const Back = styled.div`
  position: absolute;
  height: 40px;
  top: 40px;
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    transform: scale(1.01);
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 37px;
    color: white;
    margin-left: 15px;
    color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`

export const Form = styled(FormWeb)`
  width: 100%;
  margin-top: 20px;
  padding: 0px 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Files = styled.div``

export const Fields = styled.div`
  width: 100%;
  margin-left: 20px;
`

export const Submit = styled.button`
  width: 100%;
  height: 45px;
  padding: 5px;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: white;
  transition: all 0.3s linear;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 7px;

  &:hover {
    transform: scale(1.01);
    box-shadow: inset 0px 0px 5px -1px rgba(0, 0, 0, 0.7);
  }

  &:focus {
    outline: 0;
  }
`

export const Group = styled.div`
  display: flex;
`

interface PropsSelect {
  flex?: number
}

export const Select = styled.select<PropsSelect>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 45px;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.placeholder};
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.3s linear;
  border-radius: 7px;
  cursor: pointer;
  margin-bottom: 10px;
  flex: ${props => (props.flex ? props.flex : 1)};

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:focus {
    outline: 0;
  }
`
