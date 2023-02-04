import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/adopt-me/',
  plugins: [react()],
  root: "src",
})