import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hospital/',       // 👈 VERY IMPORTANT: sets correct base path for Tomcat
  build: {
    outDir: 'dist',         // build output folder
    emptyOutDir: true       // cleans old files before new build
  },
  server: {
    port: 5173,             // local dev server port
  }
})
