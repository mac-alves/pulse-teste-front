import styled from 'styled-components'
import { DEVICE } from '../../shared/utils'

export const Container = styled.div`
  width: 833px;
  height: 610px;

  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  @media ${DEVICE.mobileL} {
    width: calc(100vw - 20px);
    height: initial;
    margin-bottom: 20px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

interface PositionCard {
  topLeft: string
  topRight: string
}

interface CardProps {
  position: keyof PositionCard
}

export const Card = styled.div<CardProps>`
  position: absolute;
  height: 40px;

  background: ${props => props.theme.colors.primary};
  border-radius: ${props =>
    props.position === 'topLeft' ? '30px 0px 30px 0px' : '0px 30px 0px 30px'};

  ${props => (props.position === 'topRight' ? 'right: 0;' : 'left: 0;')}
  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: all 0.5s ease-in-out;
  animation: 0.3s ease-in-out;
  animation-delay: 0.3;
  animation-name: ${props =>
    props.position === 'topRight' ? 'toRight;' : 'toLeft;'};

  &.button {
    &:hover {
      transform: scale(1.01);
      box-shadow: inset 0px 0px 5px -1px rgba(0, 0, 0, 0.7);
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 37px;
    color: white;
    margin: 0 25px 0 20px;
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

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  @media ${DEVICE.mobileL} {
    flex-direction: column;
    padding: 60px 0 30px 0;
  }
`

export const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 179px;
  margin: 30px 0 20px 0;
  cursor: pointer;

  transition: all 0.5s ease-in-out;
  animation: 0.3s ease-in-out;
  animation-delay: 0.3;
  animation-name: up;
`

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  color: ${props => props.theme.colors.primary};
  margin-left: 15px;
`
