// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, ssrBuild }) => ({
  plugins: [react()],
  ssr: {
    noExternal: ['react', 'react-dom'] // Ensure Vite handles these dependencies for SSR
  },
  build: {
    outDir: ssrBuild ? 'dist/server' : 'dist/client',
    ssr: ssrBuild,
    rollupOptions: {
      input: ssrBuild ? 'src/entry/server.jsx' : 'index.html', // Use HTML for client
    },
  },
}));
