import { Person, PersonService } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

const LocalStorage: PersonService = {
  get: async (id: string): Promise<Person | null> => {
    try {
      const persons = await LocalStorage.getAll()
      const person = persons.find(item => item.id === id)

      return person || null
    } catch (error) {
      console.log(error)
    }

    return null
  },

  getAll: async (): Promise<Person[] | []> => {
    const storage = localStorage.getItem('@PULSE:persons')

    if (storage) {
      const persons: Person[] = JSON.parse(storage)
      return persons
    }

    return []
  },

  create: async (person: Person): Promise<200 | 401> => {
    try {
      const persons: Person[] = await LocalStorage.getAll()

      persons.unshift({
        ...person,
        id: uuidv4()
      })

      localStorage.setItem('@PULSE:persons', JSON.stringify(persons))

      return 200
    } catch (error) {
      console.log(error)
    }

    return 401
  },

  update: async (id: string, person: Person): Promise<200 | 401> => {
    try {
      let persons: Person[] = await LocalStorage.getAll()
      persons = persons.filter(item => item.id !== id)

      persons.unshift({
        ...person,
        id
      })

      localStorage.setItem('@PULSE:persons', JSON.stringify(persons))

      return 200
    } catch (error) {
      console.log(error)
    }

    return 401
  },

  delete: async (id: string): Promise<200 | 401> => {
    try {
      let persons: Person[] = await LocalStorage.getAll()
      persons = persons.filter(item => item.id !== id)

      localStorage.setItem('@PULSE:persons', JSON.stringify(persons))

      return 200
    } catch (error) {
      console.log(error)
    }

    return 401
  },

  save: async (id: string, person: Person): Promise<200 | 401> => {
    if (id) {
      return LocalStorage.update(id, person)
    }

    return LocalStorage.create(person)
  }
}

export default LocalStorage
