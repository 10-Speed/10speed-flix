import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          emotion: ["@emotion/react", "@emotion/styled"],
          "react-router": ["react-router"],
          mui: ["@mui/material", "@mui/icons-material"],
          "react-icons": ["react-icons"],
          "react-query": ["@tanstack/react-query"]
        }
      }
    }
  }
});
