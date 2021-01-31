import React, { useCallback, useEffect, useRef, useState } from 'react'
import { OptionTypeBase } from 'react-select'
import { useHistory } from 'react-router-dom'
import { RiUserShared2Line } from 'react-icons/ri'
import { BiError } from 'react-icons/bi'
import { IoMdArrowBack } from 'react-icons/io'
import { Axios } from '../../../../shared/axios'
import { useAuth } from '../../../auth/contexts/auth'

import Input from '../../../../shared/components/Form/Input'
import Select from '../../../../shared/components/Form/Select'
import { Notification } from '../../../../shared/styles/components'
import { Content, Card, Main, Image, Title } from '../../styles'
import { Back, Form, Files, Fields, Submit, Group } from './styles'
import LogoImage from '../../../../assets/images/logo.png'
import ImageInput from '../../../../shared/components/Form/ImageInput'

import * as Yup from 'yup'
import { CustomErrorRequest } from '../../../../shared/errors'
import { usePerson } from '../../contexts/person'
import AuthRoutes from '../../../auth/paths.routes'
import AppRoutes from '../../paths.routes'

interface FormFields {
  img: File | undefined
  name: string
  uf: string
  city: string
  age: number
  role: string
}

const roles: OptionTypeBase[] = [
  { value: 'Secretária', label: 'Secretária' },
  { value: 'Analista', label: 'Analista' },
  { value: 'Desenvolvedor', label: 'Desenvolvedor' },
  { value: 'Estagiário', label: 'Estagiário' }
]

const Create: React.FC = () => {
  const formRef = useRef(null)
  const { singOut } = useAuth()
  const { setNewPerson } = usePerson()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [error, setErro] = useState('')

  const [ufs, setUfs] = useState<OptionTypeBase[]>([])
  const [selectedUf, setSelectedUf] = useState<string>('')
  const [cities, setCities] = useState<OptionTypeBase[]>([])
  const [selectedCity, setSelectedCity] = useState<OptionTypeBase | null>()

  const toBase64 = (file: File) =>
    new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

  async function handleSubmit(data: FormFields) {
    // eslint-disable-next-line prettier/prettier
    (formRef as any).current.setErrors({})
    setLoading(true)
    const dataForm = {
      ...data,
      age: Number(data.age)
    }

    console.log(dataForm)

    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Campo obrigatório')
          .min(3, 'Nome muito curto'),
        uf: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        age: Yup.number()
          .required('Campo obrigatório')
          .positive('Número inválido')
          .integer(),
        role: Yup.string().required('Campo obrigatório')
      })

      await schema.validate(dataForm, {
        abortEarly: false
      })

      let image = null

      if (dataForm.img) {
        image = await toBase64(dataForm.img)
      }

      console.log(typeof image)

      const code = await setNewPerson({
        name: dataForm.name,
        age: dataForm.age,
        uf: dataForm.uf,
        city: dataForm.city,
        role: dataForm.role,
        img: image
      })
      console.log(code)

      if (code === 401) {
        throw new CustomErrorRequest('Erro ao cadastrar pessoa')
      }

      setLoading(false)
      history.push({
        pathname: AppRoutes.HOME,
        search: 'success=true'
      })
    } catch (err) {
      const validationErrors: any = {}

      if (err instanceof CustomErrorRequest) {
        setErro(err.message)
      }

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          if (error.path) {
            validationErrors[error.path] = error.message
          }
        })
        if (formRef.current) {
          // eslint-disable-next-line prettier/prettier
          (formRef as any).current.setErrors(validationErrors)
        }
      }

      setLoading(false)
    }
  }

  const getUfs = useCallback(async () => {
    const ufs = await Axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    )

    setUfs(
      ufs.data.map((uf: any) => {
        return {
          value: uf.sigla,
          label: uf.sigla
        }
      })
    )
  }, [])

  const getCity = useCallback(async () => {
    const response = await Axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
    )

    setCities(
      response.data.map((city: any) => {
        return {
          value: city.nome,
          label: city.nome
        }
      })
    )
  }, [selectedUf])

  const handleSelectUf = (item: OptionTypeBase | null) => {
    if (item) {
      setSelectedUf(item.value)
      setSelectedCity(null)
      if (formRef.current) {
        // eslint-disable-next-line prettier/prettier
        (formRef as any).current.getFieldRef('city').state.value = null
      }
    }
  }

  const handleSingOut = () => {
    singOut()
    history.replace(AuthRoutes.LOGIN)
  }

  useEffect(() => {
    getUfs()
  }, [getUfs])

  useEffect(() => {
    if (selectedUf !== '') {
      getCity()
    }
  }, [getCity, selectedUf])

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
        <button onClick={handleSingOut}>
          <p>
            Sair. <RiUserShared2Line />
          </p>
        </button>
      </Card>
      <Main>
        <Image
          src={LogoImage}
          alt="Logo"
          onClick={() => history.push(AppRoutes.HOME)}
        />
        <Title>Cadastro de Pessoas</Title>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Files>
            <ImageInput name="img" accept="image/png, image/jpeg, image/jpg" />
          </Files>
          <Fields>
            <Input name="name" type="text" placeholder="Nome" />
            <Input name="age" type="number" placeholder="Idade" />
            <Group>
              <Select
                placeholder="UF"
                options={ufs}
                name="uf"
                onChange={item => handleSelectUf(item)}
              />
              <Select
                options={cities}
                placeholder="Selecione uma Cidade"
                name="city"
                value={selectedCity}
                onChange={item => setSelectedCity(item)}
                flex={2}
              />
            </Group>
            <Select
              options={roles}
              placeholder="Selecione um cargo"
              name="role"
            />
            <Submit>{loading ? 'Carregando...' : 'Salvar'}</Submit>
          </Fields>
        </Form>
        {error && (
          <Notification type="error">
            <BiError size={20} />
            <p>{error}</p>
          </Notification>
        )}
      </Main>
    </Content>
  )
}

export default Create
