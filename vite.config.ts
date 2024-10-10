import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': 'var(--primary-color)',
          '@text-color': 'var(--text-color)',
          '@layout-body-background': 'var(--bg-color)',
          '@border-radius-base': 'var(--border-radius)',
          '@font-family': 'var(--font-family)',
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [react()],
})
