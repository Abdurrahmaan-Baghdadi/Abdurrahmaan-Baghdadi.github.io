import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // Changes on every build, so links like /resume.pdf?v=... skip browser caches after a deploy
    __BUILD_ID__: JSON.stringify(Date.now().toString(36)),
  },
})