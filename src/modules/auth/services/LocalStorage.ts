import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

import { ContextUser, User, AuthService } from '../interfaces'

const KEY_CONTEXT_USER = '@PULSE:context-user'
const KEY_USERS = '@PULSE:users'

const LocalStorage: AuthService = {
  contextUser: async () => {
    const session = sessionStorage.getItem(KEY_CONTEXT_USER)
    if (session) {
      const user: ContextUser = JSON.parse(session)
      return user
    }

    const storage = localStorage.getItem(KEY_CONTEXT_USER)
    if (storage) {
      const user: ContextUser = JSON.parse(storage)
      return user
    }

    return null
  },

  singIn: async (
    username: string,
    password: string,
    remember: boolean
  ): Promise<401 | 404 | ContextUser> => {
    try {
      if (username && password) {
        const storage = localStorage.getItem(KEY_USERS)
        const listUsers: User[] = storage ? JSON.parse(storage) : []

        const user = listUsers.find(
          user =>
            bcrypt.compareSync(password, user.password) &&
            user.username === username
        )

        if (user) {
          const contextUser: ContextUser = {
            id: user.id,
            username: user.username
          }

          sessionStorage.setItem(KEY_CONTEXT_USER, JSON.stringify(contextUser))

          if (remember) {
            localStorage.setItem(KEY_CONTEXT_USER, JSON.stringify(contextUser))
          }

          return contextUser
        }

        return 404
      }

      return 401
    } catch (error) {
      console.log(error)
    }

    return 401
  },

  singOut: (): 200 => {
    localStorage.removeItem(KEY_CONTEXT_USER)
    sessionStorage.removeItem(KEY_CONTEXT_USER)

    return 200
  },

  register: async (username: string, password: string): Promise<401 | 200> => {
    try {
      if (username && password) {
        const storage = localStorage.getItem(KEY_USERS)
        const listUsers = storage ? JSON.parse(storage) : []
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser: User = {
          id: uuidv4(),
          username,
          password: hash
        }

        listUsers.push(newUser)
        localStorage.setItem(KEY_USERS, JSON.stringify(listUsers))
        return 200
      }

      return 401
    } catch (error) {
      console.log(error)
    }

    return 401
  }
}

export default LocalStorage
