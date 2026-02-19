import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Change this to root
  plugins: [react()],
  // ... rest of your config
})
