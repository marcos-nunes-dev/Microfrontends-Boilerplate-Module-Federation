
<div align="center">
    <img src="#" width="300px" />
    <h1><b>Module Federation Boilerplate</b></h1>
</div>


# Info

<center> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center>


## Quer Contribuir com o projeto? :open_hands:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [Contribution.md](#####)

## Instalação :smiley_cat:

Primeiro tenha certeza que você tem instado o [Yarn](https://yarnpkg.com) instalado em seu computador.

Em seguida navegue até a pasta app1 e app2:

    yarn

Para instalar as dependências e em seguida (em cada uma das pastas):

    yarn start

## Reporte um bug :shit:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

## Contribuidores ✨

As pessoas que estão fazendo esse projeto existir!

<table>
  <tr>
    <td align="center">
        <a href="https://github.com/marcos-nunes-dev">
            <img src="https://avatars.githubusercontent.com/u/4360587?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Marcos Nunes</b></sub>
        </a>
        <br />
        <a href="https://github.com/GrowRoadmap/grow-app-front/commits?author=marcos-nunes-dev" title="Code">
            💻
        </a>
        <a href="#" title="Ideas, Planning, & Feedback">
            🤔
        </a>
        <a href="https://github.com/GrowRoadmap/grow-app-front/commits?author=marcos-nunes-dev" title="Documentation">
            📖
        </a>
        <a href="https://github.com/GrowRoadmap/grow-app-front/pulls?q=is%3Apr+reviewed-by%3marcos-nunes-dev" title="Reviewed Pull Requests">
            👀
        </a>
        <a href="https://github.com/GrowRoadmap/grow-app-front/issues?q=author%3marcos-nunes-dev" title="Bug reports">
            🐛
        </a>
    </td>   
    <td align="center">
        <a href="https://github.com/GustavoStraub">
            <img src="https://avatars.githubusercontent.com/u/49662792?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Gustavo Straub</b></sub>
        </a>
        <br />
        <a href="https://github.com/GrowRoadmap/grow-app-front/commits?author=GustavoStraub" title="Code">
            💻
        </a>
        <a href="#" title="Ideas, Planning, & Feedback">
            🤔
        </a>
        <a href="https://github.com/GrowRoadmap/grow-app-front/commits?author=GustavoStraub" title="Documentation">
            📖
        </a>
        <a href="https://github.com/GrowRoadmap/grow-app-front/pulls?q=is%3Apr+reviewed-by%3GustavoStraub" title="Reviewed Pull Requests">
            👀
        </a>
        <a href="https://github.com/GrowRoadmap/grow-app-front/issues?q=author%3GustavoStraub" title="Bug reports">
            🐛
        </a>
    </td>    
  </tr>
</table>

# Informações Importantes

- For each exposed element we need to create a new `.d.ts` file with the given references like following the example: 
```
# app1.d.ts
/// <reference  types="react" />

declare  module  "app1/routes" {
  const  routes:  any;
  export  default  routes;
}
 
declare  module  "app1/Navigation" {
  const  Navigation:  any;
  export  default  Navigation;
}

```
- For now, we should avoid change peer dependencies versions (react, react-dom ...)


# MUI Observations
-  Global CSS are NOT shared inside the docs for example Roboto font from MUI
- Theme Provider will affect ONLY LOCAL APPLICATION (we can create a lib for theme overwriting).

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
