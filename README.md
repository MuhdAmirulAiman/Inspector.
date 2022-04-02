# Home Assignment (Inspector.)

**Inspector.** is my submission for the home assignment.

**Task:
Please create a UI in React that runs and displays the tests.
The UI should have two pages:**

1. **The main page with the list of tests**
2. **A page with the history of test runs**

## Thought Process

The task specifies that you retrieve a set of tests from the backend API. As a result, I designed my code in such a way that the program would continue to function as intended even if new tests or categories were introduced in the future. This is true as long as the new test follows the same format as the previous ones.

As suggested, I stored the test results in localStorage. However, after additional consideration, I decided to include a date and time, as I believe the customer will want to know when the test was performed.

## Tech Stack

1. [**React**](https://reactjs.org/)
2. [**Vite**](https://vitejs.dev/)
3. [**Axios**](https://github.com/axios/axios)
4. [**React Query**](https://react-query.tanstack.com/)
5. [**React Toastify**](https://fkhadra.github.io/react-toastify/introduction)
6. [**WindiCSS**](https://windicss.org/)
7. [**Cypress**](https://www.cypress.io/)
8. [**Vitest**](https://vitest.dev/)

## FrontEnd Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v6/commands/npm-install) to install **Inspector**.

```bash
cd .\FrontEnd\tigerlab-assesment\
#Install Packages
npm install i
#Run FrontEnd
npm run dev
```

## BackEnd Installation

```bash
cd .\BackEnd\
# Install Packages
npm install i
# Run BackEnd
node_modules/.bin/json-server --watch ./mock/db.js --config ./mock/config.json
```

## Running Test

For this assignment, I choose to use two main testing library which is [Cypress](https://www.cypress.io/) and [Vitest](https://vitest.dev/)

```bash
# run vitest
npm run vitest

# Run Cypress Test(Graphical User Interface)
npm run cytestui

# Run Cypress Test(Command Line Interface)
npm run cytestcli
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
