---
title: 'Card'
---

import Props from '@ionic-internal/component-api/v1-sk/card/props.md';
import Events from '@ionic-internal/component-api/v1-sk/card/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/card/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/card/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/card/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/card/slots.md';

<head>
  <title>Card | Kontajner formátu karty</title>
  <meta
    name="description"
    content="Element **Card** je flexibilný a rozšíriteľný kontajner formátu karty. Umožňuje zobraziť širokú škálu obsahu a skladá sa z hlavičky CardHeader a hlavnej časti CardContent."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element **Card** je flexibilný a rozšíriteľný kontajner formátu karty. Umožňuje zobraziť širokú škálu obsahu a skladá sa z hlavičky [CardHeader](./card-header) a hlavnej časti [CardContent](./card-content).

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

Vlastnosť `color` upravuje farbu pozadia a okraja karty. Nastavením tejto hodnoty sa farba tlačidla zmení na jednu z farieb prednastavenej farebnej palety. V predvolenom nastavení má element pozadie `primary`.

import Colors from '@site/static/usage/v1/card/theming/colors/index.md';

<Colors />

### CSS vlastné premenné

import CssProperties from '@site/static/usage/v1/card/theming/css-properties/index.md';

<CssProperties />

```html
<wje-card id="custom">
  <wje-card-header>
    <wje-card-subtitle>Subtitle</wje-card-subtitle>
    <wje-card-title>Title</wje-card-title>
  </wje-card-header>
  <wje-card-content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </wje-card-content>
</wje-card>
<style>
  #custom {
    --wje-card-margin-top: 1rem;
    --wje-card-margin-bottom: 1rem;
    --wje-card-margin-inline: 1rem;
    --wj-color-contrast: #f0f;
    --wje-card-border-color: #000;
    --wj-border-size: 2px;
    --background-color: #000 !important;
    --wj-font-size: 0.8rem;
    --wj-border-radius: 0;
  }
</style>
```


## Kedy použiť

Použite `wje-card` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

## Kedy nepoužiť

Nepoužívajte ho ako náhradu za štruktúrované dáta tam, kde je potrebná presná interakcia.

## Prístupnosť

Doplňte alternatívny text pre obrázky, čitateľné kontrasty a textové ekvivalenty pre ikony bez popisu.

## Odporúčané postupy

- Komprimujte médiá a používajte lazy loading pri veľkých zoznamoch.
- Pri kartách a zoznamoch držte konzistentné informačné priority.
- Neopakujte rovnakú informáciu súčasne textom aj ikonou bez pridanej hodnoty.

## Atribúty a vlastnosti

<Props />

## Udalosti

<Events />

## Metódy

<Methods />

## CSS tieňové časti

<Parts />

## CSS vlastné premenné

<CustomProps />

## Sloty

<Slots />
