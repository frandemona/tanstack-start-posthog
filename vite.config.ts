import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  plugins: [
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  // For proxying PostHog calls
  /* server: {
    proxy: {
      '/ingest': {
        target:
          process.env.VITE_PUBLIC_POSTHOG_KEY || 'https://us.i.posthog.com', // or 'https://eu.i.posthog.com' for EU
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ingest/, ''), // Strips '/ingest' from the path
      },
    },
  }, */
})

export default config
