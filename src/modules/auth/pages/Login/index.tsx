import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'
import AuthRoutes from '../../paths.routes'

import {
  Content,
  Card,
  Main,
  Banner,
  FormContainer,
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
import { useAuth } from '../../contexts/Auth'
import AppRoutes from '../../../app/paths.routes'
import MessageModal, {
  ModalHandles
} from '../../../../shared/components/ui/MessageModal'
import { CustomErrorRequest } from '../../../../shared/errors'

interface PropsForm {
  username: string
  password: string
  remember: boolean
}

const Login: React.FC = () => {
  const formRef = useRef(null)
  const modalRef = useRef<ModalHandles>(null)
  const history = useHistory()
  const { singIn } = useAuth()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(dataForm: PropsForm) {
    setLoading(true)
    const codes = {
      401: 'Erro ao realizar o login.',
      404: 'Usuário/Senha incorretos.',
      200: true
    }

    try {
      const result = await singIn(
        dataForm.username,
        dataForm.password,
        dataForm.remember
      )

      if (result === 401 || result === 404) {
        throw new CustomErrorRequest(codes[404])
      }

      setLoading(false)
      history.replace(AppRoutes.HOME)
    } catch (error) {
      if (error instanceof CustomErrorRequest) {
        modalRef.current?.openModal('error', 'Error', error.message)
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    return () => {
      setLoading(false)
    }
  }, [location])

  return (
    <Content>
      <Card>
        <p>Login</p>
      </Card>
      <Main>
        <FormContainer>
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
        </FormContainer>
        <Banner>
          <BannerLogin src={BannerLoginImage} alt="Banner Login" />
        </Banner>
        <MessageModal
          operationClose={() => history.push(AuthRoutes.LOGIN)}
          ref={modalRef}
        />
      </Main>
    </Content>
  )
}

export default Login
