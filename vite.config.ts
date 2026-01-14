import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/resource-library/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
