import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte({ hot: false })],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/test/setup.ts'],
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/lib/**/*.ts', 'src/lib/**/*.svelte'],
      exclude: ['src/lib/data/**', 'src/test/**'],
    },
  },
  resolve: {
    alias: { $lib: resolve('./src/lib') },
    conditions: ['browser'],
  },
});
