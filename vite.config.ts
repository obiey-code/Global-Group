import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Le nom de votre dépôt est 'Global-Group'
// CLÉ CRITIQUE pour GitHub Pages
const REPO_NAME = 'Global-Group'; 

// https://vitejs.dev/config/
export default defineConfig({
  // ----------------------------------------------------
  // CORRECTION IMPORTANTE POUR GITHUB PAGES
  // Vite doit savoir où se trouve le dossier du projet sur le domaine (https://obiey-code.github.io/Global-Group/)
  base: `/${REPO_NAME}/`, 
  // ----------------------------------------------------
  
  plugins: [react()],
  
  // Si vous utilisez TypeScript pour votre projet
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});