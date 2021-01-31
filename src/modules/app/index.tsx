import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppRoutes from './paths.routes'

import HomeApp from './pages/Home'
import FormApp from './pages/Form'

import { Container } from './styles'
import { PersonProvider } from './contexts/person'

const AppModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <PersonProvider>
            <Route exact path={AppRoutes.HOME} component={HomeApp} />
            <Route exact path={AppRoutes.PERSON.edite} component={FormApp} />
            <Route exact path={AppRoutes.PERSON.create} component={FormApp} />
          </PersonProvider>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default AppModule
