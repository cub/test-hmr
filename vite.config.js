/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // replace var env in index.html
  const env = loadEnv(mode, 'env');
  const htmlPlugin = () => {
    return {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(/%(.*?)%/g, function(match, p1) {
          return env[p1];
        });
      }
    };
  };
  // output json env for check.html
  const outputProcessEnvPlugin = () => {
    return {
      name: 'output-process-env-plugin',
      async closeBundle() {
        try {
          process.env.BUILD_DATE = new Date().toJSON();
          const data = JSON.stringify(process.env);
          await writeFile('./dist/process.env.interne.json', data);
        } catch (err) {
          console.error(err);
        }
      }
    };
  };

  return {
    plugins: [htmlPlugin(), outputProcessEnvPlugin(), vue()],
    resolve: {alias: {'@': path.resolve(__dirname, './src')}},
    server: { port: 8080, hmr: { port: 8080 } }
  };
});
