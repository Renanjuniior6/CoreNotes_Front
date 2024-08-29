# 🗂 Sobre o projeto CoreNotes

Projeto fullstack que consiste em um To-do list funcional e responsivo para telas menores

## 📚 Índices
- [Funcionalidades](#-funcionalidades)
- [Layout](#-layout)
- [Como rodar o projeto](#-como-rodar-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Observações](#-observações)
- [Pastas do projeto](#-observações)
- [Próximos Passos](#-próximos-passos)

## 🔧 Funcionalidades
- O usuário pode criar novas notas quando quiser e pode escolher favoritar ou não 
  - ➡ Basta inserir o título e o conteúdo desejado para a criação da nova nota
- O usuário pode editar suas notas como desejar  
  - ➡ Pode ser alterado os campos de título, conteúdo, cor, favorito e deletar a nota
- O usuário pode pesquisar pelas suas notas na barra de pesquisa  
  - ➡ Basta inserir o nome correspondente e apertar no ícone de lupa para a busca

 ## 💻 Layout 
 
![Captura de tela_29-8-2024_145724_localhost](https://github.com/user-attachments/assets/d3a30645-9d06-46da-bb5a-fb73081e65a1)

## ❓ Como rodar o projeto

### Setup ambiente
- [Node LTS](https://nodejs.org/pt)
- [NPM ^9.x](https://docs.npmjs.com/cli/v10/commands/npm)
  
```bash
# Clone este respositório
$ git clone [URL]

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run dev

# A aplicação será iniciada na porta 5173, acesse pelo navegador: http://localhost:5173
```

## 🌐 Tecnologias Utilizadas
- [X] [React](https://pt-br.legacy.reactjs.org/)
- [X] [Vite](https://vitejs.dev/)
- [X] [Typescript](https://www.typescriptlang.org/)
- [X] [Styled-Components](https://styled-components.com/)
- [X] [React-Hook-Form](https://react-hook-form.com/)
- [X] [React-Toastify](https://www.npmjs.com/package/react-toastify)
- [X] [Axios](https://axios-http.com/docs/intro)
- [X] [Zod](https://zod.dev/)

## ❗ Observações 
- Este projeto para rodar corretamente na sua máquina será necessário fazer o clone e rodar primeiro o repositório da API
- [Repositório da API](https://github.com/Renanjuniior6/CoreNotes_API)
- O projeto está usando as configurações do **Eslint + Prettier** para padronização do código

## 📁 Pastas do projeto
-  `./src/screen` está localizada a página principal da aplicação
-  `./src/services` está a comunicação com a API para trazer os dados
-  `./src/styles` estão os estilos globais e os temas do projeto
-  `./src/validators` estão os "schemas" e "types" para tipagem da aplicação
-  `./src/hooks` estão os arquivos de controle do estado global com Context API
-  `./src/components` estão os componentes do projeto
-  `./App.tsx` está localizada o conteúdo a ser renderizado em toda a aplicação

## ▶ Próximos passos
- Hospedagem

