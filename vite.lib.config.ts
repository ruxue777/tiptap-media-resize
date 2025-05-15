import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve('./src/lib.ts'),
      name: 'TiptapMediaResize',
      fileName: (format) => `tiptap-media-resize.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', '@tiptap/core', '@tiptap/vue-3'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          '@tiptap/core': 'TiptapCore',
          '@tiptap/vue-3': 'TiptapVue3'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  // 添加TypeScript类型声明文件生成
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  }
})