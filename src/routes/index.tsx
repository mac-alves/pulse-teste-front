import React from 'react'
import AuthModules from '../modules/auth'
import AppModules from '../modules/app'

const Routes: React.FC = () => {
  const Logged = false

  return Logged ? <AppModules /> : <AuthModules />
}

export default Routes
