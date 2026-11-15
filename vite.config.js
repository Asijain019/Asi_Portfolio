import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base: the built site works at a domain root (Vercel, Netlify)
  // and under a sub-path (GitHub Pages: username.github.io/repo-name/).
  base: './',
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
