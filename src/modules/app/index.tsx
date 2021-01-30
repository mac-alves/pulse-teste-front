import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppRoutes from './paths.routes'

import Home from './pages/Home'
import Create from './pages/Create'

import { Container } from './styles'

const AppModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path={AppRoutes.HOME} component={Home} />
          <Route exact path={AppRoutes.PERSON.create} component={Create} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default AppModule
