---
title: "Card"
---

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element **Card** je flexibilný a rozšíriteľný kontajner formátu karty. Umožňuje zobraziť širokú škálu obsahu a skladá sa z hlavičky [CardHeader](./card-header), hlavnej časti [CardContent](./card-content) a pätičky [CardFooter](./card-footer).

## Základné použitie

import Basic from '@site/static/usage/v1/card/basic/index.md';

<Basic />

## Separator

Vlastnosť separator slúži na zobrazenie horizontálneho oddelovača v elementer Card Header.

import Separator from '@site/static/usage/v1/card/separator/index.md';

<Separator />

## Karta s obrázkom

import Media from '@site/static/usage/v1/card/media/index.md';

<Media />

## Karta so zoznamom

import List from '@site/static/usage/v1/card/list/index.md';

<List />

## Úprava štýlov

### Prednastavené farebné varianty elementu Card

Vlastnosť `color` upravuje farbu pozadia a okraja karty. Nastavením tejto hodnoty sa farba tlačidla zmení na jednu z farieb prednastavenej farebnej palety.  V predvolenom nastavení má element pozadie `primary`. 

import Colors from '@site/static/usage/v1/card/theming/colors/index.md';

<Colors />


### CSS Custom Vlastnosti

import CssProperties from '@site/static/usage/v1/card/theming/css-properties/index.md';

<CssProperties />

```html
<wj-card id="custom">
  <wj-card-header>
    <wj-card-subtitle>Subtitle</wj-card-subtitle>
    <wj-card-title>Title</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </wj-card-content>
</wj-card>
<style>
  #custom {
    --wj-card-margin-top: 1rem;
    --wj-card-margin-bottom: 1rem;
    --wj-card-margin-inline: 1rem;
    --wj-color-contrast: #f0f;
    --wj-card-border-color: #000;
    --wj-border-size: 2px;
    --background-color: #000!important;
    --wj-font-size: .8rem;
    --wj-border-radius: 0;
  }
</style>
```

## Atribúty a Vlastnosti

### color

|  |  |
| --- | --- |
| Popis | Farba, ktorá sa má použiť z palety farieb aplikácie. Predvolené možnosti sú: `"primary"`, `"secondary"`, `"complete"`, `"success"`, `"warning"`, `"danger"`, `"info"`, a `"menu"`. |
| Atribút | color |
| Typ | `"danger"` ｜ `"menu"` ｜ `"info"` ｜ `"primary"` ｜ `"secondary"` ｜ `"success"` ｜ `"warning"` ｜ undefined |
| Predvolená hodnota | `“primary”` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

| Názov | Popis |
| --- | --- |
| `-—wj-card-border-color` | Definuje farbu okraja karty. |
| `--wj-card-margin-bottom` | Definuje veľkosť medzery od dolného okraja karty |
| `--wj-card-margin-inline` | Definuje veľkosť medzery od pravého a ľavého okraja karty |
| `--wj-card-margin-top` | Definuje veľkosť medzery od horného okraja karty |
| `--wj-color-base` | Definuje farbu pozadia karty |
| `--wj-color-contrast` | Definuje farbu textu karty |

## Sloty

Pre tento komponent nie sú k dispozícií žiadne sloty.