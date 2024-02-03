---
title: CSS Premenné
---

<head>
  <title>CSS Premenné | CSS Custom Properties for Variables & Components</title>
  <meta
    name="description"
    content="Ionic components are built with CSS Variables for easy custom app properties. They allow a value to be stored in one place, then referenced in multiple places."
  />
</head>

WebJET Elements využíva prednosti custom vlastností CSS, bežne známych ako <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS premenné</a>, aby sme zvýšili vaše možnosti štylizácie. Premenné CSS umožňujú definovať hodnoty na jednom mieste a následne ich opakovane využívať v celej aplikácii, vďaka čomu je vaše CSS efektívnejšie a ľahšie sa udržiava.

## Nastavenie hodnôt

### Globálne premenné

Premenné CSS možno v aplikácii nastaviť globálne v selektore `:root`. Môžu sa tiež použiť len pre konkrétny režim, svetlý alebo tmavý. Viac informácií o globálnych premenných nájdete v časti [Premenné WebJET Elements](#premenné-webjet-elements).

```css
/* Set variables for all modes */
:root {
  /* Set the background of the entire app */
  --wj-background-color: #ff3700;

  /* Set the font family of the entire app */
  --wj-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto', sans-serif;
}
```

### Premenné v komponentoch

To set a CSS variable for a specific component, add the variable inside of its selector. See [Premenné WebJET Elements](#premenné-webjet-elements) for more information on the component-level variables Ionic provides.

```css
/* Nastaví farbu okrajov všetkých tlačidiel */
wj-button {
  --wj-button-border-color: #0af4fc;
}

/* Nastaví farbu okrajov všetkých tlačidla s id 'custom' */
#custom {
    --wj-button-border-color: #0af4fc;
}
```

### Premenné cez Javascript

CSS premenné je možné upraviť aj pomocou Javascript metódy [setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty):

```js
const el = document.querySelector('#custom');
el.style.setProperty('--wj-button-border-color', '#0af4fc');
```

## Získanie hodnoty

### Použitím CSS

Na získanie hodnoty premennej CSS použite funkciu [var() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/var). Táto funkcia tiež umožňuje špecifikovať záložnú hodnotu. Napríklad v nasledujúcom príklade je vlastnosti `--wj-button-border-color` priradená hodnota premennej `--primary-light`. Ak premenná `--primary-light` nie je nastavená, ako náhradná hodnota sa použije `#0af4fc`.


```css
#custom {
  --wj-button-border-color: var(--primary-light, #0af4fc);
}
```

### Použitím JavaScript

CSS premenné je možné získať pomocou Javascript metódy [getPropertyValue()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue):

```js
const el = document.querySelector('#custom');
const color = el.style.getPropertyValue('--charcoal');
```

## Premenné WebJET Elements

### Prispôsobenie komponentov pomocou premenných

Elements ponúka premenné špecifické pre komponenty, ako napríklad --background a --color, ktoré umožňujú jednoduché prispôsobenie. Úplný zoznam týchto premenných nájdete v časti CSS Custom Properties v referencii [API](../api.md) každej komponenty. Napríklad [CSS Custom Vlastnosti ](../api/button.md#css-custom-properties) komponentu Button si môžete pozrieť pre špecifické možnosti prispôsobenia.

### Prispôsobenie aplikácie pomocou globálnych premenných

Elements poskytuje aj globálne premenné na zjednodušenie tematizácie celej aplikácie. Tieto premenné pokrývajú celý rad dizajnových vlastnosti. Podrobný návod na ich používanie na tematizáciu nájdete v [Farmy](colors.md), [Témy](themes.md) and [Pokročilé úpravy štýlov](advanced.md).