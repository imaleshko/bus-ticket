import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import istanbul from "vite-plugin-istanbul";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],

  build: {
    sourcemap: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
