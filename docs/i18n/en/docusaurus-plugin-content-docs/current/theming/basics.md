---
title: The basics of customisation
sidebar_label: The Basics
---

[//]: # "import ColorPalette from '@components/page/theming/ColorPalette';"


  <title>Customization basics | Basic definitions of colour and template adjustments</title>
  <meta
    name="description"
    content="Elements Framework ponúka rozsiahle možnosti prispôsobenia štýlov predovšetkým prostredníctvom premenných CSS. Vďaka tomu môžete ľahko zmeniť vzhľad aplikácie podľa vašich potrieb."
  />


Elements Framework offers extensive options for customizing styles, primarily through CSS variables. This makes it easy to change the look and feel of the app to suit your needs. Elements components use CSS variables for most styles, making it easy to edit their default values. You can override these variables in your global stylesheet. In addition, it supports SASS, allowing for more advanced styling and theming options. Using the SASS variables and mixins provided by Elements, you can create custom templates, modify layouts, and define custom color schemes.

## Paints

The Elements colour palette consists of 7 preset colours that can be easily customised. The palette is designed to meet current trends while ensuring accessibility. Users can customize its colors using CSS variables, allowing them to change the default colors or add their own.

[//]: # "<ColorPalette />"

//Neutral color shades
contrast-lowest: #fff;
contrast-higher: #212121;

//constant colors
white: #fff;
black: #000;

## CSS Variables

WJ elements uses <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS</a>variables for its styles, which allows you to achieve centralized style management, dynamic theme switching, reduce the amount of code, and improve maintainability. For more on their use, see [CSS Variables](css-variables.md)

## CSS Shadow Parts

CSS shadow parts make it easy to edit individual elements in the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a>, which is otherwise isolated from the rest of the application. By using the `::part` pseudo element in CSS, it is possible to access selected parts of components and customize them according to your preferences. For more on how to do this, see [CSS Shadow Parts](css-shadow-parts.md).
