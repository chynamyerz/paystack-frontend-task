# Paystack Frontend Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project structure

The project structure is a s follows:

- src : The main folder which contains almost the entire project files
- src/api : The main folder which contains everything responsible for any backend / api calls
- src/components : The main folder responsible for the building blocks that can be shared and reused as components if various places
- src/pages : The main folder that combines components to form single pages.

In each folder, a `index.tsx or index.ts` file is used to form a free redundant importing of files, making the imports much more organized. Alos a folder `__tests__` with test file is placed close to the relevant code to be tested.

```
src|
  api|
    queries|
      movies:
        __tests__
          movies.ts
        movies.ts
        index.ts
      index,ts
  components|
    Dropdown|
      __tests__
        Dropdown.tsx
      Dropdown.tsx
      index.tsx
      types.ts
      styles.css / ts
    Table|
      __tests__
        Table.tsx
      Tables.tsx
      index.tsx
      types.ts
      styles.css / ts
    index.ts
  pages|
    HomePage|
      __tests__
        HomePage.tsx
      HomePage.tsx
      index.tsx
      types.ts
      styles.css / ts
    index.ts
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn eject`
