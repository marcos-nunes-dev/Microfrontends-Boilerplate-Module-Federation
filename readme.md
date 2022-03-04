# NEO-UI MFEs - Module Federation

Spike reference docs - https://ofx.atlassian.net/l/c/em4Y0ADA


## Libs for now 
- MUI
- React
- React-router
- Styled-Components

# How to run the project

- navigate to the folder `cd app1` and on another terminal `cd app2`.
- to install de deps run `yarn` on both projects
- use `yarn start` on both to start the communication

**it is necessary that both projects run on their respective ports :3001 and :3002**




# Project Arquetype

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


### some content for possible future problems
https://medium.com/trendyol-tech/micro-frontends-architecture-with-webpack-module-federation-part-2-40a23fa53e26