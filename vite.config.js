import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dynamic base path: '/' for Vercel, '/Portfolio/' for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/Portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
