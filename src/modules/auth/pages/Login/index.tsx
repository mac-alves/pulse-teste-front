import React, { useEffect, useRef, useState } from 'react'
import AuthRoutes from '../../paths.routes'
import { FaUser, FaLock } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'

import {
  Content,
  Card,
  Main,
  Division,
  Submit,
  OtherOption,
  Link,
  Form,
  Success,
  Logo,
  BannerLogin
} from '../../styles'
import Input from '../../../../shared/components/Form/Input'

import LogoImage from '../../../../assets/images/logo.png'
import BannerLoginImage from '../../../../assets/images/banner-login.svg'
import SecurityInput from '../../../../shared/components/Form/SecurityInput'
import Checkbox from '../../../../shared/components/Form/Checkbox'
import { useLocation } from 'react-router-dom'

interface PropsForm {
  username: string
  password: string
  authorized: boolean
}

interface LocationState {
  hash: string
  key: string
  pathname: string
  search: string
  success?: boolean
}

const Login: React.FC = () => {
  const formRef = useRef(null)
  const location = useLocation<LocationState>()
  const [msg, setMsg] = useState('')

  function handleSubmit(event: PropsForm) {
    console.log(event)
  }

  useEffect(() => {
    const { success } = location.state ? location.state : { success: false }
    if (success) {
      setMsg('Cadastro Realizado com sucesso.')
    }
  }, [location])

  return (
    <Content>
      <Card>
        <p>Login</p>
      </Card>
      <Main>
        <Division>
          {msg && (
            <Success>
              <GiConfirmed size={20} />
              <p>{msg}</p>
            </Success>
          )}
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
