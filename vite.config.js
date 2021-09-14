import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    pages({
      pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
      extensions: ['vue'],
      exclude: ['**/components/*.vue'],
    }),
  ]
})
