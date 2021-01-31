import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { RiUserShared2Line } from 'react-icons/ri'
import { GiConfirmed } from 'react-icons/gi'

import { useAuth } from '../../../auth/contexts/auth'

import { Notification } from '../../../../shared/styles/components'
import { Content, Card, Main, Image } from '../../styles'
import Table from '../../components/Table'

import LogoImage from '../../../../assets/images/logo.png'
import AppRoutes from '../../paths.routes'
import { LocationState, PropsAlert } from '../../../../shared/interfaces'
import { queryParamsToJson, strToBool } from '../../../../shared/utils'

const Home: React.FC = () => {
  const { singOut } = useAuth()
  const location = useLocation<LocationState>()
  const history = useHistory()
  const [alert, setAlert] = useState<PropsAlert>({ type: 'info', msg: '' })

  useEffect(() => {
    const search = queryParamsToJson(location.search)
    const hasProp = Object.prototype.hasOwnProperty.call(search, 'success')

    if (hasProp && strToBool(search.success)) {
      setAlert({ type: 'success', msg: 'Operação Realizado com sucesso.' })
    }

    return () => {
      setAlert({ type: 'info', msg: '' })
    }
  }, [location])

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
        <Image
          src={LogoImage}
          alt="Logo"
          onClick={() => history.replace(AppRoutes.HOME)}
        />
        {alert.msg && (
          <Notification type={alert.type}>
            <GiConfirmed size={20} />
            <p>{alert.msg}</p>
          </Notification>
        )}
        <Table />
      </Main>
    </Content>
  )
}

export default Home
