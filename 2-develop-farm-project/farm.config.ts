import { UserConfig } from '@farmfe/core';

function defineConfig(config: UserConfig): UserConfig {
  return config;
}

export default defineConfig({
  compilation: {
    input: {
      index: './src/index.html'
    },
    output: {
      path: 'build',
      publicPath: '/',
      targetEnv: 'browser'
    }
  },
  server: {
    port: 6232,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  plugins: [
    '@farmfe/plugin-react',
    '@farmfe/plugin-sass'
  ]
});