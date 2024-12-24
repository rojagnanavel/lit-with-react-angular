import { defineConfig } from 'vite';
import path from 'path';

// const __dirname = new URL('.', import.meta.url).pathname;
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        // Set up multiple entry points for each component
        'index':path.resolve(__dirname, 'src/components/index.ts'),
        'star-rating': path.resolve(__dirname, 'src/components/lit-button.ts'),
      },
      name: 'my-lit-components',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      // Make sure external dependencies are not bundled
      external: ['lit'],
      output: {
        // Use format for different bundling needs
        globals: {
          lit: 'Lit',
        },
      },
    },
  },
});
