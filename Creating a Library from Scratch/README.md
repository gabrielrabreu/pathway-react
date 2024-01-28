# Creating a Library from Scratch

Welcome to the "Creating a Library from Scratch" section of this repository. This section is dedicated to guiding you through the process of setting up a new React library using TypeScript from the ground up. We will cover the essentials of configuring Rollup for a robust React development environment.

## What You Will Learn

- How to set up a new React library with TypeScript.
- Configuring Rollup for efficient bundling of React and TypeScript code.
- Configuring Jest to make unit tests of your components..
- Configuring Storybooks to create documentation.
- Configuring CSS/SCSS/Tailwind to style our components.
- Establishing a CI/CD deploy with GitHub Actions.

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
npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts  --save-dev
npm install tslib rollup-plugin-peer-deps-external @rollup/plugin-terser --save-dev
```

- Create a rollup.config.mjs file at the root with the following presets.

```
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

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
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
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
  "peerDependencies": {
    "react": "^18.2.0"
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

### Adding Tests

- Install jest along the dependencies.

```
npm install @testing-library/react jest @types/jest jest-environment-jsdom --save-dev
npm install identity-obj-proxy --save-dev 
```

- Create a test for the Button component.

```
import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
});
```

- Create a jest.config.js file at the root of your project with the following content.

```
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
```

- Next update your package.json file:

```
...
"scripts": {
  "rollup": "rollup -c",
  "test": "jest"
},
...
```

- Install Babel and its dependencies

```
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev
```

- Create a babel.config.js file at the root of your project with the following content.

```
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
```

- Run the command above to check if the setup as succeed.

```
npm run test
```

### Adding Storybooks

- Install it

```
npx sb init --builder webpack5
```

- Create a story for the Button component.

```
import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "SageReactUI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};
```

- Run the command above to check if the setup as succeed.

```
npm run storybook
```

### Adding CSS

- Create a CSS for the Button component.

```
.my-component-library {
  font-size: 60px;
  background-color: black;
  color: white;
}
```

- Update the Button component to use it.

```
import React from "react";

import "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className="my-component-library">{label}</button>;
};

export default Button;
```

- Install rollup support

```
npm install rollup-plugin-postcss --save-dev
```

- Update the rollup.config.mjs

```
...
import postcss from "rollup-plugin-postcss";

...
export default [
  {
    ...
    plugins: [
      peerDepsExternal(),
      postcss(),
      ....
    ],
  },
  {
    ...
    external: [/\.css$/],
  },
];
```

### Adding SCSS

If you want to use SCSS, you just need to update the rollup.config.mjs if you followed the CSS steps.

```
...
  external: [/\.scss$/],
...
```

If you are using with Storybook we need to do this configuration too.

```
npm install @storybook/preset-scss css-loader sass sass-loader style-loader --save-dev
```

Update the .storybook/main.ts, including the addon.

```
...
addons: [
  ...
  "@storybook/preset-scss"
  ...
]
```

### Adding TailwindCSS

If you want to use TailwindCSS, follow the steps above if you followed the CSS steps.

```
npm install tailwindcss postcss autoprefixer --save-dev
```

Create a tailwind.config.js file at the root of your project with the following content.

```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Create a postcss.config.js file at the root of your project with the following content.

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Create a tailwind.css file at the src folder with the following content.

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

- Update the rollup.config.mjs

```
...
  plugins: [
    ...
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    ...
  ]
...
external: [/\.css$/],
...
```

If you are using with Storybook we need to do this configuration too.

```
npm install @storybook/addon-styling --save-dev
```

Update the .storybook/main.ts to include the addon.

```
...
addons: [
  ...
  {
    name: "@storybook/addon-styling",
    options: {
      postCss: {
        implementation: require("postcss"),
      },
    },
  },
  ...
]
```

Update the .storybook/preview.ts to import the css.

```
...
import "../src/tailwind.css";
...
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

- Create a new release on GitHub.

The action will trigger automatically and will publish your library.
Remember, every release you need to update the version in your package.json or it will conflict it an existing version.

Here are some references that helped me build this project:

- [ABC API Integration Tutorial](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe) - I followed this tutorial to create and publish my react component library.
- [XYZ Framework Documentation](https://www.airplane.dev/blog/how-to-build-a-react-component-library) - This documentation helped me to create the workflow to publish using actions.
  
## Contributions

This section is open to contributions. If you have suggestions, corrections, or additional content related to creating a library from scratch that you'd like to contribute, please follow the guidelines in the [Contributing](../Contributing.md) section.

## License

The content in this section is also subject to the [MIT License](../LICENSE), allowing you to use, modify, and share it as long as you provide proper attribution and adhere to the license terms.
