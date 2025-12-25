import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({

  projectId: 'nw8xzb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },

    supportFile: "cypress/support/component.jsx",

    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },

});
