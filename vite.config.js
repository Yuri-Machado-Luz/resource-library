import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: '/resource-library/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@layout': resolve(__dirname, './src/layout'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@services': resolve(__dirname, './src/services'),
      '@utils': resolve(__dirname, './src/utils'),
      '@styles': resolve(__dirname, './src/styles'),
      '@constants': resolve(__dirname, './src/constants'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
});
