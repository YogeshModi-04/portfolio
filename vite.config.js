import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// CSS is inlined into index.html so first paint never waits on a stylesheet.
// JS is deliberately NOT inlined: an inline <script> forces the Content
// Security Policy (vercel.json) to allow 'unsafe-inline' scripts, which defeats
// it. As a hashed file under /assets it is covered by `script-src 'self'` and
// is cached immutably across visits.
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteSingleFile({
      useRecommendedBuildConfig: false,
      inlinePattern: ['**/*.css'],
    }),
  ],
  build: {
    cssCodeSplit: false,
  },
})
