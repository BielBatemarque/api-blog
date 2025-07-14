# 📝 Blog API

Esta é uma API de blog desenvolvida com [NestJS](https://nestjs.com/), escrita em TypeScript, utilizando [PostgreSQL](https://www.postgresql.org/) como banco de dados e orquestrada com [Docker Compose](https://docs.docker.com/compose/).

## 🚀 Tecnologias Utilizadas

- ⚙️ [NestJS](https://nestjs.com/)
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- 🐘 [PostgreSQL](https://www.postgresql.org/)
- 🐳 [Docker](https://www.docker.com/)
- 📦 [Docker Compose](https://docs.docker.com/compose/)
- 🛠️ [TypeORM](https://typeorm.io/)

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) se quiser rodar a aplicação sem Docker

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
  git clone https://github.com/BielBatemarque/api-blog.git
  cd api-blog
```

### 2. Copie as variáveis de ambiente

```bash
  cp .env.example .env
```

### 3. Instale as dependências do projeto

```bash
  npm i
```

### 4. Buildando e iniciando banco de dados

```bash
  docker-compose up --build
```

### 5. Iniciando a aplicação (api)

```bash
  npm run start:dev
```

## 🌐 Acesse a aplicação

🔹 A api estará disponível em:

> http://localhost:3002/
