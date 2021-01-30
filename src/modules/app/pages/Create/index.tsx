import React, { useRef, useState } from 'react'
import { RiUserShared2Line } from 'react-icons/ri'
import { IoMdArrowBack } from 'react-icons/io'
import { useAuth } from '../../../auth/contexts/auth'

import { Content, Card, Main, Image, Title } from '../../styles'
import { Back, Form, Files, Fields, Submit, Group, Select } from './styles'
import LogoImage from '../../../../assets/images/logo.png'
import ImageInput from '../../../../shared/components/Form/ImageInput'
import Input from '../../../../shared/components/Form/Input'
import { useHistory } from 'react-router-dom'

interface FormFilds {
  img: File | undefined
  name: string
  city: string
  age: number
  role: string
}

const Create: React.FC = () => {
  const formRef = useRef(null)
  const { singOut } = useAuth()
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(dataForm: FormFilds) {
    console.log(dataForm)
  }

  return (
    <Content>
      <Card position="topLeft">
        <p>Cadastro</p>
      </Card>
      <Back>
        <button onClick={() => history.goBack()}>
          <p>
            <IoMdArrowBack /> Voltar
          </p>
        </button>
      </Back>
      <Card position="topRight" className="button">
        <button onClick={() => singOut()}>
          <p>
            Sair. <RiUserShared2Line />
          </p>
        </button>
      </Card>
      <Main>
        <Image src={LogoImage} alt="Logo" />
        <Title>Cadastro de Pessoas</Title>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Files>
            <ImageInput name="img" accept="image/png, image/jpeg, image/jpg" />
          </Files>
          <Fields>
            <Input name="name" type="text" placeholder="Nome" />
            <Input name="age" min="1" type="number" placeholder="Idade" />
            <Group>
              <Select name="uf" id="uf">
                <option value="0">UF</option>
                <option value="1">Selecione uma UF</option>
                <option value="2">Selecione uma UF</option>
              </Select>
              <Select name="city" id="uf" flex={2}>
                <option value="0">Selecione uma Cidade</option>
                <option value="1">Selecione uma UF</option>
                <option value="2">Selecione uma UF</option>
              </Select>
            </Group>
            <Select name="role" id="uf" flex={2}>
              <option value="0">Selecione Cargo</option>
              <option value="1">Selecione uma UF</option>
              <option value="2">Selecione uma UF</option>
            </Select>
            <Submit>{loading ? 'Carregando...' : 'Salvar'}</Submit>
          </Fields>
        </Form>
      </Main>
    </Content>
  )
}

export default Create
