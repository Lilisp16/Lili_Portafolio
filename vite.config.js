import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Lili_Portafolio/', // <- esto es clave para GitHub Pages
  plugins: [react()],
  server: {
    port: 5173
  }
})
