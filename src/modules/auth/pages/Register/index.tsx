/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react'
import AuthRoutes from '../../paths.routes'
import { FaUser, FaLock } from 'react-icons/fa'

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
  Logo, BannerLogin
} from '../../styles'
import Input from '../../../../shared/components/Form/Input'
import SecurityInput from '../../../../shared/components/Form/SecurityInput'
import MessageModal, { ModalHandles } from '../../../../shared/components/ui/MessageModal'

import LogoImage from '../../../../assets/images/logo.png'
import BannerRegisterImage from '../../../../assets/images/banner-register.svg'

import { useAuth } from '../../contexts/Auth'
import * as Yup from 'yup'
import { CustomErrorRequest } from '../../../../shared/errors'
import { useHistory } from 'react-router-dom'

interface PropsForm {
  username: string
  password: string
  confirmPassword: string
}

const Register: React.FC = () => {
  const history = useHistory()
  const formRef = useRef(null)
  const modalRef = useRef<ModalHandles>(null)
  const { register } = useAuth()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(data: PropsForm) {
    (formRef as any).current.setErrors({})
    setLoading(true)

    try {
      const schema = Yup.object().shape({
        username: Yup.string()
          .required('Campo obrigatório')
          .min(3, 'Nome muito curto'),
        password: Yup.string()
          .required('Campo obrigatório')
          .min(3, 'Nome muito curto'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Senha diferente da senha anterior.')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      const login = await register(data.username, data.password)

      if (login === 401) {
        throw new CustomErrorRequest('Erro ao cadastrar usuário')
      }

      setLoading(false)
      modalRef.current?.openModal()
    } catch (err) {
      const validationErrors: any = {}

      if (err instanceof CustomErrorRequest) {
        modalRef.current?.openModal('error', 'Error', err.message)
      }

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          if (error.path) {
            validationErrors[error.path] = error.message
          }
        });

        (formRef as any).current.setErrors(validationErrors)
      }

      setLoading(false)
    }
  }

  return (
    <Content>
      <Card>
        <p>Criar Conta</p>
      </Card>
      <Main>
        <Banner>
          <BannerLogin src={BannerRegisterImage} alt="Banner Login" />
        </Banner>
        <FormContainer>
          <Logo src={LogoImage} alt="Logo" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input name="username" placeholder="Usuário" type="text" required>
              <FaUser />
            </Input>
            <SecurityInput name="password" placeholder="Senha" required>
              <FaLock />
            </SecurityInput>
            <SecurityInput
              name="confirmPassword"
              placeholder="Confirmar Senha"
              required
            >
              <FaLock />
            </SecurityInput>
            <Submit>{loading ? 'Carregando...' : 'Registrar'}</Submit>
          </Form>
          <OtherOption>
            <p>Já possui conta ?</p>
            <Link to={AuthRoutes.LOGIN}>Login.</Link>
          </OtherOption>
        </FormContainer>
        <MessageModal
          operationClose={() => history.push(AuthRoutes.LOGIN)}
          ref={modalRef}
        />
      </Main>
    </Content>
  )
}

export default Register
