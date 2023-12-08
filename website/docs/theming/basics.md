---
title: Theming Basics
sidebar_label: Basics
---

import ColorPalette from '@components/page/theming/ColorPalette';

<head>
  <title>Theming | Ionic Apps: Color and Theming Basics Definition</title>
  <meta
    name="description"
    content="The definition of theming apps just got simplified. Ionic Framework is built with pre-baked styles and colors which are extremely easy to change and modify."
  />
</head>



Elements Framework ponúka rozsiahle možnosti prispôsobenia štýlov predovšetkým prostredníctvom premenných CSS. Vďaka tomu môžete ľahko zmeniť vzhľad aplikácie podľa vašich potrieb. Komponenty Elements používajú premenné CSS pre väčšinu štýlov, vďaka čomu je možné jednoducho upravovať ich predvolené hodnoty. Tieto premenné môžete prepísať vo svojom globálnom súbore štýlov. Okrem toho podporuje SASS, čo umožňuje pokročilejšie možnosti štylizácie a tematizácie. Pomocou premenných SASS a mixinov, ktoré poskytuje Elemenets, môžete vytvárať vlastné šablóny, upravovať rozloženia a definovať vlastné farebné schémy. 

## Farby

Farebná paleta Elements sa skladá zo 7 predvolených farieb, ktoré si je možné jednoducho upraviť. Paleta je navrhnutá tak aby spĺňala aktuálne trendy a zároveň zabezpečovala prístupnosť. Používatelia si môžu prispôsobiť jej farby pomocou CSS premenných, čo im umožňuje zmeniť predvolené farby alebo pridať vlastné.

<ColorPalette />


//Neutral color shades 
contrast-lowest: #fff; 
contrast-higher: #212121;

//constant colors
white: #fff;
black: #000;





## Platform Standards

Ionic components adapt their look and behavior based on the platform the app is running on. We call this <strong>Adaptive Styling</strong>. This allows developers to build apps that use the same codebase for multiple platforms, while still looking "native" to those particular platforms.

Ionic has two **modes** that are used to customize the look of components based on the **platform**: `ios` and `md`. Each platform has a default mode, but this can easily be configured. For more information on customizing an application based on the platform, see [Platform Styles](platform-styles.md).

## CSS Variables

The Ionic Framework components are themed using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS properties (variables)</a>. CSS variables add dynamic values to an otherwise static language. This is something that has traditionally required a CSS preprocessor like Sass. The look of an application can easily be changed by changing the value of any of the [CSS Variables](css-variables.md) Ionic Framework provides.

## CSS Shadow Parts

CSS Shadow Parts were added to make it easier to fully customize Ionic Framework Shadow components. In the past, components that use <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> were unable to have elements inside of their shadow tree styled directly. With the addition of Shadow parts, there is no longer a need for CSS variables for every property on an inner element of a Shadow component. For more information on customizing Ionic Framework components using parts, see the [CSS Shadow Parts](css-shadow-parts.md) guide.

## Branding

Ionic provides application colors that can be used to theme an application to match a brand or color scheme. The default theme uses a light background, but everything from the background color to the text color is fully customizable. For more information on branding, see [Themes](themes.md).
