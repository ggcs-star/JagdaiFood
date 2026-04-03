import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // ✅ Swiper production fix
  optimizeDeps: {
    include: ['swiper', 'swiper/react', 'swiper/modules'],
  },
  
  build: {
    commonjsOptions: {
      include: [/swiper/, /node_modules/],
    },
  },
})