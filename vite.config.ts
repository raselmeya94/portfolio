import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the Vite config
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      // Path alias to make imports easier, remove if unused
      alias: {
        '@': '/src', // Use '/src' as the base directory for imports
      }
    }
  };
});
