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

  const getContextUser = () => {
    const session = sessionStorage.getItem('@PULSE:context-user')
    if (session) {
      const user: ContextUser = JSON.parse(session)
      return user
    }

    const storage = localStorage.getItem('@PULSE:context-user')
    if (storage) {
      const user: ContextUser = JSON.parse(storage)
      return user
    }

    return null
  }

  useEffect(() => {
    const user = getContextUser()

    if (user) {
      setUser(user)
    }

    setLoading(false)
  }, [])

  const singIn = async (
    username: string,
    password: string,
    remember: boolean
  ): Promise<401 | 404 | 200> => {
    try {
      if (username && password) {
        const storage = localStorage.getItem('@PULSE:users')
        const listUsers: User[] = storage ? JSON.parse(storage) : []

        const user = listUsers.find(
          user =>
            bcrypt.compareSync(password, user.password) &&
            user.username === username
        )

        if (user) {
          const contexUser: ContextUser = {
            id: user.id,
            username: user.username
          }

          sessionStorage.setItem(
            '@PULSE:context-user',
            JSON.stringify(contexUser)
          )

          if (remember) {
            localStorage.setItem(
              '@PULSE:context-user',
              JSON.stringify(contexUser)
            )
          }

          setUser(contexUser)
          return 200
        }

        return 404
      }

      return 401
    } catch (error) {
      console.log(error)
    }

    return 401
  }

  const singOut = (): 200 => {
    setUser(null)
    localStorage.removeItem('@PULSE:context-user')
    sessionStorage.removeItem('@PULSE:context-user')

    return 200
  }

  const register = async (
    username: string,
    password: string
  ): Promise<401 | 200> => {
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
