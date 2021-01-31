import React, { useEffect, useRef, useState } from 'react'
import AuthRoutes from '../../paths.routes'
import { FaUser, FaLock } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'

import { Notification } from '../../../../shared/styles/components'
import {
  Content,
  Card,
  Main,
  Division,
  Submit,
  OtherOption,
  Link,
  Form,
  Logo,
  BannerLogin
} from '../../styles'
import Input from '../../../../shared/components/Form/Input'
import Checkbox from '../../../../shared/components/Form/Checkbox'
import SecurityInput from '../../../../shared/components/Form/SecurityInput'

import LogoImage from '../../../../assets/images/logo.png'
import BannerLoginImage from '../../../../assets/images/banner-login.svg'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'
import { LocationState, PropsAlert } from '../../../../shared/interfaces'
import { queryParamsToJson, strToBool } from '../../../../shared/utils'

interface PropsForm {
  username: string
  password: string
  remember: boolean
}

const Login: React.FC = () => {
  const formRef = useRef(null)
  const { singIn } = useAuth()
  const location = useLocation<LocationState>()
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<PropsAlert>({ type: 'info', msg: '' })

  async function handleSubmit(dataForm: PropsForm) {
    setLoading(true)
    const codes = {
      401: 'Erro ao realizar o login.',
      404: 'Usuário/Senha incorretos.',
      200: true
    }

    const result = await singIn(
      dataForm.username,
      dataForm.password,
      dataForm.remember
    )
    setAlert({
      type: 'error',
      msg: result === 401 || result === 404 ? codes[result] : ''
    })
    setLoading(false)
  }

  useEffect(() => {
    const search = queryParamsToJson(location.search)
    const hasProp = Object.prototype.hasOwnProperty.call(search, 'success')

    if (hasProp && strToBool(search.success)) {
      setAlert({ type: 'success', msg: 'Cadastro Realizado com sucesso.' })
    }

    return () => {
      setAlert({ type: 'info', msg: '' })
      setLoading(false)
    }
  }, [location])

  return (
    <Content>
      <Card>
        <p>Login</p>
      </Card>
      <Main>
        <Division>
          {alert.msg && (
            <Notification type={alert.type}>
              <GiConfirmed size={20} />
              <p>{alert.msg}</p>
            </Notification>
          )}
          <Logo src={LogoImage} alt="Logo" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input name="username" placeholder="Usuário" type="text" required>
              <FaUser />
            </Input>
            <SecurityInput name="password" placeholder="Senha" required>
              <FaLock />
            </SecurityInput>
            <Checkbox name="remember" label="Lembrar de mim." />
            <Submit>{loading ? 'Carregando...' : 'Entrar'}</Submit>
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
