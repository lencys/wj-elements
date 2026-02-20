---
title: 'Main'
---

import Props from '@ionic-internal/component-api/v1-sk/main/props.md';
import Events from '@ionic-internal/component-api/v1-sk/main/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/main/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/main/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/main/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/main/slots.md';

<head>
  <title>Main | Element určený na tvorbu layoutov</title>
  <meta
    name="description"
    content="Main je prvok na tvorbu layoutov a zobrazuje sa vedľa Aside elementu. Používa sa väčšinou na zobrazenie hlavného obsahu."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Main je prvok na tvorbu layoutov a zobrazuje sa vedľa [Aside](./aside) elementu. Používa sa väčšinou na zobrazenie hlavného obsahu.

## Príklady použitia

:::note
Pre informácie o použití **Main** elementu sa presuňte do dokumentácie [**Layoutu**](./layout).
:::


## Kedy použiť

Použite `wje-main` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
