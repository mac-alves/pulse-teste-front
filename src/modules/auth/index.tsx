import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AuthRoutes from './paths.routes'

import Login from './pages/Login'
import Register from './pages/Register'

import { Container } from './styles'

const AuthModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path={AuthRoutes.LOGIN} component={Login} />
          <Route exact path={AuthRoutes.REGISTER} component={Register} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default AuthModule
