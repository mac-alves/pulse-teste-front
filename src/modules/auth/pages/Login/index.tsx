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
import BannerLoginImage from '../../../../assets/images/banner-login.svg'
import SecurityInput from '../../../../components/Form/SecurityInput'
import Checkbox from '../../../../components/Form/Checkbox'

interface PropsForm {
  username: string
  password: string
  authorized: boolean
}

const Login: React.FC = () => {
  const formRef = useRef(null)

  function handleSubmit(event: PropsForm) {
    console.log(event)
  }

  return (
    <Content>
      <Card>
        <p>Login</p>
      </Card>
      <Main>
        <Division>
          <Logo src={LogoImage} alt="Logo" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input name="username" placeholder="Usuário" type="text" required>
              <FaUser />
            </Input>
            <SecurityInput name="password" placeholder="Senha" required>
              <FaLock />
            </SecurityInput>
            <Checkbox name="authorized" label="Lembrar de mim." />
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
