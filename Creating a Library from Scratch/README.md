# Creating a Library from Scratch

Welcome to the "Creating a Library from Scratch" section of this repository. This section is dedicated to guiding you through the process of setting up a new React library using TypeScript from the ground up. We will cover the essentials of configuring Rollup for a robust React development environment.

## What You Will Learn

- How to set up a new React library with TypeScript.
- Configuring Rollup for efficient bundling of React and TypeScript code.
- Integrating Babel for JSX and ES6+ support in your project.
- Establishing a scalable and maintainable project structure.

## Setting Up a New Project

Here, you'll find a step-by-step guide to create a new React library. This includes installing necessary dependencies and setting up the basic structure of your project.

### Node and npm Initializtion

Create a new folder for your project and initialize Node.js and npm within it. This sets up your basic project structure.

```
npm init -y
```

### Installing React, TypeScript, and Type Definitions

Install React along with TypeScript and the necessary type definitions for React.

```
npm install react typescript @types/react --save-dev
```

### Creating Components

Create a new component to have an example to test it later.

- Within the root of your project, create the following file structure:

├── src
│   ├── components
|   │   ├── Button
|   |   │   ├── Button.tsx
|   |   │   └── index.ts
|   │   └── index.ts
│   └── index.ts
├── package.json
└── package-lock.json

The content of each files is inside the from-scratch folder.

### Configuration of TypeScript and Rollup

Set up TypeScript, Babel, and Rollup for your project. These tools are crucial for transpiling TypeScript code and bundling your React application.

- Create a tsconfig.json file at the root of your project with the following content.

```
{
  "compilerOptions": {
    "target": "es5",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "jsx": "react",
    "module": "ESNext",
    "declaration": true,
    "declarationDir": "types",
    "sourceMap": true,
    "outDir": "dist",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "emitDeclarationOnly": true
  }
}
```

- Install Rollup and its dependencies.

```
npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts tslib --save-dev
```

- Create a rollup.config.mjs file at the root with the following presets.

```
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
```

- Update package.json.

Your package.json should be updated to look like this.

```
{
  "name": "from-scratch",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "rollup": "rollup -c"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@rollup/plugin-commonjs": "^25.0.7",
    "@rollup/plugin-node-resolve": "^15.2.3",
    "@rollup/plugin-typescript": "^11.1.6",
    "@types/react": "^18.2.48",
    "react": "^18.2.0",
    "rollup": "^4.9.6",
    "rollup-plugin-dts": "^6.1.0",
    "typescript": "^5.3.3"
  },
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "files": [
    "dist"
  ],
  "types": "dist/index.d.ts"
}

```

- Run the command above to check if the setup as succeed, it should create a dist folder.

```
npm run rollup
```

### Publishing your library

Make sure you are in a git repository and commited the current setup.

- Update package.json to have the name as your git repository and create the config above:

```
"name": "@YOUR_NAME/REPO_NAME",
...
"publishConfig": {
  "@YOUR_NAME:registry": "https://npm.pkg.github.com"
}
...
```

- Create a GitHub action to publish your library. 

Replace the secret NPM_AUTH_TOKEN with a repository secret that have repo, write and worflow permissions.

```
name: Node.js Package

on:
  release:
    types: [created]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test

  publish-gpr:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://npm.pkg.github.com/
      - run: npm ci
      - run: npm run rollup
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_AUTH_TOKEN}}
```

- Create a new release on GitHub. The action will trigger automatically and will publish your library.

## Contributions

This section is open to contributions. If you have suggestions, corrections, or additional content related to creating a library from scratch that you'd like to contribute, please follow the guidelines in the [Contributing](../Contributing.md) section.

## License

The content in this section is also subject to the [MIT License](../LICENSE), allowing you to use, modify, and share it as long as you provide proper attribution and adhere to the license terms.
