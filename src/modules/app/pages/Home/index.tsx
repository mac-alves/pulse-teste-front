import React from 'react'
import { useAuth } from '../../../auth/contexts/auth'

import { Container } from './styles'

const Home: React.FC = () => {
  const { singOut } = useAuth()

  return (
    <Container>
      <h1>Home</h1>
      <button onClick={() => singOut()}>Sair</button>
    </Container>
  )
}

export default Home
