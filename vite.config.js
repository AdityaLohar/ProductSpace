// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, ssrBuild }) => ({
  plugins: [react()],
  server: {
    port: 4200, // Change this to 4200
  },
  build: {
    outDir: ssrBuild ? 'dist/server' : 'dist/client',
    ssr: ssrBuild,
    rollupOptions: {
      input: ssrBuild ? 'src/entry/server.jsx' : 'index.html', // Use HTML for client
    },
  },
}));
