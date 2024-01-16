import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      return config;
    },
  },
  component: {
    supportFile: "cypress/support/component.ts",
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
