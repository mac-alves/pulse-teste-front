import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppRoutes from './paths.routes'

import Home from './pages/Home'
import Create from './pages/Create'

import { Container } from './styles'
import { PersonProvider } from './contexts/person'

const AppModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <PersonProvider>
            <Route exact path={AppRoutes.HOME} component={Home} />
            <Route path={AppRoutes.PERSON.create} component={Create} />
          </PersonProvider>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default AppModule
