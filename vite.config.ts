import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    eslintPlugin({
      // 配置选项
      cache: false
    })],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@inport "@/styles/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      // 使用 proxy 实例
      '/api': {
        target: 'https://shop.fed.lagounews.com/api/admin/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }

    }
  }
})
