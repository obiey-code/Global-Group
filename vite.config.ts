import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Le nom du dépôt est 'Global-Group'
const REPO_NAME = 'Global-Group'; 

// https://vitejs.dev/config/
export default defineConfig({
  // CLÉ IMPORTANTE : Définit le chemin de base pour les ressources
  // Cela garantit que les chemins sont corrects sur GitHub Pages (https://user.github.io/REPO_NAME/)
  base: `/${REPO_NAME}/`, 
  
  plugins: [react()],
});
