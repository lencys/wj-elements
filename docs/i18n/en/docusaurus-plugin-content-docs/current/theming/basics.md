---
title: The basics of customisation
sidebar_label: The Basics
---

[//]: # "import ColorPalette from '@components/page/theming/ColorPalette';"

<head>
  <title>Customization basics | Basic definitions of color and template adjustments</title>
  <meta
    name="description"
    content="WebJET Elements is primarily customized through CSS variables, built-in light/dark themes, and CSS Shadow Parts for components that use Shadow DOM."
  />
</head>

WebJET Elements is designed so that you can customize it without changing component source code. In practice, most styling work happens in three layers:

1. **global design tokens** – for example `--wje-background`, `--wje-color`, and `--wje-font-family`,
2. **component-specific variables** – for example `--wje-button-border-color`,
3. **CSS Shadow Parts** – when a component renders internal markup in Shadow DOM and exposes `part` attributes.

The package also ships with `light.css`, `dark.css`, and `styles.css`, so you can either use the bundled themes as-is or build your own overrides on top of them.

## Colors

Components use a set of semantic colors such as `primary`, `complete`, `success`, `warning`, `danger`, and `info`. These colors are defined through global CSS tokens and tone scales.

## CSS Variables

WebJET Elements uses <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS variables</a> for most of its styling. This lets you control the look of the whole application or individual components from a central place. For more details, see [CSS Variables](css-variables.md).

## CSS Shadow Parts

If a component uses <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a>, its internal nodes are normally isolated from external styles. If the component exposes a `part`, you can target that internal piece with `::part()` and customize it safely. See [CSS Shadow Parts](css-shadow-parts.md) for details.
