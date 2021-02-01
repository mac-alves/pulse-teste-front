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

export interface TypeInfo {
  type: keyof { error: string; success: string; info: string }
}

export const Card = styled.div<TypeInfo>`
  position: relative;
  max-width: 400px;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
  border-left: 15px solid;
  border-left-color: ${props =>
    props.type === 'error'
      ? props.theme.colors.primary
      : props.type === 'success'
      ? '#1dbf69'
      : '#bfbe1d'};
  color: ${props =>
    props.type === 'error'
      ? props.theme.colors.primary
      : props.type === 'success'
      ? '#1dbf69'
      : '#bfbe1d'};
  display: flex;

  transition: all 0.5s ease-in-out;
  animation: 0.3s ease-in-out;
  animation-delay: 0.3;
  animation-name: up;

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

export const Action = styled.button`
  position: absolute;
  top: -7px;
  right: -7px;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.03);
  }
`
