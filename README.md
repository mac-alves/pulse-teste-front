<h1 align="center">
  <img alt="Auth-RMI" src="https://res.cloudinary.com/dpf7e7tpc/image/upload/v1612200369/projetos/teste-front-pulse/pulse-teste-front_z0rdpf.gif" width="800" />
</h1>

<h1 align="center">
  Teste Front-End @Pulse
</h1>
<h3 align="center">Sistema Desenvolvido, mediante requisitos, para o processo seletivos para a vaga de Front-End da empresa @Pulse.</h3>
<br/>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mac-alves/pulse-teste-front">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mac-alves/pulse-teste-front">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/mac-alves/pulse-teste-front">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mac-alves/pulse-teste-front">
</p>

<p align="center">
  <a href="#rocket-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bangbang-dependencies">Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bell-informations">Informações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_with_curl-diagrams">Diagramas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#white_check_mark-requirements">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-useful-links">Links úteis</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Autor</a>
</p>

## :rocket: &nbsp;&nbsp;&nbsp; Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:
-  [ReactJs](https://reactjs.org/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Unform](https://unform.dev/)
-  [YUP](https://github.com/jquense/yup)
-  [React-Router-Dom](https://reactrouter.com/web/guides/quick-start)
-  [styled-components](https://www.styled-components.com/)
-  [React-UUID](https://www.npmjs.com/package/react-uuid)
-  [React-Select](https://react-select.com/home)
-  [React-Icons](https://react-icons.github.io/react-icons/)
-  [Axios](https://github.com/axios/axios)
-  [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
-  [Eslint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage)
-  [VS Code][vc] with [EditorConfig][vceditconfig]

## :bangbang: &nbsp;&nbsp;&nbsp; Dependencies
- [Git](https://git-scm.com),
- [Node.js v12.16.1][nodejs] + [YARN v1.22.4][yarn]

## :information_source: &nbsp;&nbsp;&nbsp; Como usar

```bash
# Clone o repositório
$ git clone https://github.com/mac-alves/pulse-teste-front

# Acesse a pasta do projeto
$ cd pulse-teste-front/

# Instala as dependências
$ yarn

# Execute o projeto
$ yarn start
```

## :bell: &nbsp;&nbsp;&nbsp; Informações
- Foi criado um layout simples do sistema através da plataforma Figma tendo como base os requisitos propostos. O link consta na sessão `Links Úteis`.
- O layout foi desenvolvido de forma a ser responsivo, adaptando-se em telas tanto de computadores como smartphones.
- Foi utilizado para o gerenciamento de estado da aplicação o `Context API`, padrão do react, através da criação de `hooks` dedicados.
- Os componentes foram desenvolvidos de forma a aplicar o máximo de conhecimentos que possuo da plataforma e das tecnologias envolvidas. Pode-se verificar no código:
  - A criação de `hooks` dedicados;
  - Utilização de `hooks` próprios do react, tais como: `useState`, `useEffect`, `useRef`, `useCallback`;
  - Gerência de estado;
  - Comunicação entre componentes: `pai-filho`, `filho-pai`;
  - Gerência de rotas publicas e privadas;
  - Persistência de dados com localStorage;
  - Consumo de api REST com axios;
  - Entre outros;
- Pelo fato de a aplicação utilizar a API do localStorage para persistência de dados, houve a necessidade de implementar requisições a API externas como forma de demonstração de conhecimento, logo foi utilizada a consulta a API pública do IBGE para montar o combo de estados e cidade no cadastro de pessoas.

## :page_with_curl: &nbsp;&nbsp;&nbsp; Diagramas
- Mediante os requisitos descritos no documento para a elaboração do sistema foi desenvolvido o seguinte fluxograma de funcionamento do sistema elaborado.

#### Início
- O sistema inicia quando o usuário acessa o sistema pelo navegador. A aplicação por sua vez busca no sistema de armazenamento se ja existe dado de login do usuário. Caso haja, o usuário é redirecionado para o modulo `App`, caso contrário, para o modulo `Auth`.

<img alt="Auth-RMI" src="https://res.cloudinary.com/dpf7e7tpc/image/upload/v1612148268/projetos/teste-front-pulse/inicio_zyp74c.png" />

#### Módulo Auth
  - Ao iniciar o módulo `Auth`, o usuário tem a opção de acessar as duas telas: `Login` e `Criar conta`.
  - Caso, na tela de `Criar conta`, o usuário informe os dados para cadastro e esses dados estiverem inválidos, o campo que possui o dado inválido ficará com as bordas vermelhas e a mensagem de validação aparecerá também em vermelho.
  - Caso os dados estejam certo, o novo registo é inserido no banco de dados (localStorage), uma mensagem de sucesso aparecerá e apos fecha-la, este será redirecionado para a tela `Login`.
  - Caso, na tela `Login`, o usuário informe os dados para acessar o sistema e estes dados estejam errados ou não existam correspondência no banco uma mensagem de erro aparece informando o ocorrido.
  - Caso os dados estejam certos, é verificado se a opção `Lembrar de mim.` foi selecionada. Caso tenha sido selecionada, os dados de registo do usuário será salvo tanto no localStorage quanto no sessionStorage, caso contrário, o dado será salvo apenas no sessionStorage.
  - Após a inserção, o usuário é redirecionado para a tela `Bem-Vindo` iniciando o módulo `App`.

<img alt="Auth-RMI" src="https://res.cloudinary.com/dpf7e7tpc/image/upload/v1612148268/projetos/teste-front-pulse/modulo_auth_z5adjf.png" />

#### Módulo App
- Ao iniciar o modulo `App`, a lista de pessoas salvas no banco (localStorage) é requisitada e os registros retornados são utilizados para montar a tabela de `Pessoas Cadastradas`.
- A tela `Bem-Vindo`, por usa vez, possibilita o usuário realizar as seguintes operações:
  - "Deslogar" (Botão `Sair` no canto superior esquerdo);
  - "Cadastrar pessoa" (Botão azul com o símbolo  `+` acima da tabela);
  - "Editar pessoa" (Botão com o símbolo de caneta nos registros da tabela);
  - "Excluir pessoa" (Botão com símbolo de lixeira nos registros da tabela)
- Caso escolha a opção "Deslogar", os dados de registro do de usuário logado será limpo tanto do localStorage quanto do sessionStorage.
- Caso escolha a opção de "Cadastrar pessoa", o usuário será redirecionado para a tela de `Cadastro` onde aparecerá os campos correspondentes para serem informados: nome, idade, estado, cidade, cargo e foto.
- Caso os dados inseridos estejam incorretos, os campos a qual possui o erro ficará com a borda vermelha e a mensagem de validação aparecerá também em vermelho.
- Caso os dados estejam certos, o novo registro será inserido no banco e uma mensagem de sucesso aparecerá em tela. Após fechar a mensagem, o usuário será redirecionado para a tela `Bem-Vindo` a qual possuirá o registro que acabou de ser salvo no topo dos registros disponíveis na tabela.
- Caso escolha a opção "Editar pessoa", o usuário será redirecionado para a tela de `Edição` onde os dados do usuário selecionado estarão nos campos do formulário pronto para alteração.
- Caso, após alterar os dados, estes estiverem incorretos, os campos a qual possui o erro ficará com a borda vermelha e a mensagem de validação aparecerá também em vermelho.
- Caso os dados estejam certos, o registro será atualizado no banco e uma mensagem de sucesso aparecerá em tela. Após fechar a mensagem, o usuário será redirecionado para a tela `Bem-Vindo` a qual possuirá o registro que acabou de ser salvo no topo dos registros disponíveis na tabela.
- Caso escolha a opção de "Excluir pessoa", uma mensagem de confirmação aparecerá solicitando se deseja prosseguir, caso escolha a opção "Sim" o registro será apagado do banco, a mensagem de confirmação irá fechar e a tabela de pessoas cadastradas será atualizada.

<img alt="Auth-RMI" src="https://res.cloudinary.com/dpf7e7tpc/image/upload/v1612148268/projetos/teste-front-pulse/modulo_app_umfg3k.png" />

## 	:white_check_mark: &nbsp;&nbsp;&nbsp; Requisitos
- Abaixo segue a lista de requisitos propostos para a elaboração do projeto. O checkbox marcado significa que o requisito foi cumprido.

- [x] - 1. O usuário não logado, deve poder entrar na tela de login para digitar suas
   credenciais;

- [x] - 2. Se o usuário, na tela de login, tentar autenticar com um dado que não exista
   no localstorage, deverá ver os inputs com a borda vermelha e o texto
   correspondente ao input com a mensagem de erro;
   - `Requisito implementado no cadastro de usuário e no cadastro de pessoas, pois não é valido identificar o campo com erro ao realizar uma operação como logar no sistema. Ao tentar realizar o login e ocorrer um erro uma mensagem de erro em um popup indica a falha.`

- [x] - 3. Se não existir dados, o usuário deve ver um botão de "criar conta" conforme
   layout;

- [x] - 4. Ao clicar em criar conta, o usuário deve ser redirecionado para a página de
   criação de conta;

- [x] - 5. Ao finalizar o cadastro, o usuário deve retornar para a página de login
   novamente;

- [x] - 6. O usuário logado, ao entrar na home, deve poder ver a lista de pessoas
   cadastradas, uma opção de deslogar e o ícone do Mateus;

- [x] - 7. Cada card da lista, deve ter as opções de excluir e editar conforme layout;

- [x] - 8. A listagem de usuário deve possuir um scroll;
  - `Requisito implementado com paginação na tabela de listagem de pessoas.`

- [x] - 9. Na tela de home, ao clicar em um card de uma pessoa, redirecionar para a
   página de edição, juntamente com os dados;

- [x] - 10. A tela deve de edição deve iniciar preenchida com os dados do usuário
   selecionados;

- [x] - 11. A edição deve refletir de imediato no storage da aplicação;

- [x] - 12. Ao clicar em salvar, deve redirecionar para a tela de home novamente e
   trazer a lista de usuários atualizada;

- [x] - 13. Ao clicar no botão de criar, deve redirecionar para a página de criação de
   usuário;

- [x] - 14. O usuário deve ver a opção de inserir imagem;

- [x] - 15. O usuário deve preencher os dados nos inputs;

- [x] - 16. Ao clicar em salvar, redirecionar para a home;

- [x] - 17. Ao clicar em deslogar, o usuário deve retornar para a tela de login;

- [x] - 18. A aplicação deve resetar o storage.

## :link: &nbsp;&nbsp;&nbsp; Links Úteis
 - Layout desenvolvido para este projeto na plataforma Figma: [Layout](https://www.figma.com/file/KrxVquQvClElMagRTWHM2a/pulse-teste-front?node-id=0%3A1)

## :memo: &nbsp;&nbsp;&nbsp; Licença
Este projeto está sob a licença do MIT. Veja [LICENSE](https://github.com/mac-alves/pulse-teste-front/blob/main/LICENSE) para maiores informações.

---

## Autor

:anchor: **Mauricio Alves** - *Github* - [mac-alves](https://github.com/mac-alves)


[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
