import React, { useCallback, useEffect, useRef, useState } from 'react'
import { OptionTypeBase } from 'react-select'
import { useHistory, useParams } from 'react-router-dom'
import { RiUserShared2Line } from 'react-icons/ri'
import { IoMdArrowBack } from 'react-icons/io'
import PersonService from '../../services/LocalStorage'
import { Axios } from '../../../../shared/axios'
import { useAuth } from '../../../auth/contexts/Auth'

import Input from '../../../../shared/components/Form/Input'
import Select from '../../../../shared/components/Form/Select'
import { Content, Card, Main, Image, Title } from '../../styles'
import {
  Back,
  Form as FormPerson,
  Files,
  Fields,
  Submit,
  Group
} from './styles'
import LogoImage from '../../../../assets/images/logo.png'
import ImageInput from '../../../../shared/components/Form/ImageInput'

import * as Yup from 'yup'
import { CustomErrorRequest } from '../../../../shared/errors'
import AuthRoutes from '../../../auth/paths.routes'
import AppRoutes from '../../paths.routes'
import { Person } from '../../interfaces'
import MessageModal, {
  ModalHandles
} from '../../../../shared/components/ui/MessageModal'

interface FormFields {
  img: File | undefined
  name: string
  uf: string
  city: string
  age: number
  role: string
}

export interface Params {
  [key: string]: any
}

const roles: OptionTypeBase[] = [
  { value: 'Secretária', label: 'Secretária' },
  { value: 'Analista', label: 'Analista' },
  { value: 'Desenvolvedor', label: 'Desenvolvedor' },
  { value: 'Estagiário', label: 'Estagiário' }
]

const Form: React.FC = () => {
  const { id } = useParams<Params>()

  const formRef = useRef(null)
  const modalRef = useRef<ModalHandles>(null)
  const history = useHistory()
  const { singOut } = useAuth()
  const [loading, setLoading] = useState(false)

  const [ufs, setUfs] = useState<OptionTypeBase[]>([])
  const [cities, setCities] = useState<OptionTypeBase[]>([])
  const [selectedUf, setSelectedUf] = useState<OptionTypeBase | null>()
  const [selectedCity, setSelectedCity] = useState<OptionTypeBase | null>()
  const [selectedRole, setSelectedRole] = useState<OptionTypeBase | null>()

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

      const code = await PersonService.save(id, {
        name: dataForm.name,
        age: dataForm.age,
        uf: dataForm.uf,
        city: dataForm.city,
        role: dataForm.role,
        img: image
      })

      if (code === 401) {
        throw new CustomErrorRequest('Erro ao salvar pessoa')
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
    try {
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
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getCity = useCallback(async () => {
    if (selectedUf) {
      try {
        const response = await Axios.get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf.value}/municipios`
        )

        setCities(
          response.data.map((city: any) => {
            return {
              value: city.nome,
              label: city.nome
            }
          })
        )
      } catch (error) {
        console.log(error)
      }
    }
  }, [selectedUf])

  const handleSelectUf = (item: OptionTypeBase | null) => {
    if (item) {
      setSelectedUf(item)
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

  const setPersonToEdit = (person: Person | null) => {
    if (person) {
      setSelectedUf({ value: person.uf, label: person.uf })
      setSelectedCity({ value: person.city, label: person.city })
      setSelectedRole({ value: person.role, label: person.role })
      ;(formRef as any).current.setData({
        name: person.name,
        age: person.age,
        uf: person.uf,
        city: person.city,
        role: person.role,
        img: person.img
      })
    }
  }

  useEffect(() => {
    getUfs()
  }, [getUfs])

  useEffect(() => {
    if (selectedUf) {
      getCity()
    }
  }, [getCity, selectedUf])

  useEffect(() => {
    if (id) {
      ;(async () => {
        const person = await PersonService.get(id)
        setPersonToEdit(person)
      })()
    }
  }, [id])

  return (
    <Content>
      <Card position="topLeft">
        <p>{id ? 'Edição' : 'Cadastro'}</p>
      </Card>
      <Back>
        <button onClick={() => history.replace(AppRoutes.HOME)}>
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
        <Title>{id ? 'Edição' : 'Cadastro'} de Pessoas</Title>
        <FormPerson onSubmit={handleSubmit} ref={formRef}>
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
                value={selectedUf}
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
              value={selectedRole}
              onChange={item => setSelectedRole(item)}
            />
            <Submit>{loading ? 'Carregando...' : 'Salvar'}</Submit>
          </Fields>
        </FormPerson>
        <MessageModal
          operationClose={() => history.push(AppRoutes.HOME)}
          ref={modalRef}
        />
      </Main>
    </Content>
  )
}

export default Form
