import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Relative base so the build works under any path (e.g. GitHub Pages /website/).
// Output goes to docs/ so GitHub Pages can serve it straight from the branch.
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
