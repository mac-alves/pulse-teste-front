import React, { createContext, useState, useContext, useEffect } from 'react'

import { Person } from '../interfaces'

interface PersonContextData {
  persons: Person[]
  setNewPerson: (person: Person) => Promise<200 | 401>
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

  const setNewPerson = async (person: Person): Promise<200 | 401> => {
    try {
      const persons = getStoragePersons()
      persons.unshift(person)
      setPersons(persons)
      localStorage.setItem('@PULSE:persons', JSON.stringify(persons))

      return 200
    } catch (error) {
      console.log(error)
    }

    return 401
  }

  return (
    <PersonContext.Provider
      value={{
        persons,
        setNewPerson
      }}
    >
      {children}
    </PersonContext.Provider>
  )
}

export function usePerson(): PersonContextData {
  return useContext(PersonContext)
}
