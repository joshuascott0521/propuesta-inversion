import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Rutas relativas: el bundle funciona igual en GitHub Pages de proyecto
// (usuario.github.io/repo/), en dominio propio o abierto desde disco.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
