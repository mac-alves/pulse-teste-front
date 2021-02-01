import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction
} from 'react'
import Service from '../services/LocalStorage'

import { ContextUser } from '../interfaces'

interface AuthContextData {
  logged: boolean
  user: ContextUser | null
  singIn(
    name: string,
    password: string,
    remember: boolean
  ): Promise<401 | 404 | 200>
  register(name: string, password: string): Promise<401 | 200>
  singOut(): 200
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function useAuth(): AuthContextData {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<ContextUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const user = await Service.contextUser()

      if (user) {
        setUser(user)
      }

      setLoading(false)
    })()
  }, [])

  const singIn = async (
    username: string,
    password: string,
    remember: boolean
  ): Promise<401 | 404 | 200> => {
    const result = await Service.singIn(username, password, remember)

    if (result === 401 || result === 404) {
      return result
    }

    setUser(result)
    return 200
  }

  const singOut = (): 200 => {
    setUser(null)
    Service.singOut()

    return 200
  }

  const register = async (
    username: string,
    password: string
  ): Promise<401 | 200> => {
    return await Service.register(username, password)
  }

  return (
    <AuthContext.Provider
      value={{
        logged: Boolean(user),
        user,
        singIn,
        register,
        singOut,
        loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
