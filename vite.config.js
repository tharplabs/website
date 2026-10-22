import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// The source lives in app/ so the built site can be written to the repo
// root, which is what GitHub Pages serves. Relative base keeps it working at
// both tharplabs.github.io/ and tharplabs.github.io/website/.
export default defineConfig({
  root: 'app',
  base: './',
  plugins: [vue()],
  build: {
    outDir: '..',
    emptyOutDir: false,
  },
})
