import React, { useRef } from 'react'
import AuthRoutes from '../../paths.routes'
import { FaUser, FaLock } from 'react-icons/fa'

import {
  Content,
  Card,
  Main,
  Division,
  Submit,
  OtherOption,
  Link,
  Form
} from '../../styles'
import { Logo, BannerLogin } from './styles'
import Input from '../../../../components/Form/Input'

import LogoImage from '../../../../assets/images/logo.png'
import BannerRegisterImage from '../../../../assets/images/banner-register.svg'
import SecurityInput from '../../../../components/Form/SecurityInput'

const Register: React.FC = () => {
  const formRef = useRef(null)

  function handleSubmit(event: { username: string; password: string }) {
    console.log(event)
  }

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
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input name="username" placeholder="Usuário" type="text" required>
              <FaUser />
            </Input>
            <SecurityInput name="password" placeholder="Senha" required>
              <FaLock />
            </SecurityInput>
            <SecurityInput
              name="confirm_password"
              placeholder="Confirmar Senha"
              type="password"
              required
            >
              <FaLock />
            </SecurityInput>
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
