---
title: Dark mode
initialTab: 'Preview'
inlineHtmlPreviews: true
---

<head>
  <title>Dark mode</title>
  <meta
    name="description"
    content="WebJET Elements ships with a ready-to-use dark theme in dark.css and supports switching via a class or data attribute."
  />
</head>

WebJET Elements already ships with a ready-made dark theme in `dark.css`. If you load both `light.css` and `dark.css`, enabling dark mode is just a matter of toggling the correct selector on the document or on a wrapper element.

## Supported selectors

The bundled dark theme responds to these selectors:

- `.dark`
- `.wje-theme-dark`
- `[data-theme="dark"]`

The light theme responds to the matching light selectors:

- `.light`
- `.wje-theme-light`
- `[data-theme="light"]`

## Basic setup

```html
<link rel="stylesheet" href="/wje-elementy/styles.css" />
<link rel="stylesheet" href="/wje-elementy/light.css" />
<link rel="stylesheet" href="/wje-elementy/dark.css" />
```

Then switch the active theme, for example with `data-theme`:

```js
document.documentElement.dataset.theme = 'dark';
// or:
document.documentElement.dataset.theme = 'light';
```

## Respecting the system preference

If you want to follow the user’s OS preference, use `prefers-color-scheme`:

```js
const media = window.matchMedia('(prefers-color-scheme: dark)');

const applyTheme = () => {
  document.documentElement.dataset.theme = media.matches ? 'dark' : 'light';
};

applyTheme();
media.addEventListener('change', applyTheme);
```

## Adapting system UI

When dark mode is enabled, it is a good idea to set `color-scheme` so that native form controls and scrollbars also render appropriately:

```html
<meta name="color-scheme" content="light dark" />
```

Or via CSS:

```css
html {
  color-scheme: light dark;
}
```

## Custom dark-theme overrides

If the bundled dark theme is close but not final, add your own token overrides on top of it:

```css
[data-theme='dark'] {
  --wje-background: #0b1220;
  --wje-color: #e5e7eb;
  --wje-border-color: #334155;

  --wje-card-background: #111827;
  --wje-card-color: #f8fafc;
}
```

This keeps your theme compatible with the components while still allowing brand-specific tuning.

## Recommendations

- Load both `light.css` and `dark.css` if you want to switch themes at runtime.
- Prefer token overrides over deep internal selector overrides.
- Test contrast, hover/focus states, and form controls in both modes.

## Related topics

- [CSS Variables](css-variables.md)
- [Colors](colors.md)
- [Themes](themes.md)
  --wje-color-complete-light: #0f8ff9;
  --wje-color-complete-dark: #004fbf;
  --wje-color-complete-darker: #00318e;

  // WARNING
  --wje-color-warning-lighter: #fffde1;
  --wje-color-warning-light: #ffe858;
  --wje-color-warning-dark: #daab2d;
  --wje-color-warning-darker: #aa7918;

  // DANGER
  --wje-color-danger-lighter: #fde2da;
  --wje-color-danger-light: #e6533c;
  --wje-color-danger-dark: #b91e1e;
  --wje-color-danger-darker: #900f17;

  // INFO
  --wje-color-info-lighter: #dbe6e8;
  --wje-color-info-light: #475b6b;
  --wje-color-info-dark: #2b3947;
  --wje-color-info-darker: #1b2839;

  // CONTRAST A
  --wje-color-contrast-lower-a: rgba(33, 33, 33, 0.05); //#f4f4f4
  --wje-color-contrast-lower-a: rgba(33, 33, 33, 0.14); //#e0e0e0
  --wje-color-contrast-medium-a: rgba(33, 33, 33, 0.62); //#757575
  --wje-color-contrast-high-a: rgba(33, 33, 33, 0.81); //#4b4b4b
}
```
