import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
     globals: true,
    setupFiles: ['./tests/setup.js'],
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: ['text', 'json', 'html'],
      exclude: ["src/main.jsx"]
    },
  }
})
