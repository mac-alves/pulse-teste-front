import styled from 'styled-components'
import { DEVICE } from '../../../utils'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
`

export const Card = styled.div`
  position: relative;
  max-width: 400px;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
  border-left: 15px solid;
  border-left-color: #bfbe1d;
  color: #bfbe1d;
  display: flex;

  @media ${DEVICE.mobileL} {
    width: calc(100% - 15px);
  }
`

export const Information = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15px;
`

export const Title = styled.div`
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  font-size: 23px;
`

export const Description = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.colors.text};
`

export const Button = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 7px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.03);
  }

  p {
    margin-left: 5px;
    font-size: 15px;
  }
`

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const Cancel = styled(Button)`
  background-color: #ff5153;
`

export const Confirm = styled(Button)`
  background-color: #1dbf69;
`
