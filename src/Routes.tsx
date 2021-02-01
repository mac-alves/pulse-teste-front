import React from 'react'
import AuthModules from './modules/auth'
import AppModules from './modules/app'
import { useAuth } from './modules/auth/contexts/Auth'

const Routes: React.FC = () => {
  const { logged } = useAuth()

  return logged ? <AppModules /> : <AuthModules />
}

export default Routes
