---
title: Základy úpravy štýlov
sidebar_label: Základy
---

[//]: # (import ColorPalette from '@components/page/theming/ColorPalette';)

<head>
  <title>Úpravy štýlov | Základné definície úprav farieb a šablón</title>
  <meta
    name="description"
    content="Elements Framework ponúka rozsiahle možnosti prispôsobenia štýlov predovšetkým prostredníctvom premenných CSS. Vďaka tomu môžete ľahko zmeniť vzhľad aplikácie podľa vašich potrieb."
  />
</head>

Elements Framework ponúka rozsiahle možnosti prispôsobenia štýlov predovšetkým prostredníctvom premenných CSS. Vďaka tomu môžete ľahko zmeniť vzhľad aplikácie podľa vašich potrieb. Komponenty Elements používajú premenné CSS pre väčšinu štýlov, vďaka čomu je možné jednoducho upravovať ich predvolené hodnoty. Tieto premenné môžete prepísať vo svojom globálnom súbore štýlov. Okrem toho podporuje SASS, čo umožňuje pokročilejšie možnosti štylizácie a tematizácie. Pomocou premenných SASS a mixinov, ktoré poskytuje Elemenets, môžete vytvárať vlastné šablóny, upravovať rozloženia a definovať vlastné farebné schémy. 

## Farby

Farebná paleta Elements sa skladá zo 7 predvolených farieb, ktoré si je možné jednoducho upraviť. Paleta je navrhnutá tak aby spĺňala aktuálne trendy a zároveň zabezpečovala prístupnosť. Používatelia si môžu prispôsobiť jej farby pomocou CSS premenných, čo im umožňuje zmeniť predvolené farby alebo pridať vlastné.

[//]: # (<ColorPalette />)


//Neutral color shades 
contrast-lowest: #fff; 
contrast-higher: #212121;

//constant colors
white: #fff;
black: #000;


## CSS Premenné

WJ elements používa pre svoje štýly <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">Premenné CSS</a>, čo umožnuje dosiahnuť centralizovanú správu štýlov, dynamické prepínanie motívov, obmedziť množstvo kódu a zlepšiť udržiavateľnosť. Viac o ich použití nájdete na [CSS Premenné](css-variables.md)

## CSS Shadow Parts

CSS shadow parts uľahčujú úpravu jednotlivých elementov v <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOMe</a>, ktorý je za iných okolností izolovaný od zbytku aplikácie. Použitím pseudoelementu `::part` v CSS je možné pristúpiť k vybraných častiam komponentov a prispôsobiť si ich podľa svojich preferencií. Viac o tom ako na to, nájdete na strane [CSS Shadow Parts](css-shadow-parts.md).

## Branding

Elements provides application colors that can be used to theme an application to match a brand or color scheme. The default theme uses a light background, but everything from the background color to the text color is fully customizable. For more information on branding, see [Themes](themes.md).
