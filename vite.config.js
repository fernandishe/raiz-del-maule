import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        obfuscator({
          compact: true,
          controlFlowFlattening: true,
          deadCodeInjection: true,
          debugProtection: true,
          disableConsoleOutput: true,
        }),
      ],
    },
    sourcemap: false, // evita que puedan ver el código original
  },
  base: '/',
});
