import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  projectId: "nw8xzb",
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {},
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
