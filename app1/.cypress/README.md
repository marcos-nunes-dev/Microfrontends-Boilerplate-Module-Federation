# Cypress Tests

All Cypress-related files exist in `.cypress` folder. It's done this way to avoid installing `cypress` together with the native app dependencies every time Github CI runs.

The folder structure follows [Cypress official documentation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-structure) for consistency.

## Run the tests (from project's `root` folder)

1. Install Cypress dependencies

   Before being able to run Cypress, we need to install it first:

   ```
   yarn cy:install
   ```

1. Run the tests

   This command will run BOTH local server in port 3000 and Cypress test runner:

   ```
   yarn start-dev-cypress
   ```

   The command above is basically the same as running a couple of separate scripts below:

   **Run local server in port 3000**

   ```
   yarn start
   ```

   **Then run the tests via Cypress Test Runner:**

   ```
   yarn cy:open
   ```

   #### Run cypress via CLI

   ```
   yarn cy:test
   ```

   Available options for CLI are documented in [Cypress Commands section](https://docs.cypress.io/guides/guides/command-line#Commands)

1. Target a specific environment

   We can either update the `baseUrl` in `cypress.json`

   or

   We can pass in the environment as an environment variable with `CYPRESS_BASE_URL`, for example:

   To target DEV env:

   ```
   CYPRESS_BASE_URL=https://org.private.dev.aws.ofx.com/neo yarn cy:open
   ```

## .env file

The Cypress integration tests require to be authenticated through [Okta Preview](https://ofx.oktapreview.com) (for non-Prod environment) and [Okta](https://ofx.okta.com) (for Prod environment).

In order to run Cypress tests **locally**, Okta Preview's user name and password should be added into `.env` file. Since `.env` file will have some credentials, it is not checked in to Github repository. We have to create it manually from the existing `.env.sample` file and rename it to `.env`.

**NOTE:** `.env` file is located in `.cypress` folder

## Troubleshooting

### Clear Cypress cache

https://docs.cypress.io/guides/references/troubleshooting#Clear-Cypress-cache

```
yarn cy:clean
```
