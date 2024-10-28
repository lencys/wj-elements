
// import { esbuildPlugin } from '@web/dev-server-esbuild';
// import { globbySync } from 'globby';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  rootDir: '.',
  files: 'packages/**/*.test.js', // "default" group
  concurrentBrowsers: 3,
  nodeResolve: {
    exportConditions: ['production', 'default']
  },
  testFramework: {
    config: {
      timeout: 3000,
      retries: 1
    }
  },
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'webkit' })
  ],
  testRunnerHtml: testFramework => `
    <html lang="en-US">
      <head>
        <link rel="stylesheet" type="text/css" href="dist/light.css" />
      </head>
      <body>
        <script>
          window.process = {env: { NODE_ENV: "production" }}
        </script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>
  `
};
