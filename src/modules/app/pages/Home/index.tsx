import React from 'react'
import { RiUserShared2Line } from 'react-icons/ri'
import { AiOutlinePlus, AiFillEdit } from 'react-icons/ai'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { IoMdTrash } from 'react-icons/io'
import { FaUserAlt } from 'react-icons/fa'

import { useAuth } from '../../../auth/contexts/auth'

import { Content, Card, Main, Image, Title } from '../../styles'
import {
  Table,
  Header,
  Plus,
  Pages,
  Body,
  ImageUser,
  TableFooter,
  Navigation
} from './styles'

import LogoImage from '../../../../assets/images/logo.png'
import AppRoutes from '../../paths.routes'

const dataTable = [
  {
    id: '01',
    name: 'Mauricio ALves',
    city: 'São Luis',
    age: 25,
    role: 'Desenv'
  },
  {
    id: '02',
    name: 'Mauricio ALves',
    city: 'São Luis',
    age: 25,
    role: 'Desenv'
  },
  {
    id: '03',
    name: 'Mauricio ALves',
    city: 'São Luis',
    age: 25,
    role: 'Desenv'
  },
  {
    id: '04',
    name: 'Mauricio ALves',
    city: 'São Luis',
    age: 25,
    role: 'Desenv'
  },
  {
    id: '05',
    name: 'Mauricio ALves',
    city: 'São Luis',
    age: 25,
    role: 'Desenv'
  }
]

const Home: React.FC = () => {
  const { singOut } = useAuth()

  return (
    <Content>
      <Card position="topLeft">
        <p>Bem-Vindo.</p>
      </Card>
      <Card position="topRight" className="button">
        <button onClick={() => singOut()}>
          <p>
            Sair. <RiUserShared2Line />
          </p>
        </button>
      </Card>
      <Main>
        <Image src={LogoImage} alt="Logo" />
        <Table>
          <Header>
            <div>
              <Plus to={AppRoutes.PERSON.create}>
                <AiOutlinePlus size={20} />
              </Plus>
              <Title>Pessoas Cadastradas</Title>
            </div>
            <Pages>1/2</Pages>
          </Header>
          <Body>
            <thead>
              <tr>
                <th></th>
                <th>id</th>
                <th>Nome</th>
                <th>Município</th>
                <th>Idade</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map(item => (
                <tr key={item.id}>
                  <td>
                    <ImageUser>
                      <FaUserAlt size={20} />
                    </ImageUser>
                  </td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.age}</td>
                  <td>{item.role}</td>
                  <td>
                    <AiFillEdit size={20} />
                    <IoMdTrash size={20} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Body>
          <TableFooter>
            <Navigation>
              <button>
                <FiChevronLeft />
              </button>
              <button>
                <FiChevronRight />
              </button>
            </Navigation>
          </TableFooter>
        </Table>
      </Main>
    </Content>
  )
}

export default Home
