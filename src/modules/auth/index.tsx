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
          <Route path={AuthRoutes.REGISTER} component={Register} />
          <Route path="*">
            <h3>404</h3>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default AuthModule
