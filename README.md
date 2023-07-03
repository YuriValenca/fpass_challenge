# fpass challenge

Projeto utilizado na parte prática da vaga de desenvolvimento front-end React Pleno ou Sênior

## Índice

- [Detalhes do projeto](#detalhes-do-projeto)
- [Requisitos mandatórios](#requisitos-mandatórios)
- [Instalando o projeto](#instalando-o-projeto)
- [Iniciando o projeto](#iniciando-o-projeto)
- [Commit Style Guide](#commit-style-guide)

## Detalhes do projeto

[(Voltar ao topo)](#índice)

O projeto baseou-se de acordo com o que foi explicado no repositório de apoio para o desafio, que pode ser encontrado [aqui](https://github.com/holding-fpass/challenge-frontend-fpass). O projeto foi desenvolvido utilizando React, Typescript e Styled Components, e foi hospedado no próprio Github, e pode ser acessado [aqui](https://yurivalenca.github.io/fpass_challenge), ele foi criado com a arquitetura de Single Page Application (SPA), mas aborda as três telas mandatórias do desafio.

## Requisitos mandatórios

[(Voltar ao topo)](#índice)

De acordo com o repositório de apoio, o que se espera do projeto é que:

Existam três telas na aplicação:

- [x] Uma pesquisa pelo nome ou parte do nome do herói.
- [x] Listagem do herói com sua thumbnail.
- [x] Página com informações sobre o herói selecionado (descrição).

E ainda:

- [x] Arquivo READ.md
- [x] Hospedagem no [Heroku](https://www.heroku.com/)

Utilização de:

- [x] Styled Components
- [x] React
- [x] Typescript

## Instalando o projeto

[(Voltar ao topo)](#índice)

Para instalar o projeto, basta clonar o repositório e executar o comando

```cmd
npm install
```

para instalar todas as dependências do projeto. Este comando instalará o React (framework do projeto), assim como algumas bibliotecas de apoio que utilizei para o desenvolvimento do projeto.

## Iniciando o projeto

[(Voltar ao topo)](#índice)

Para iniciar o projeto, basta executar o comando

```cmd
npm start
```

e acessar o endereço `http://localhost:3000/` no seu navegador. Ou apertar `Ctrl + click` no endereço que aparecerá no terminal após a execução do comando.

## Commit Style Guide

[(Voltar ao topo)](#índice)

Os commits dessa aplicação seguiram o padrão utilizado [neste guia](https://gist.github.com/mguilhermetavares/4256fe4864b5c48282d1f9b6cbaf0dde), e segue algumas regras como:

- O título do commit deve ser escrito em inglês;
- O título do commit deve ser escrito no imperativo;
- Todos os commits devem ser "SignOff" (commit -sm);
- O título do commit deve ser escrito em no máximo 72 caracteres;
- O commit deve detalhar o que foi feito, e não o que será feito;
- Ele deve, idealmente, ser iniciado por um emoji, onde a tabela a seguir (escrita em inglês) declara seu significado:

Emoji | Code | Commit Type
------------ | ------------- | -------------
:sparkles: | `:sparkles:` | New feature
:tada: | `:tada:` | Initial commit
:nail_care: | `:nail_care:` | Improve UI/UX
:art: | `:art:` | Improve the structure/code format
:racehorse: | `:racehorse:` | Improve performance
:memo: | `:memo:` | Write documentation
:bug: | `:bug:` | Fix bugs
:fire: | `:fire:` | Fix bugs in production (hotfix)
:green_heart: | `:green_heart:` | Fix a CI build
:white_check_mark: | `:white_check_mark:` | Add tests
:lock: | `:lock:` | Improve security
:arrow_up: | `:arrow_up:` | Update dependencies
:arrow_down: | `:arrow_down:` | Downgrade dependencies
:poop: | `:poop:` | Deprecated
:construction: | `:construction:` | Under construction
:rocket: | `:rocket:` | New version
:see_no_evil: | `:see_no_evil:` | Work around (pt-br: "Gambiarra")
:whale: | `:whale:`  | Docker
:ok_hand: |`:ok_hand:`   | Code review changes
:hammer: | `:hammer:`    | Refactor code
:boom: | `:boom:` | Conflict merge
:scissors: | `:scissors:` | Legacy code removal
:milky_way: | `:milky_way:` | Add images/icons
Other                      | [Be creative](http://www.emoji-cheat-sheet.com/)

### Exemplo

```bash
git commit -sm ":memo: Add contribution instructions"
-m "The CONTRIBUTING.md file was created with instructions on how to make a good commit"
```
