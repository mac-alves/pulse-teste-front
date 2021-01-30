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
import BannerRegisterImage from '../../../../assets/images/banner-register.svg'

const Register: React.FC = () => {
  return (
    <Content>
      <Card>
        <p>Criar Conta</p>
      </Card>
      <Main>
        <Division>
          <BannerLogin src={BannerRegisterImage} alt="Banner Login" />
        </Division>
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
            <Input
              name="password"
              placeholder="Confirmar Senha"
              type="password"
              required
            />
            <Submit>Registrar</Submit>
          </Form>
          <OtherOption>
            <p>Já possui conta ?</p>
            <Link to={AuthRoutes.LOGIN}>Fazer Login.</Link>
          </OtherOption>
        </Division>
      </Main>
    </Content>
  )
}

export default Register
