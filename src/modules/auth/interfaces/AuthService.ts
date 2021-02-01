import ContextUser from './ContextUser'

export default interface AuthService {
  /**
   * Obtém o registro do usuário logado
   *
   * @returns Usuário logado
   */
  contextUser: () => Promise<ContextUser | null>

  /**
   * Responsável por logar usuário no sistema
   *
   * @param username: string,
   * @param password: string,
   * @param remember: boolean,
   */
  singIn: (
    username: string,
    password: string,
    remember: boolean
  ) => Promise<401 | 404 | ContextUser>

  /**
   * Responsável por deslogar o usuário do sistema
   *
   * @returns 200
   */
  singOut: () => 200

  /**
   * Responsável por registrar um novo usuário
   *
   * @param username: string,
   * @param password: string,
   */
  register: (username: string, password: string) => Promise<401 | 200>
}
