feat: utilizado quando se adiciona alguma nova funcionalidade do zero ao código/serviço/projeto.

fix: usado quando existem erros de código que estão causando bugs.

refactor: utilizado na realização de uma refatoração que não causará impacto direto no código ou em qualquer lógica/regra de negócio.

style: utilizado quando são realizadas mudanças no estilo e formatação do código que não irão impactar em nenhuma lógica do código.

doc: ideal para quando se adiciona ou modifica alguma documentação no código ou do repositório em questão.

env: utilizado quando se modifica ou adiciona algum arquivo de CI/CD.

build: usado quando se realiza alguma modificação em arquivos de build e dependências.

# telas:
    não autenticadas
      login
      cadastro
    autenticadas
      home
          - lista de pessoas cadastradas
              botão de editar e excluir
          - botão de deslogar
          - icone do matheus
      cadastro/edição de pessoas:

[x] - 1. O usuário não logado, deve poder entrar na tela de login para digitar suas
   credenciais;

[x] - 2. Se o usuário, na tela de login, tentar autenticar com um dado que não exista
   no localstorage, deverá ver os inputs com a borda vermelha e o texto
   correspondente ao input com a mensagem de erro;

[x] - 3. Se não existir dados, o usuário deve ver um botão de "criar conta" conforme
   layout;

[x] - 4. Ao clicar em criar conta, o usuário deve ser redirecionado para a página de
   criação de conta;

[x] - 5. Ao finalizar o cadastro, o usuário deve retornar para a página de login
   novamente;

[x] - 6. O usuário logado, ao entrar na home, deve poder ver a lista de pessoas
   cadastradas, uma opção de deslogar e o ícone do Mateus;

[x] - 7. Cada card da lista, deve ter as opções de excluir e editar conforme layout;

[x] - 8. A listagem de usuário deve possuir um scroll (FEITO A PAGINAÇÃO);

[x] - 9. Na tela de home, ao clicar em um card de uma pessoa, redirecionar para a
   página de edição, juntamente com os dados;

[x] - 10. A tela deve de edição deve iniciar preenchida com os dados do usuário
   selecionados;

[x] - 11. A edição deve refletir de imediato no storage da aplicação;

[x] - 12. Ao clicar em salvar, deve redirecionar para a tela de home novamente e
   trazer a lista de usuários atualizada;

[x] - 13. Ao clicar no botão de criar, deve redirecionar para a página de criação de
   usuário;

[x] - 14. O usuário deve ver a opção de inserir imagem;

[x] - 15. O usuário deve preencher os dados nos inputs;

[x] - 16. Ao clicar em salvar, redirecionar para a home;

[x] - 17. Ao clicar em deslogar, o usuário deve retornar para a tela de login;

[x] - 18. A aplicação deve resetar o storage.




# bugs
  - retirar o bug de alteração de pessoa
    - caso tenha uma foto e altere qualquer outro parametro a foto se perde

# falta
  - fazer o readme
  - criar a pagina de 404
  - melhorar algumas partes
