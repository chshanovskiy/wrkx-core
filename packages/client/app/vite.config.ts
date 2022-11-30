import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), viteTsConfigPaths({ root: '../../../' })],
  server: {
    port: 4200,
  },
})
