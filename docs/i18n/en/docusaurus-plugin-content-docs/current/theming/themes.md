---
title: Templates
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>WebJet Elements Templates | Change default themes and background colors of the application</title>
  <meta
    name="description"
    content="WebJET Elements defines global design tokens for typography, surfaces, shadows, and semantic colors that you can override in your own theme."
  />
</head>

WebJET Elements defines its default theme through global CSS tokens. You will find them primarily in `light.css` and `dark.css`. When creating a custom theme, it is best to start from those tokens instead of overriding individual internal component styles.

## What makes up a theme

In practice, a theme is built from several layers:

1. **Global surfaces and text** – for example `--wje-background`, `--wje-color`, and `--wje-border-color`.
2. **Typography and rhythm** – for example `--wje-font-family`, `--wje-font-size`, and `--wje-line-height-normal`.
3. **Radius, spacing, and shadows** – for example `--wje-border-radius-medium`, `--wje-spacing-medium`, and `--wje-shadow-medium`.
4. **Semantic color scales** – for example `--wje-color-primary-1` through `--wje-color-primary-11`.
5. **Component tokens** – for example `--wje-card-background`, `--wje-input-border-color`, and `--wje-button-border-radius`.

## The most important global tokens

| Token | Purpose |
| --- | --- |
| `--wje-background` | Base application or section background |
| `--wje-color` | Default text color |
| `--wje-border-color` | Default border color |
| `--wje-font-family` | Primary font family |
| `--wje-shadow-medium` | Medium-strength shadow |
| `--wje-color-primary-1..11` | Primary color tone scale |
| `--wje-color-success-1..11` | Success color tone scale |
| `--wje-color-danger-1..11` | Danger color tone scale |

## Example of a custom theme

```css
:root {
  --wje-background: #ffffff;
  --wje-color: #111827;
  --wje-border-color: #d1d5db;

  --wje-font-family: Inter, system-ui, sans-serif;

  --wje-color-primary-1: #eef2ff;
  --wje-color-primary-9: #4f46e5;
  --wje-color-primary-11: #312e81;

  --wje-card-background: #ffffff;
  --wje-card-color: #111827;
}
```

## Recommended workflow for theme creation

1. Start with the global tokens (`--wje-background`, `--wje-color`, `--wje-border-color`).
2. Then adapt the semantic color scales to your brand.
3. Adjust component tokens only where global values are not enough.
4. Test both light and dark mode and verify contrast on interactive states.

## Tone scale generator

If you want to experiment with surface and text tones, use the generator below as a helper while building your own theme.

<SteppedColorGenerator />
