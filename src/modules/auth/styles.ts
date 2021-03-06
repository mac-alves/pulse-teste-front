import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Form as FormWeb } from '@unform/web'
import { DEVICE } from '../../shared/utils'

export const Container = styled.div`
  width: 833px;
  height: 610px;

  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  transition: all 0.5s ease-in-out;
  animation: 0.3s ease-in-out;
  animation-delay: 0.3;
  animation-name: up;

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

export const Card = styled.div`
  position: absolute;
  height: 40px;

  background: ${props => props.theme.colors.primary};
  border-radius: 30px 0px 30px 0px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 37px;
    color: white;
    margin: 0 25px 0 20px;
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

  @media ${DEVICE.mobileL} {
    flex-direction: column;
    padding: 60px 0 30px 0;
  }
`

export const Division = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Banner = styled(Division)`
  transition: all 0.5s ease-in-out;
  animation: 0.4s ease-in-out;
  animation-delay: 0.4;
  animation-name: toLeft;

  @media ${DEVICE.mobileL} {
    display: none;
  }
`

export const FormContainer = styled(Division)``

export const Logo = styled.img`
  width: auto;
  height: auto;
  max-width: 179px;
  margin-bottom: 15px;

  transition: all 0.5s ease-in-out;
  animation: 0.4s ease-in-out;
  animation-delay: 0.4;
  animation-name: toLeft;
`

export const Form = styled(FormWeb)`
  width: 100%;
  padding: 0px 30px;

  transition: all 0.5s ease-in-out;
  animation: 0.5s ease-in-out;
  animation-delay: 0.5;
  animation-name: toLeft;

  @media ${DEVICE.mobileL} {
    padding: 0px 15px;
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
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 7px;

  transition: all 0.5s ease-in-out;
  animation: 0.5s ease-in-out;
  animation-delay: 0.5;
  animation-name: toLeft;

  &:hover {
    transform: scale(1.01);
    box-shadow: inset 0px 0px 5px -1px rgba(0, 0, 0, 0.7);
  }

  &:focus {
    outline: 0;
  }
`

export const OtherOption = styled.div`
  width: 100%;
  height: 30px;
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in-out;
  animation: 0.6s ease-in-out;
  animation-delay: 0.6;
  animation-name: toLeft;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
  }
`

export const Link = styled(LinkRouter)`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${props => props.theme.colors.primary};
  margin-left: 5px;
  transition: all 0.3s linear;

  &:hover {
    /* color: ${props => props.theme.colors.secondary}; */
    text-decoration: underline;
  }
`

export const BannerLogin = styled.img`
  width: auto;
  height: auto;
  max-width: 350px;
`
