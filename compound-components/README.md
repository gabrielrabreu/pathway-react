# Getting Started

This project was created manually without using Create React App.
It is set up with React, TypeScript, Webpack, Babel, Tailwind CSS, ESLint, Prettier, and Jest.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run lint`

Runs ESLint to identify issues in JavaScript and TypeScript code.
Helps to find and fix potential problems in your code, adhering to the set rules for the linter.

### `npm run format`

Runs Prettier to automatically format JavaScript, TypeScript, JSON, and CSS code.
Ensures all code follows a consistent style, improving readability and maintaining uniformity.

### `npm test`

Launches the test runner in the interactive watch mode.
Runs unit and integration tests, ensuring that the app functions as expected and preventing the introduction of bugs.

## Project Setup Details

### Initial Setup

- Node and npm initialization.
- Installation of React, ReactDOM, TypeScript, and type definitions.
- Configuration of TypeScript, Babel, and Webpack.
- Basic index.html and index.tsx setup.

```
npm init -y
npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom
```

tsconfig.json at root

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```

.babelrc at root

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

.webpack.config.js at root

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
};
```

index.html at public

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created manually" />
    <title>Demo</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

index.tsx at src

```
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
```

App.tsx at src

```
import React from "react";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Demo</h1>
    </div>
  );
};

export default App;
```

package.json scripts

```
"scripts": {
  "start": "webpack serve --open",
  "build": "webpack --mode production"
}
```

### Tailwind CSS Integration

- Installation and configuration of Tailwind CSS.
- Setting up PostCSS with Tailwind directives.
- Webpack configuration for CSS processing.

```
npm install tailwindcss postcss autoprefixer
npm install --save-dev style-loader css-loader postcss-loader
npx tailwindcss init -p
```

tailwind.config.js at root

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

index.css at src

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

index.tsx to import index.css

```
import "./index.css";
```

webpack.config.js to set css rule

```
module: {
  rules: [
    ...
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ],
}
```

### ESLint and Prettier Integration

- Setting up ESLint and Prettier for code quality and consistent formatting.
- Configuration files for ESLint and Prettier.
- Scripts for linting and formatting.

```
npm install --save-dev eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

.eslintrc.json at root

```
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }]
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  }
}
```

.eslintignore

```
/node_modules
/build
*.js
```

.prettierrc.json at root

```
{
  "semi": true,
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "jsxSingleQuote": false
}
```

.prettierignore at root

```
/node_modules
/build
*.js
```

package.json scripts to run lint/format

```
"scripts": {
  ...
  "lint": "eslint src/**/*.{js,jsx,ts,tsx}",
  "format": "prettier --write src/**/*.{js,jsx,ts,tsx,json,css}",
}
```

### Jest for Testing

- Installation of Jest and related libraries for testing React components.
- Configuration for Jest with TypeScript support.
- Script to run tests.

```
npm install --save-dev jest @types/jest @testing-library/react @testing-library/jest-dom ts-jest
```

setupTests.ts at src

```
import "@testing-library/jest-dom";
```

jest.config.js at root

```
/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
```

package.json scripts to run test

```
"scripts": {
  ...
  "test": "jest"
}
```

## Learn More

For more information on React, see the [React documentation](https://reactjs.org/).
Additional details on setup and configurations can be found in the respective documentation of each tool and library used in this project.
