import styled from 'styled-components'
import { Form as FormWeb } from '@unform/web'
import { DEVICE } from '../../../../shared/utils'

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

  @media ${DEVICE.mobileL} {
    p {
      font-size: 15px;
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

  @media ${DEVICE.mobileL} {
    flex-direction: column;
    padding: 0px 15px;
    margin-top: 10px;
  }
`

export const Files = styled.div`
  @media ${DEVICE.mobileL} {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const Fields = styled.div`
  width: 100%;
  margin-left: 20px;

  @media ${DEVICE.mobileL} {
    margin-left: 0px;
  }
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

  & > div:not(:last-child) {
    margin-right: 10px;
  }
`
