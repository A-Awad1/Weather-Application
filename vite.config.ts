import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "~/assets/scss/partials/helpers/variables/colors";
          @use "~/assets/scss/partials/helpers" as *;`,
      },
    },
  },
  server: {
    port: 4000,
  },
});
