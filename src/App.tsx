import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './shared/styles/global'
import theme from './shared/styles/theme'

import Routes from './routes'
import { AuthProvider } from './modules/auth/contexts/auth'

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
