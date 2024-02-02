module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Začíname',
      collapsed: false,
      items: ['index', 'intro/environment', 'intro/install'],
    },
    {
      type: 'category',
      label: 'Layout',
      collapsed: false,
      items: [
        'api/layout',
        {
          type: 'link',
          label: 'Responzívna mriežka',
          href: '/docs/api/grid',
        },
        'layout/global-stylesheets',
        'layout/css-utilities',
      ],
    },
    {
      type: 'category',
      label: 'Úprava štýlov',
      collapsed: false,
      items: [
        'theming/basics',
        'theming/css-variables',
        'theming/css-shadow-parts',
        'theming/colors',
        'theming/themes',
        'theming/dark-mode',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: false,
      items: ['contributing/how-to-contribute', 'contributing/coc'],
    },
  ],

  api: [
    {
      type: 'category',
      label: 'Úvod',
      collapsed: false,
      items: ['components'],
    },
    {
      type: 'category',
      label: 'Avatar',
      collapsed: false,
      items: ['api/avatar'],
    },
    {
      type: 'category',
      label: 'Badge',
      collapsed: false,
      items: ['api/badge'],
    },
    {
      type: 'category',
      label: 'Breadcrumb',
      collapsed: false,
      items: ['api/breadcrumb', 'api/breadcrumbs'],
    },
    {
      type: 'category',
      label: 'Button',
      collapsed: false,
      items: ['api/button'],
    },
    {
      type: 'category',
      label: 'Button Group',
      collapsed: false,
      items: ['api/button-group'],
    },
    {
      type: 'category',
      label: 'Card',
      collapsed: false,
      items: ['api/card', 'api/card-content', 'api/card-controls', 'api/card-header', 'api/card-subtitle', 'api/card-title'],
    },
    {
      type: 'category',
      label: 'Checkbox',
      collapsed: false,
      items: ['api/checkbox'],
    },
    {
      type: 'category',
      label: 'Chip',
      collapsed: false,
      items: ['api/chip'],
    },
    {
      type: 'category',
      label: 'Color picker',
      collapsed: false,
      items: ['api/color-picker'],
    },
    {
      type: 'category',
      label: 'Copy button',
      collapsed: false,
      items: ['api/copy-button'],
    },
    {
      type: 'category',
      label: 'Dialog',
      collapsed: false,
      items: ['api/dialog'],
    },
    {
      type: 'category',
      label: 'Dropdown',
      collapsed: false,
      items: ['api/dropdown'],
    },
    {
      type: 'category',
      label: 'Grid',
      collapsed: false,
      items: ['api/grid', 'api/col', 'api/row'],
    },
    {
      type: 'category',
      label: 'Infinite Scroll',
      collapsed: false,
      items: ['api/infinite-scroll'],
    },
    {
      type: 'category',
      label: 'Icons',
      collapsed: false,
      items: ['api/icon'],
    },
    {
      type: 'category',
      label: 'Icon picker TODO',
      collapsed: false,
      items: ['api/icon-picker']
    },
    {
      type: 'category',
      label: 'Image',
      collapsed: false,
      items: ['api/img']
    },
    {
      type: 'category',
      label: 'Image Comparer',
      collapsed: false,
      items: ['api/img-comparer']
    },
    {
      type: 'category',
      label: 'Input',
      collapsed: false,
      items: ['api/input'],
    },
    {
      type: 'category',
      label: 'Item',
      collapsed: false,
      items: [ 'api/item'],
    },
    {
      type: 'category',
      label: 'Layout',
      collapsed: false,
      items: ['api/layout', 'api/aside', 'api/main', 'api/container','api/footer', 'api/header'],
    },
    {
      type: 'category',
      label: 'List',
      collapsed: false,
      items: ['api/list'],
    },
    {
      type: 'category',
      label: 'Menu',
      collapsed: false,
      items: ['api/menu', 'api/menu-item'],
    },
    {
      type: 'category',
      label: 'Progress Bar',
      collapsed: false,
      items: ['api/progress-bar'],
    },
    {
      type: 'category',
      label: 'Radio',
      collapsed: false,
      items: ['api/radio', 'api/radio-group'],
    },
    {
      type: 'category',
      label: 'Routovanie',
      collapsed: false,
      items: ['api/router', 'api/router-link', 'api/router-outlet', 'api/route'],
    },
    {
      type: 'category',
      label: 'Select',
      collapsed: false,
      items: ['api/select', 'api/select-option'],
    },
    {
      type: 'category',
      label: 'Slider',
      collapsed: false,
      items: ['api/slider'],
    },
    {
      type: 'category',
      label: 'Split View',
      collapsed: false,
      items: ['api/split-view'],
    },
    {
      type: 'category',
      label: 'Tabs',
      collapsed: false,
      items: ['api/tab-group', 'api/tab', 'api/tab-panel' ],
    },
    {
      type: 'category',
      label: 'Textarea',
      collapsed: false,
      items: ['api/textarea' ],
    },
    {
      type: 'category',
      label: 'Thumbnail',
      collapsed: false,
      items: ['api/thumbnail'],
    },
    {
      type: 'category',
      label: 'Toast TODO',
      collapsed: false,
      items: ['api/toast'],
    },
    {
      type: 'category',
      label: 'Toggle',
      collapsed: false,
      items: ['api/toggle'],
    },
    {
      type: 'category',
      label: 'Tooltip',
      collapsed: false,
      items: ['api/tooltip'],
    },
    {
      type: 'category',
      label: 'Toolbar TODO',
      collapsed: false,
      items: ['api/toolbar', 'api/toolbar-actions'],
    },
  ],

  cli: [
    {
      type: 'category',
      label: 'CLI Documentation',
      collapsed: false,
      items: [
        'cli',
        'cli/configuration',
        'cli/livereload',
        'cli/using-a-proxy',
        {
          type: 'link',
          label: 'Changelog',
          href: 'https://github.com/ionic-team/ionic-cli/blob/develop/packages/@ionic/cli/CHANGELOG.md',
        },
      ],
    },
    {
      type: 'category',
      label: 'Command Reference',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli/commands', // Generate section automatically based on files
        },
      ],
    },
  ],

  native: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['native', 'native-setup', 'native-faq'],
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'native', // Generate section automatically based on files
        },
      ],
    },
  ],
};

