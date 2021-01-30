import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

import { ContextUser, User } from '../interfaces/user'
interface AuthContextData {
  logged: boolean
  user: ContextUser | null
  singIn(name: string, password: string): Promise<number>
  register(name: string, password: string): Promise<number>
  singOut(): number
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
    const storageContextUser = localStorage.getItem('@PULSE:context-user')

    if (storageContextUser) {
      setUser(JSON.parse(storageContextUser))
    }

    setLoading(false)
  }, [])

  async function singIn(name: string, password: string) {
    try {
      if (name && password) {
        return 200
      }
      return 401
    } catch (error) {
      console.log(error)
    }

    return 401
  }

  function singOut() {
    setUser(null)
    localStorage.clear()

    return 200
  }

  async function register(username: string, password: string) {
    try {
      if (username && password) {
        const storage = localStorage.getItem('@PULSE:users')
        const listUsers = storage ? JSON.parse(storage) : []
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser: User = {
          id: uuidv4(),
          username,
          password: hash
        }

        listUsers.push(newUser)
        localStorage.setItem('@PULSE:users', JSON.stringify(listUsers))
        return 200
      }

      return 401
    } catch (error) {
      console.log(error)
    }

    return 401
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
