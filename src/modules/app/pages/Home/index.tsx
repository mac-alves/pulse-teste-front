import React from 'react'
import { useHistory } from 'react-router-dom'
import { RiUserShared2Line } from 'react-icons/ri'

import { useAuth } from '../../../auth/contexts/Auth'

import { Content, Card, Main, Image } from '../../styles'
import Table from '../../components/Table'

import LogoImage from '../../../../assets/images/logo.png'
import AppRoutes from '../../paths.routes'
import { HomeProvider } from '../../contexts/Home'

const Home: React.FC = () => {
  const { singOut } = useAuth()
  const history = useHistory()

  return (
    <HomeProvider>
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
          <Image
            src={LogoImage}
            alt="Logo"
            onClick={() => history.replace(AppRoutes.HOME)}
          />
          <Table />
        </Main>
      </Content>
    </HomeProvider>
  )
}

export default Home
