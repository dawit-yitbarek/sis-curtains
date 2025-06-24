import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  resolve: {
    alias: {
      buffer: 'buffer/',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
  define: {
    global: 'globalThis',
  },
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Sis Curtains',
        short_name: 'Sis Curtains',
        start_url: '/',
        display: 'standalone',
        background_color: '#fef8f5',
        theme_color: '#b26e63',
        icons: [
          {
            src: '/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    }),
    {
      ...rollupNodePolyFill(),
      enforce: 'post',
    },
  ],
  server: {
    host: '0.0.0.0',
  },
  preview: {
    allowedHosts: ['0.0.0.0'],
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
});