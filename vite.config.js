import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Lili_Portafolio/',
  plugins: [react()],
  server: {
    port: 5173
  }
})
