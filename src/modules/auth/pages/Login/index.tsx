import React from 'react'
import AuthRoutes from '../../paths.routes'

import {
  Content,
  Card,
  Main,
  Division,
  Submit,
  OtherOption,
  Link
} from '../../styles'
import { Logo, Form, Input, BannerLogin } from './styles'

import LogoImage from '../../../../assets/images/logo.png'
import BannerLoginImage from '../../../../assets/images/banner-login.svg'

const Login: React.FC = () => {
  return (
    <Content>
      <Card>
        <p>Login</p>
      </Card>
      <Main>
        <Division>
          <Logo src={LogoImage} alt="Logo" />
          <Form>
            <Input name="username" placeholder="Usuário" type="text" required />
            <Input
              name="password"
              placeholder="Senha"
              type="password"
              required
            />
            <Submit>Entrar</Submit>
          </Form>
          <OtherOption>
            <p>Não possui conta ?</p>
            <Link to={AuthRoutes.REGISTER}>Criar Conta</Link>
            <i></i>
          </OtherOption>
        </Division>
        <Division>
          <BannerLogin src={BannerLoginImage} alt="Banner Login" />
        </Division>
      </Main>
    </Content>
  )
}

export default Login
