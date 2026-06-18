import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/port/',
  plugins: [react()],
  build: {
    minify: true,
    sourcemap: false
  }
})
