---
title: "Carousel"
---
import Props from '@ionic-internal/component-api/v1/card/props.md';

import Events from '@ionic-internal/component-api/v1/card/events.md';

import Methods from '@ionic-internal/component-api/v1/card/methods.md';

import Parts from '@ionic-internal/component-api/v1/card/parts.md';

import CustomProps from '@ionic-internal/component-api/v1/card/custom-props.md';

import Slots from '@ionic-internal/component-api/v1/card/slots.md';

<head>
  <title>Card | Kontajner formátu karty</title>
  <meta name="description" content="Element Card je flexibilný a rozšíriteľný kontajner formátu karty. Umožňuje zobraziť širokú škálu obsahu a skladá sa z hlavičky Card Header, hlavnej časti Card Content a pätičky CardFooter." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element **Card** je flexibilný a rozšíriteľný kontajner formátu karty. Umožňuje zobraziť širokú škálu obsahu a skladá sa z hlavičky [CardHeader](../card-header) a hlavnej časti [CardContent](../card-content).

## Základné použitie

import Basic from '@site/static/usage/v1/carousel/basic/index.md';

<Basic />

## Paginaton

Vlastnosť separator slúži na zobrazenie horizontálneho oddeľovača v elemente Card Header.

import Pagination from '@site/static/usage/v1/carousel/pagination/index.md';

<Pagination />

## Karta s obrázkom

import Thumbnail from '@site/static/usage/v1/carousel/thumbnail/index.md';

<Thumbnail />

## Karta so zoznamom

import Spacing from '@site/static/usage/v1/carousel/spacing/index.md';

<Spacing />

## Úprava štýlov

### Prednastavené farebné varianty elementu Card

Vlastnosť `color` upravuje farbu pozadia a okraja karty. Nastavením tejto hodnoty sa farba tlačidla zmení na jednu z farieb prednastavenej farebnej palety.  V predvolenom nastavení má element pozadie `primary`. 

import Split from '@site/static/usage/v1/carousel/split/index.md';

<Split />


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

<Props />

## Eventy

<Events />

## Metódy

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />