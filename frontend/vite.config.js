import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5555,
    proxy: {
      "/api": {
        target: "https://waystar-backend.onrender.com",
        changeOrigin: true ,
        pathRewrite: { "^/api": "" }
      }
    }
  },
})
