import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],

  //akhne change korse
  server: {
    historyApiFallback: true, // reload fix locally
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

})
