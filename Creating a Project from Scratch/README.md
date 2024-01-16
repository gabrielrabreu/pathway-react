# Creating a Project from Scratch

Welcome to the "Creating a Project from Scratch" section of this repository. This section is dedicated to guiding you through the process of setting up a new React project using TypeScript from the ground up. We will cover the essentials of configuring Webpack and Babel for a robust React development environment.

## What You Will Learn

- How to set up a new React project with TypeScript.
- Configuring Webpack for efficient bundling of React and TypeScript code.
- Integrating Babel for JSX and ES6+ support in your project.
- Establishing a scalable and maintainable project structure.

## Setting Up a New Project

Here, you'll find a step-by-step guide to create a new React project. This includes installing necessary dependencies and setting up the basic structure of your project.

### Node and npm Initializtion

Create a new folder for your project and initialize Node.js and npm within it. This sets up your basic project structure.

```
npm init -y
```

### Installing React, ReactDOM, TypeScript, and Type Definitions

Install React and ReactDOM along with TypeScript and the necessary type definitions for React.

```
npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom
```

### Configuration of TypeScript, Babel, and Webpack

Set up TypeScript, Babel, and Webpack for your project. These tools are crucial for transpiling TypeScript code and bundling your React application.

- Create a tsconfig.json file at the root of your project with the following content:

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

- Install Babel and its presets for React and TypeScript.

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
```

- Install Webpack and its related tools.

```
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```

- Create a .babelrc file at the root with the following presets:

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

- Create a webpack.config.js file at the root with the following presets:

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

### Basic index.html and index.tsx Setup

Set up a basic index.html and index.tsx to start building your React application.

- Create a folder named public and inside it, create an index.html file with the following basic HTML structure:

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

- Create a folder named src and inside it, create an index.tsx file with the following React setup:

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

- Also, create a basic App.tsx in the src folder:

```
import React from "react";

const App: React.FC = () => {
  return <div>Hello World!</div>;
};

export default App;
```

### Update package.json Scripts

Modify the scripts section in your package.json to include commands for starting and building your project:

```
...
"scripts": {
  "start": "webpack serve --open",
  "build": "webpack --mode production"
}
...
```

### Run the Application

After completing the initial setup, you are ready to run your React application. Follow these steps to launch and verify that it's working correctly:

- Start the Development Server 

Use the `npm start` command to initiate the development server. This command uses the Webpack Dev Server configuration set in `webpack.config.js` to serve your React application.

```
npm start
```

- Verify the Application:

After running the command, your default web browser should automatically open the URL http://localhost:3000. This will display the initial screen of your React application.

- Success Screen:

If everything is set up correctly, you should see the "Hello World!" message or any content you defined in your App.tsx component. This indicates that the React application is compiled and running properly.

If you encounter any errors, revisit the previous steps to ensure all configurations and installations were completed successfully. This initial "Hello World!" screen is your starting point for developing and expanding your React project with TypeScript.

## Contributions

This section is open to contributions. If you have suggestions, corrections, or additional content related to creating a project from scratch that you'd like to contribute, please follow the guidelines in the [Contributing](../Contributing.md) section.

## License

The content in this section is also subject to the [MIT License](../LICENSE), allowing you to use, modify, and share it as long as you provide proper attribution and adhere to the license terms.