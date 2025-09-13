import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   server: {
        host: '0.0.0.0', // Listen on all network interfaces
        port: 3000,
      },
  plugins: [
    tailwindcss(), vue()],
})
