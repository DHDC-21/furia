# Desafio #1: Experiência Conversacional

## Índice

- [Objetivo](#objetivo)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Diagramas](#diagramas)
- [Comandos do Chatbot](#comandos-do-chatbot)
- [Aprendizados](#aprendizados)
- [Licença](#licença)

## [Objetivo](#índice)

> Descreva de forma breve qual era o desafio proposto e o que você desenvolveu.  
> Por exemplo: "Criar um chatbot funcional com interface web responsiva e integração com comandos pré-definidos."

## [Tecnologias Utilizadas](#índice)


- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Node.js
- Express
- EJS

## [Estrutura do Projeto](#índice)

O referente projeto esta organizado seguindo os moldes do padrão MVC:

```
.
├── nodemon.json
├── package.json 
├── package-lock.json
├── /public
│   # Pasta com os arquivos estático como css, javascript e images
│
├── README.md
├── server.js
└── /src
    ├── app.js
    ├── /controllers
    │   # Pasta com os controladores das rotas
    │
    ├── /routes
    │   # Pasta com as configurações das rotas
    │
    └── /views
        │   #Pasta com os arquivos html/ejs do projeto
        │
        ├── /chat
        │   #Pasta com os arquivos do webchat/chatbot
        │
        ├── /components
        │   # Pastas com os componentes da página
        │
        ├── index.ejs
        │   # Arquivo da pagina principal
        │
        ├── layout.html
        │   # Arquivo de layout da página principal
        │
        └── /sections
            # Seções da landing page
```

## [Funcionalidades](#índice)

> Liste as principais funcionalidades implementadas:

- Chatbot com respostas interativas
- Interface responsiva com Bootstrap
- Comandos específicos sobre o time FURIA
- Minimizar/expandir chatbot
- Histórico de mensagens (até recarregar a página)
- Navegação pelas seções da landing page

## [Diagramas](#índice)

> *Em breve...*

## [Comandos do Chatbot](#índice)

> Abaixo estão os principais comandos do chatbot:

```plaintext
help         → Mostra todos os comandos disponíveis
furia        → Informações sobre a equipe de CS:GO da FURIA
jogadores    → Lista dos jogadores do time de CS:GO da FURIA
partida      → Informa sobre a próxima partida
redes        → Compartilha os links para redes sociais oficiais
```

## [Aprendizados](#índice)

> *Em breve...*

## [Licença](#índice)

> *Em breve...*