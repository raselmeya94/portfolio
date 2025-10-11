import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',  // Set base to the subdirectory
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
