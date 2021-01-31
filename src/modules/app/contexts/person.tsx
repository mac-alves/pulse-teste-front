import React, { createContext, useState, useContext, useEffect } from 'react'

import { Person } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

interface PersonContextData {
  persons: Person[]
  savePerson: (id: string, person: Person) => Promise<200 | 401>
  getPerson: (id: string) => Promise<Person | null>
  deletePerson: (id: string) => Promise<200 | 401>
}

const PersonContext = createContext<PersonContextData>({} as PersonContextData)

export const PersonProvider: React.FC = ({ children }) => {
  const [persons, setPersons] = useState<Person[]>([])

  const getStoragePersons = (): Person[] => {
    const storage = localStorage.getItem('@PULSE:persons')

    if (storage) {
      const persons: Person[] = JSON.parse(storage)
      return persons
    }

    return []
  }

  useEffect(() => {
    const persons = getStoragePersons()

    if (persons.length > 0) {
      setPersons(persons)
    }
  }, [])

  const createPerson = async (person: Person): Promise<200 | 401> => {
    try {
      const persons = getStoragePersons()

      persons.unshift({
        ...person,
        id: uuidv4()
      })

      setPersons(persons)
      localStorage.setItem('@PULSE:persons', JSON.stringify(persons))

      return 200
    } catch (error) {
      console.log(error)
    }

    return 401
  }

  const deletePerson = async (id: string): Promise<200 | 401> => {
    try {
      let persons = getStoragePersons()

      persons = persons.filter(item => item.id !== id)

      setPersons(persons)
      localStorage.setItem('@PULSE:persons', JSON.stringify(persons))

      return 200
    } catch (error) {
      console.log(error)
    }

    return 401
  }

  const updatePerson = async (
    id: string,
    person: Person
  ): Promise<200 | 401> => {
    try {
      let persons = getStoragePersons()
      persons = persons.filter(item => item.id !== id)

      persons.unshift({
        ...person,
        id
      })

      setPersons(persons)
      localStorage.setItem('@PULSE:persons', JSON.stringify(persons))

      return 200
    } catch (error) {
      console.log(error)
    }

    return 401
  }

  const savePerson = async (id: string, person: Person): Promise<200 | 401> => {
    if (id) {
      return updatePerson(id, person)
    }

    return createPerson(person)
  }

  const getPerson = async (id: string): Promise<Person | null> => {
    try {
      const persons = getStoragePersons()

      const person = persons.find(item => item.id === id)

      return person || null
    } catch (error) {
      console.log(error)
    }

    return null
  }

  return (
    <PersonContext.Provider
      value={{
        persons,
        savePerson,
        getPerson,
        deletePerson
      }}
    >
      {children}
    </PersonContext.Provider>
  )
}

export function usePerson(): PersonContextData {
  return useContext(PersonContext)
}
