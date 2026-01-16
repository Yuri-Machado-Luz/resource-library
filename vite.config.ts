import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@websites": path.resolve(__dirname, "./src/websites/index"),
      "@websites/*": path.resolve(__dirname, "./src/websites"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@components/*": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@utils/*": path.resolve(__dirname, "./src/utils"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@layouts/*": path.resolve(__dirname, "./src/layouts"),
      "@": path.resolve(__dirname, "./src"),
      "@/*": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), tailwindcss()],
});
