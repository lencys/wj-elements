---
title: Colors
initialTab: 'Preview'
inlineHtmlPreviews: true
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>Colors: customize your palette colors or create a new one</title>
  <meta
    name="description"
    content="WebJET Elements uses semantic colors defined through CSS tokens and tone scales that you can adapt in your own theme."
  />
</head>

WebJET Elements uses semantic colors such as `primary`, `complete`, `success`, `warning`, `danger`, and `info`. Components consume these colors through CSS tokens defined in `light.css` and `dark.css`.

In most components you can choose a semantic color via the `color` attribute:

```html
<wje-button>Default</wje-button>
<wje-button color="primary">Primary</wje-button>
<wje-button color="complete">Complete</wje-button>
<wje-button color="success">Success</wje-button>
<wje-button color="warning">Warning</wje-button>
<wje-button color="danger">Danger</wje-button>
<wje-button color="info">Info</wje-button>
```

## How colors are defined

Each semantic color is represented by multiple tones. For example, the primary palette uses tokens `--wje-color-primary-1` through `--wje-color-primary-11`. Components pick different tones from that scale depending on the variant and state.

Because of that, the most reliable way to customize colors is to adjust the relevant tone scale instead of changing one isolated token.

## Adjusting an existing color

If you want to change the primary brand color, override the relevant tokens in your theme. For example, buttons commonly use tones `1`, `9`, and `11` across different fill variants.

```css
:root {
  --wje-color-primary-1: #fff7db;
  --wje-color-primary-9: #ffd945;
  --wje-color-primary-11: #7a5a00;
}
```

This gives you a more consistent result than overriding a single random value.

## When to use the `color` attribute and when to use CSS variables

- Use the `color` attribute when you want to work with the built-in semantic colors.
- Use CSS variables when you want to align the design with your brand, change contrast, or build a custom theme.

## Recommended workflow

1. Pick the semantic color that should represent your brand.
2. Override its tone scale in `:root` or in a theme container.
3. Check contrast in both light and dark mode.
4. Test key components such as `wje-button`, `wje-badge`, `wje-card`, and form controls.

## Related topics

- [CSS Variables](css-variables.md)
- [Themes](themes.md)
- [Dark mode](dark-mode.md)
