const path = require('path');
const prismic = require('@prismicio/client');
const fetch = require('node-fetch');

const VERSIONS_JSON = [];

const BASE_URL = '';

module.exports = {
  title: 'Dokumentácia WJ Elements',
  tagline:
    'WebJET Elementy sú modernou sadou nástrojov používateľského rozhrania využívajúca silu web komponentov, ktorá je určená na zjednodušenie vývoja webových aplikácií.',
  url: 'https://elements.webjet.sk',
  baseUrl: ``,
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk'],
    localeConfigs: {
      sk: { label: 'Slovensky' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/logos/wj-favicon.png',
  organizationName: 'WebJET',
  projectName: 'webjet-elements-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        // Will be passed to @docusaurus/plugin-content-docs (false to disable).
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          //   if (locale != 'en') {
          //     return 'https://crowdin.com/project/ionic-docs';
          //   }
          //   let match;
          //   if ((match = docPath.match(/api\/(.*)\.md/)) != null) {
          //     return `https://github.com/ionic-team/ionic-docs/tree/main/docs/api/${match[1]}.md`;
          //   }
          //   if ((match = docPath.match(/cli\/commands\/(.*)\.md/)) != null) {
          //     return `https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/${match[1].replace(
          //       '-',
          //       '/'
          //     )}.ts`;
          //   }
          //   if ((match = docPath.match(/native\/(.*)\.md/)) != null) {
          //     return `https://github.com/ionic-team/capacitor-plugins/edit/main/${match[1]}/README.md`;
          //   }
          //   return `https://github.com/ionic-team/ionic-docs/edit/main/${versionDocsDirPath}/${docPath}`;
          // },
          exclude: ['README.md'],
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1',
            },
          },
        },
        theme: {
          customCss: [
            require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
            require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      },
    ],
  ],
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    metadata: [
      { name: 'og:image', content: 'https://elements.webjet.sk/img/webjet-elements.svg' },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:site_name',
        content: 'WebJET Elements Docs',
      },
    ],
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Site Logo',
        src: `/logos/logo-wj-elements-light.png`,
        srcDark: `/logos/logo-wj-elements-dark.png`,
        href: '/',
        target: '_self',
        width: 139,
        height: 28,
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          label: 'Príručka',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'components',
          label: 'Komponenty',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: '<div class="separator" aria-hidden></div>',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsBefore: [],
          // dropdownItemsAfter: [
          //   {
          //     href: 'https://ionicframework.com/translate',
          //     label: 'Translate',
          //     target: '_blank',
          //     rel: null,
          //   },
          // ],
          className: 'icon-link language navbar__item',
        },
        {
          href: 'https://discord.gg/b5DqKM997s',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-discord',
          'aria-label': 'Discord',
          target: '_blank',
        },
        {
          href: 'https://github.com/lencys/wj-elements',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-github',
          'aria-label': 'GitHub repository',
          target: '_blank',
        },
      ],
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // https://github.com/FormidableLabs/prism-react-renderer/blob/e6d323332b0363a633407fabab47b608088e3a4d/packages/generate-prism-languages/index.ts#L9-L25
      additionalLanguages: ['shell-session', 'http'],
    },
    algolia: {
      appId: 'W0DED3MH0V',
      apiKey: '8423cfbc56b7dc0677817b93343eb914',
      indexName: 'elements-webjet',
      contextualSearch: true,
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    function (context, options) {
      return {
        name: 'ionic-docs-ads',
        async loadContent() {
          const repoName = 'ionicframeworkcom';
          const endpoint = prismic.getEndpoint(repoName);
          const client = prismic.createClient(endpoint, {
            fetch,
          });

          return await client.getByType('docs_ad');
        },
        async contentLoaded({ content, actions: { setGlobalData, addRoute } }) {
          return setGlobalData({ prismicAds: content.results });
        },
      };
    },
    [
      path.resolve(__dirname, 'plugins', 'docusaurus-plugin-ionic-component-api'),
      {
        versions: VERSIONS_JSON,
      },
    ],
  ],
  customFields: {},
  themes: [],
};
