import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Configured for GitHub Pages subpath: https://ananyar2006.github.io/Portfolio/
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
