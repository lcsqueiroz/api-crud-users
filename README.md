# api-crud-users

Projeto de estudo de uma API REST com Node.js, Express e MongoDB. O objetivo é implementar uma aplicação CRUD de usuários.

---

## Inicialização

### Pré-requisitos

- Node.js
- MongoDB (local ou Atlas)

### Instalação

```bash
git clone https://github.com/lcsqueiroz/api-crud-users.git
cd api-crud-users
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=mongodb://localhost:27017/api-crud-users
```

### Rodando o projeto

```bash
node index.js
```

O servidor sobe na porta `3000`.

---

## Estrutura de pastas

```
api-crud-users/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── index.js
│   └── services/
│       └── userService.js
├── .env
├── index.js
└── package.json
```

### O que cada pasta faz

| Pasta          | Responsabilidade                                               |
| -------------- | -------------------------------------------------------------- |
| `config/`      | Configuração e conexão com o banco de dados                    |
| `models/`      | Schema do Mongoose — define a estrutura dos dados no MongoDB   |
| `routes/`      | Define os endpoints e mapeia para os controllers               |
| `controllers/` | Recebe a requisição HTTP, chama o service e devolve a resposta |
| `services/`    | Contém a lógica de negócio e as regras de validação            |

---

## Fluxo de requisição e resposta

```
Cliente (Postman, frontend, etc.)
        |
        | HTTP Request
        v
┌─────────────┐
│   Routes    │  →  Define o verbo HTTP e o endpoint
│  index.js   │     ex: POST /users
└──────┬──────┘
       |
       v
┌──────────────────┐
│   Controller     │  →  Extrai dados do req.body / req.params
│ userController   │     Chama o service correspondente
└────────┬─────────┘
         |
         v
┌──────────────────┐
│    Service       │  →  Aplica validações e regras de negócio
│  userService     │     Ex: campo obrigatório, duplicidade
└────────┬─────────┘
         |
         v
┌──────────────────┐
│     Model        │  →  Executa a operação no banco
│    user.js       │     Ex: User.create(), User.find()
└────────┬─────────┘
         |
         v
┌──────────────────┐
│    MongoDB       │
└────────┬─────────┘
         |
         | Resultado
         v
┌──────────────────┐
│    Service       │  →  Retorna os dados ou lança erro
└────────┬─────────┘
         |
         v
┌──────────────────┐
│   Controller     │  →  Monta e envia a resposta HTTP
│                  │     ex: res.status(201).json(result)
└────────┬─────────┘
         |
         | HTTP Response
         v
Cliente
```

---

## Endpoints

Em desenvolvimento.
