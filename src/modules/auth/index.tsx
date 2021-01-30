import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AuthRoutes from './paths.routes'

import Login from './pages/Login'
import Register from './pages/Register'

// import { Container } from './styles';
const AuthModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AuthRoutes.LOGIN} component={Login} />
        <Route exact path={AuthRoutes.REGISTER} component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthModule
