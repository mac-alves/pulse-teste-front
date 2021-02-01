import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './shared/styles/Global'
import theme from './shared/styles/Theme'

import Routes from './Routes'
import { AuthProvider } from './modules/auth/contexts/Auth'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
