import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppRoutes from './paths.routes'

import HomeApp from './pages/Home'
import FormApp from './pages/Form'
import NotFound from '../../shared/pages/NotFound'

import { Container } from './styles'

const AppModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path={AppRoutes.HOME} component={HomeApp} />
          <Route path={AppRoutes.PERSON.edite} component={FormApp} />
          <Route path={AppRoutes.PERSON.create} component={FormApp} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default AppModule
