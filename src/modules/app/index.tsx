import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppRoutes from './paths.routes'

import Home from './pages/Home'

// import { Container } from './styles';
const AppModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppModule
