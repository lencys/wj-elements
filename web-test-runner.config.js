import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  rootDir: '.',
  files: 'packages/**/*.test.js', // "default" group
  concurrentBrowsers: 1,
  concurrentTestFiles: 1,
  nodeResolve: {
    exportConditions: ['default'],
  },
  testFramework: {
    config: {
      timeout: 5000,
      retries: 1,
    },
  },
  browsers: [
    playwrightLauncher({ product: 'chromium' })
  ],
  testRunnerHtml: (testFramework) => `
    <html lang="en-gb">
      <head>
        
        <link type="text/css" href="dist/light.css" />
        <link type="text/css" href="dist/dark.css" />
        <link type="text/css" href="dist/styles.css" />
        
        <script>
          window.translations = new Map();
        </script>
      </head>
      <body>
        <script>
          window.translations = new Map();
          window.process = {env: { NODE_ENV: "production" }}
        </script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>
  `,
};
