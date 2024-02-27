---
title: CSS Variables
---


  <title>CSS Variables | Custom CSS properties for variables and components</title>
  <meta
    name="description"
    content="Ionic components are built with CSS Variables for easy custom app properties. They allow a value to be stored in one place, then referenced in multiple places."
  />


WebJET Elements takes advantage of custom CSS properties, commonly known as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS variables</a>, to enhance your styling options. CSS variables allow you to define values in one place and then reuse them throughout your application, making your CSS more efficient and easier to maintain.

## Setting the values

### Global variables

CSS variables can be set globally in the `:root` selector in the application. They can also be used only for a specific mode, light or dark. For more information about global variables, see [Variables WebJET Elements](#variables-webjet-elements).

```css
/* Set variables for all modes */
:root {
  /* Set the background of the entire app */
  --wj-background-color: #ff3700;

  /* Set the font family of the entire app */
  --wj-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto', sans-serif;
}
```

### Variables in components

To set a CSS variable for a specific component, add the variable inside of its selector. See [Variable WebJET Elements](#variable-webjet-elements) for more information on the component-level variables Ionic provides.

```css
/* Sets the border color of all buttons */
wj-button {
  --wj-button-border-color: #0af4fc;
}

/* Sets the border color of all buttons with id 'custom' */
#custom {
    --wj-button-border-color: #0af4fc;
}
```

### Variables via Javascript

CSS variables can also be modified using the Javascript method [setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty):

```js
const el = document.querySelector('#custom');
el.style.setProperty('--wj-button-border-color', '#0af4fc');
```

## Getting value

### Using CSS

Use the [var() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/var) to get the value of the CSS variable. This function also allows you to specify a fallback value. For example, in the following example, the `--wj-button-border-color` property is assigned the value of the `--primary-light` variable. If the `--primary-light` variable is not set, `#0af4fc` is used as a placeholder.

```css
#custom {
  --wj-button-border-color: var(--primary-light, #0af4fc);
}
```

### Using JavaScript

CSS variables can be retrieved using the JavaScript method [getPropertyValue()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue):

```js
const el = document.querySelector('#custom');
const color = el.style.getPropertyValue('--charcoal');
```

## WebJET Elements variables

### Customizing components using variables

Elements offers component-specific variables, such as --background and --color, that allow for easy customization. For a complete list of these variables, see the CSS Custom Properties section in the [API](../api.md) reference of each component. For example, [CSS Custom Properties ](../api/button.md#css-custom-properties) of the Button component can be viewed for specific customization options.

### Customizing an application using global variables

Elements also provides global variables to simplify the theming of the entire application. These variables cover a range of design features. Detailed instructions on using them for theming can be found in [Farms](colors.md), [Themes](themes.md) and [Advanced Editing Styles](advanced.md).
