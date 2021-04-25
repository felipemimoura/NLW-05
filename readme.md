<h1 align="center">
  CHAT 
</h1>

<h4 align="center"> 
	🚧  Chat ♻️ Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

O projeto consiste em uma aplicação backend onde seria montado uma chat para de suporte onde o usuário iria entrar em contato com o atendente. E esse atendente teria todos os usuários possuiria uma lista com todos os usuário que ainda necessitam de atendimento

Projeto desenvolvido durante a **NLW - Next Level Week 05** oferecida pela [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/).
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

---

## ⚙️ Funcionalidades

- [x] Administrador

  - [x] Ligar e desligar o chat;
  - [x] Verificar quais usuários ainda não foram atendidos;
  - [x] Ao entrar em atendimento o usuário sai da lista de pendentes.
  - [x] Recebe e envia mensagens em tempo real.


- [x] Cliente
  - [x] Entrar no chat
  - [x] Recebe e envia mensagens em tempo real.

---

## 🚀 Como executar o projeto

Este projeto é focado no backend

1. Backend (Servidor)


💡 Existe uma interface para testes

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/felipemimoura/NLW-05.git

# Acesse a pasta do projeto no terminal/cmd
$ cd NLW-05

# Instale as dependências
$ npm install

# Monta o banco de dados
$ npm typeorm migration:run
ou
$ yarn typeorm migration:run   

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
$ yarn dev

# O servidor inciará na porta:3001 - acesse http://localhost:3001
# cliente: http://localhost:3001/pages/client
# administrador http://localhost:3001/pages/admin

```
---

## 🛠 Tecnologias

**Server** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com/)**
- **[TypeORM](https://typeorm.io/#/)**
- **[SQLite](https://github.com/mapbox/node-sqlite3)**
- **[socket.io](https://www.npmjs.com/package/socket.io)**
- **[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)**
- **[UUID](https://www.npmjs.com/package/uuid)**


> Veja o arquivo [package.json](https://github.com/felipemimoura/NLW-05/blob/main/package.json)


---

## 🦸 Autor


 <img style="border-radius: 50%;" src="https://github.com/felipemimoura.png" width="100px;" alt=""/>
 <br />
 <sub><b>Felipe Moura</b></sub>
 <br />

 [![Linkedin Badge](https://img.shields.io/badge/-FelipeMoura-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipemmoura//)](https://www.linkedin.com/in/felipemmoura/)
[![Gmail Badge](https://img.shields.io/badge/-felipemimoura@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:felipemimoura@gmail.com)](mailto:felipemimoura@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Felipe Moura 👋🏽 [Entre em contato!](https://www.linkedin.com/in/felipemmoura/)

---

