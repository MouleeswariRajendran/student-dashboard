import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'client',
    chunkSizeWarningLimit: 1000, // Set your preferred limit
    // ... other configurations
  },
  plugins: [react()],
})
