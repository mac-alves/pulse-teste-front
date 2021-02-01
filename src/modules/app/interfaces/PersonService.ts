import Person from './Person'

export default interface PersonService {
  /**
   * Obtém o registro de uma pessoa
   *
   * @param id: string
   */
  get: (id: string) => Promise<Person | null>

  /**
   * Obtém a lista de todos as pessoas cadastradas
   */
  getAll: () => Promise<Person[] | []>

  /**
   * Cria o registro de uma pessoa
   *
   * @param person: Person
   */
  create: (person: Person) => Promise<200 | 401>

  /**
   * Atualiza o registro de uma pessoa
   *
   * @param id: string
   * @param person: Person
   */
  update: (id: string, person: Person) => Promise<200 | 401>

  /**
   * Exclui o registro de uma pessoa
   *
   * @param id: string
   */
  delete: (id: string) => Promise<200 | 401>

  /**
   * Interface de acesso integrado a update e create
   *
   * @param id: string
   * @param person: Person
   */
  save: (id: string, person: Person) => Promise<200 | 401>
}
