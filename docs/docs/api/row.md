---
title: 'Row'
---

import Props from '@ionic-internal/component-api/v1-sk/row/props.md';
import Events from '@ionic-internal/component-api/v1-sk/row/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/row/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/row/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/row/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/row/slots.md';

<head>
  <title>Row | Horizontálny kontajner pre systém Grid</title>
  <meta
    name="description"
    content="Row (Riadok) je základným prvkom responzívneho Grid systému a slúži ako horizontálny kontajner na usporiadanie a zarovnanie stĺpcov (columns)."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Row (Riadok) je základným prvkom responzívneho [Grid](./grid) systému a slúži ako horizontálny kontajner na usporiadanie a zarovnanie stĺpcov ([columns](./col)).

:::note Poznámka

Pre viac informácií o použití **Row** sa presuňte do dokumentácie systému [**Grid**](./grid).

:::


## Kedy použiť

Použite `wje-row` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

## Kedy nepoužiť

Nepoužívajte ho na riešenie biznis logiky ani na stavovú orchestráciu komponentov.

## Prístupnosť

Zachovajte semantiku dokumentu (`header`, `main`, `aside`, `footer`) a logické poradie fokusovateľných prvkov.

## Odporúčané postupy

- Najprv definujte desktop/mobile breakpoints a až potom dolaďujte detaily.
- Preferujte konzistentné spacing tokeny pred ad-hoc margin/padding hodnotami.
- Pri layoutoch s overflow vždy otestujte klávesnicovú navigáciu a čítačky.

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
