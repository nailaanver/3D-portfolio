import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary:"#f98e2b",
        secondary: "#f3f3f3",
      },
    }
  },
  plugins: [
    tailwindcss(),
    react()],
})
