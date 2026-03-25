---
title: Základy prispôsobenia
sidebar_label: Základy
---

[//]: # "import ColorPalette from '@components/page/theming/ColorPalette';"

<head>
  <title>Základy prispôsobenia | Základné definície úprav farieb a šablón</title>
  <meta
    name="description"
    content="WebJET Elements sa prispôsobuje najmä cez CSS premenné, vstavané svetlé/tmavé témy a CSS Shadow Parts tam, kde komponent používa Shadow DOM."
  />
</head>

WebJET Elements je navrhnutý tak, aby sa dal prispôsobovať bez zásahu do zdrojového kódu komponentov. V praxi sa najčastejšie pracuje s tromi vrstvami:

1. **globálne dizajnové tokeny** – napríklad `--wje-background`, `--wje-color`, `--wje-font-family`,
2. **premenné konkrétnych komponentov** – napríklad `--wje-button-border-color`,
3. **CSS Shadow Parts** – ak komponent renderuje interný obsah v Shadow DOM a vystavuje `part` atribúty.

Balík zároveň obsahuje pripravené súbory `light.css`, `dark.css` a `styles.css`, takže si môžete vybrať, či použijete predvolené témy, alebo na ne nadviažete vlastnými prepismi.

## Farby

Komponenty používajú sadu sémantických farieb, napríklad `primary`, `complete`, `success`, `warning`, `danger` a `info`. Tieto farby sú definované cez globálne CSS tokeny a ich tónové škály.

## CSS Premenné

WebJET Elements používa pre väčšinu štýlov <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS premenné</a>. To umožňuje centrálne meniť vizuál celej aplikácie aj jednotlivých komponentov. Viac nájdete na stránke [CSS Premenné](css-variables.md).

## CSS Shadow Parts

Ak komponent používa <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a>, vnútorné uzly nemožno štandardne štýlovať zvonka. Ak však komponent vystaví `part`, môžete využiť pseudo-element `::part()` a meniť konkrétne interné časti. Podrobnosti sú na stránke [CSS Shadow Parts](css-shadow-parts.md).
