
//Tesfalegn_portfolio/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace Tesfalegnp with your GitHub username
export default defineConfig({
  plugins: [react()],
  base: '/Tesfalegn_portfolio/',   // 👈 this must match your repo name
})
   
  