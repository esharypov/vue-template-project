import { fileURLToPath, URL } from 'node:url'
import { PreRenderedAsset } from 'rollup'
import path from 'node:path'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
        // pages_about: resolve(__dirname, 'pages/*.html'),
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (info: PreRenderedAsset) => {
          const name = info.name as string
          const ext = path.extname(name)

          switch (ext) {
            case '.css':
              return `assets/css/${name}`

            case '.woff':
            case '.woff2':
              return `assets/fonts/${name}`

            case '.jpg':
            case '.png':
            case '.gif':
            case '.svg':
            case '.webp':
              return `assets/img/${name}`

            case '.js':
              return `assets/js/${name}`

            default:
              return `assets/${name}`
          }
        }
      }
    }
  },
  plugins: [
    vue(),
    VueDevTools()
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
