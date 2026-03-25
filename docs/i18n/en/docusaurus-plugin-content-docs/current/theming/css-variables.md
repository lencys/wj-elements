---
title: CSS Variables
---

<head>
  <title>CSS Variables | Custom CSS properties for variables and components</title>
  <meta
    name="description"
    content="WebJET Elements uses CSS variables for global theming and fine-grained component customization."
  />
</head>

WebJET Elements uses <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS variables</a> as its main customization mechanism. The bundled `light.css` and `dark.css` files define the default tokens, and your application can override them with your own values.

## Setting the values

### Global variables

Global variables are usually set on `:root`, or on a theme container such as `.wje-theme-dark`, `.wje-theme-light`, or `[data-theme="dark"]`.

```css
/* Set variables for all modes */
:root {
  --wje-background: #ffffff;
  --wje-color: #1f2937;

  --wje-font-family: Inter, system-ui, sans-serif;
}
```

### Variables in components

You can also override a variable for a specific component only. This is useful when you want to fine-tune one UI area without affecting the whole app.

```css
/* Sets the border color of all buttons */
wje-button {
  --wje-button-border-color: #0af4fc;
}

/* Sets the border color of all buttons with id 'custom' */
#custom {
  --wje-button-border-color: #0af4fc;
}
```

### Variables via Javascript

You can update CSS variables dynamically with JavaScript, for example when switching themes or applying tenant-specific branding.

```js
document.documentElement.style.setProperty('--wje-background', '#f8fafc');
document.documentElement.style.setProperty('--wje-color', '#0f172a');
```

## Getting value

### Using CSS

Use the [var() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/var) to consume a CSS variable. You can also specify a fallback value.

```css
#custom {
  --wje-button-border-color: var(--wje-color-primary-9, #0af4fc);
}
```

### Using JavaScript

To read the computed value, prefer `getComputedStyle()` over `el.style`, because it also includes values coming from the loaded theme files.

```js
const rootStyles = getComputedStyle(document.documentElement);
const background = rootStyles.getPropertyValue('--wje-background').trim();
```

## WebJET Elements variables

### Customizing components using variables

Each component exposes its own set of CSS variables. You can find the full list in the **CSS Custom Properties** section of that component’s API page. For example, the button component exposes variables such as `--wje-button-border-color`, `--wje-button-border-radius`, and `--wje-button-outline-width`.

### Customizing an application using global variables

For app-wide theming, the most important global tokens include:

- `--wje-background`
- `--wje-color`
- `--wje-border-color`
- `--wje-font-family`
- `--wje-color-primary-1` through `--wje-color-primary-11`

For more guidance, continue with [Colors](colors.md), [Themes](themes.md), and [Dark mode](dark-mode.md).
