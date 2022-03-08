<div align="center">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--9vbm1TI7--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/indepth-dev/image/fetch/w_1000%2Cf_auto/https://admin.indepth.dev/content/images/2020/03/externalImport.png" width="600px" />
    <h1><b>Complete Module Federation Boilerplate</b></h1><h2>Cypress, jest, testing library, MUI 5, styled-components, Husky, Zustand and others.</h2>
</div>

<br/>

# IMPORTANT!

just use `app1` as a template. `app2` is in this repository for presentation purposes only. The Boilerplate and all its respective settings are only inside `app1`.

<br/>

## What is Module Federation?

It is basically a JavaScript architecture. It allows a JavaScript application to dynamically load code from another application (a different Webpack build).

##

## Getting Start

Run the following commands in your terminal

```sh
yarn
```

To start the development:

```sh
yarn start
```

some others commands

```sh
yarn build //production webpack build
yarn serve //deploy to local dist folder
yarn lint //eslint
yarn checkTs //typecheck
yarn test // unit tests
yarn cy:open // opens cypress
yarn cy:test // e2e tests
```

<br/>

# Important Informations

- For each exposed remote we need to create a new `.d.ts` file with the given references like following the example:

```
app1\src\app1.d.ts
```

- For now, you should avoid use different peer dependencies versions (react, react-dom ...)
- To use Global state management it is recommended to use zustang for ease of communication in the micro frontends framework. You can follow the example in:

```
app1\src\contexts\demoContext.tsx
```

## MUI Observations

- Global CSS are NOT shared inside the docs for example Roboto font from MUI
- Theme Provider will affect ONLY LOCAL APPLICATION. If you want to use the ThemeProvider
  to override elements CSS you need to use the HOC inside the component that are being exposed.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

# Important Files

| relative Path                          | Description                                                                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| app1\webpack.config.js                 | All entrypoint settings are within this file see the comments in the file for more information.                                |
| app1\.cypress                          | cypress folder where the e2e test and local installation settings are located.                                                 |
| app1\.husky                            | pre commit hooks                                                                                                               |
| app1\src\config\routes.tsx             | LOCAL route settings.                                                                                                          |
| app1\src\contexts\demoContext.tsx      | Zustang stores for context                                                                                                     |
| app1\src\routes                        | File where app2's local and remote routes are merged.documentation                                                             |
| app1\src\styles\theme\index.ts         | MUI style overwrite file                                                                                                       |
| app1\src\templates\CommonProviders.tsx | If you want to use the MUI style override you must use this context within the exposed component so that the style is applied. |

## Support material

https://github.com/module-federation/module-federation-examples

## Should I worry about exposing stores and traffic contexts between micro frontends?

First, Module Federation shares code, that's all. Not the state of the code, just the code. Think of it like NPM. Importing the mongodb module from NPM doesn't connect you to Mongo, you still have to run it.

There is no magic state sharing in Module Federation, to share state you have to use any of the traditional methods available to you in the web world (REST, Firebase, WebSockets, etc.) And doing that is entirely on you.

Second, Module Federation doesn't know anything about your code or how it's properly used. It shares code, that's it. If you import an Angular component into your React app and try and us it, it will blow up.

So, in the case of the state based security risk, it's not a problem because Module Federation isn't doing any state sharing. And Module Federation presents no more of a security risk than bundle splitting because it is just fancy bundle splitting.

As for the context question, if your React component require context you gotta give them context. Module Federation doesn't know anything about your code and isn't going to magically smooth over these requirements. It just shares code.

As for communication between MFEs, that's more of an architectural question. IMHO, you should share as little as you can between MFEs. Ideally just basic user identity and the JWT.
