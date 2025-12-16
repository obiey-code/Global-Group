import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Le nom de votre dépôt est utilisé pour définir le chemin de base (base path)
const REPO_NAME = 'Global-Group'; 

// https://vitejs.dev/config/
export default defineConfig({
  // CLÉ CRITIQUE : Définit le chemin de base pour les ressources.
  // Cela garantit que toutes les ressources (JS, CSS) sont chargées correctement depuis :
  // https://obiey-code.github.io/Global-Group/
  base: `/${REPO_NAME}/`, 
  
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});
