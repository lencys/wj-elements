---
title: Card
---

import Props from '@ionic-internal/component-api/v1/card/props.md';
import Events from '@ionic-internal/component-api/v1/card/events.md';
import Methods from '@ionic-internal/component-api/v1/card/methods.md';
import Parts from '@ionic-internal/component-api/v1/card/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/card/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/card/slots.md';


  <title>Card | Kontajner formátu karty</title>
  <meta name="description" content="Element Card je flexibilný a rozšíriteľný kontajner formátu karty. Umožňuje zobraziť širokú škálu obsahu a skladá sa z hlavičky Card Header, hlavnej časti Card Content a pätičky CardFooter." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element **Card** je flexibilný a rozšíriteľný kontajner formátu karty. Umožňuje zobraziť širokú škálu obsahu a skladá sa z hlavičky [CardHeader](./card-header), hlavnej časti [CardContent](./card-content) a pätičky [CardFooter](./card-footer).

## Základné použitie

import Basic from '@site/static/usage/v1/card/basic/index.md';

<Basic />

## Separator

Vlastnosť separator slúži na zobrazenie horizontálneho oddeľovača v elemente Card Header.

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
