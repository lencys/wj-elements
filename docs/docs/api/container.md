---
title: 'Container'
---

import Props from '@ionic-internal/component-api/v1-sk/container/props.md';
import Events from '@ionic-internal/component-api/v1-sk/container/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/container/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/container/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/container/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/container/slots.md';

<head>
  <title>Container | Kľúčový prvok pre tvorbu layoutov</title>
  <meta
    name="description"
    content="Container je kľúčový prvok Layoutu, ktorý sa používa na obalenie obsahu stránky. Je navrhnutý tak, aby poskytoval konzistentné rozstupy, odsadenia a zarovnania elementov, ktoré sa v ňom."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Container je kľúčový prvok Layoutu, ktorý sa používa na obalenie obsahu stránky. Je navrhnutý tak, aby poskytoval konzistentné rozstupy, odsadenia a zarovnania elementov, ktoré sa v ňom nachádzajú, a zabezpečoval tak správne zobrazenie a tiež prispôsobenie sa rôznym zariadeniam a veľkostiam obrazovky.

:::note
Pre informácie o použití **Container** elementu sa presuňte do dokumentácie [**Layoutu**](./layout).
:::


## Kedy použiť

Použite `wje-container` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
