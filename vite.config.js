import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// Keep LFS enabled in the source checkout, but publish ordinary media files.
function publicLfsAssets() {
  return {
    name: 'public-lfs-assets',
    apply: 'build',
    buildStart() {
      const publicDir = fileURLToPath(new URL('./public', import.meta.url))
      for (const file of readdirSync(publicDir, { recursive: true })) {
        const path = resolve(publicDir, file)
        const stat = statSync(path)
        // LFS pointers are small text files, unlike the media they represent.
        if (stat.isFile() && stat.size < 1024 &&
            readFileSync(path, 'utf8').startsWith('version https://git-lfs.github.com/spec/v1')) {
          this.error(`Unresolved Git LFS asset: public/${file}. Run "git lfs pull" before building.`)
        }
      }
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: '.gitattributes',
        source: '*.mp4 -filter -diff -merge -text\n*.pdf -filter -diff -merge -text\n',
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/port/',
  plugins: [react(), publicLfsAssets()],
  build: {
    minify: true,
    sourcemap: false
  }
})
