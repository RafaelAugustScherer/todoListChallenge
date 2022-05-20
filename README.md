# Desafio Técnico (todoListChallenge)
Desafio Técnico da empresa fictícia Ebytr, realizado durante uma Blitz de Carreira na Trybe. O desafio consiste em uma aplicação Full-stack seguindo o padrão MERN (MySQL, Express, React e Node.js) que é capaz de criar, editar e excluir tarefas de um usuário.
Infelizmente não consegui me aprofundar na parte de testes durante o tempo determinado, mas segui uma base sólida com Testes estáticos (ESLint) tanto para o front-end quanto para o back-end, além de utilizar o TypeScript no back-end que é uma linguagem fortemente tipada.

## Como rodar a aplicação localmente

### Pré-requisitos
- [Node.js LTS](https://nodejs.org/en/download/)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)

### Inicializando a aplicação
- Clone o repositório no seu computador utilizando `git clone` ou o [GitHub Desktop](https://desktop.github.com/)
- **Back-end**
  - Entre no subdiretório `/api`
  - Rode o comando `npm install`
  - Edite as variáveis de ambiente em `.env.example` de acordo:
    ```js
    MYSQL_HOST=localhost // IP do computador onde o MySQL Server está rodando
    MYSQL_PORT=3306 // Porta onde o MySQL Server está rodando (3306 é a padrão)
    MYSQL_DATABASE='todo-list' // Nome do banco de dados da aplicação
    MYSQL_USERNAME=root // Nome do usuário MySQL (root é o padrão)
    MYSQL_PASSWORD=PASSWORD_HERE // Troque 'PASSWORD_HERE' pela senha do usuário MySQL
    JWT_SECRET=JSONWEBTOKEN_SECRET_HERE // Troque 'JSONWEBTOKEN_SECRET_HERE' por uma senha forte (qualquer string é válida)
    PASSWORD_SALT=USE_GEN_SALT_COMMAND // Rode o comando `npm run db:salt:generate` e use o retorno desse comando
    ``` 
  - Renomeie o arquivo `.env.example` para `.env`
  - Inicialize o back-end com o comando `npm run dev`
- **Front-end**
  - Entre no subdiretório `/client`
  - Rode o comando `npm install`
  - Inicialize o front-end com o comando `npm start`

### Features a serem implementadas
- Testes de integração no Back-end
- Integração com Docker
- Fluxo Deploy CI/CD Heroku "Containerizado"
