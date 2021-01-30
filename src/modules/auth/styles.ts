import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Form as FormWeb } from '@unform/web'

export const Container = styled.div`
  width: 833px;
  height: 610px;

  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 30px 30px 30px;
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
  border-radius: 0px 0px 30px 0px;

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
`

export const Main = styled.main`
  height: 100%;
  display: flex;
`

export const Division = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Logo = styled.img`
  width: auto;
  height: auto;
  max-width: 179px;
  margin-bottom: 15px;
`

export const Form = styled(FormWeb)`
  width: 100%;
  padding: 0px 30px;
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

export const OtherOption = styled.div`
  width: 100%;
  height: 30px;
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;

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
interface PropsNotification {
  type: keyof { error: string; success: string; info: string }
}

export const Notification = styled.span<PropsNotification>`
  width: 100%;
  height: 30px;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props =>
    props.type === 'error'
      ? props.theme.colors.primary
      : props.type === 'success'
      ? '#1dbf69'
      : '#bfbe1d'};
  margin-bottom: 10px;

  p {
    line-height: 20px;
    margin-left: 5px;
  }
`

export const BannerLogin = styled.img`
  width: auto;
  height: auto;
  max-width: 350px;
`
