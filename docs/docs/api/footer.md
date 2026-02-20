---
title: 'Footer'
---

import Props from '@ionic-internal/component-api/v1-sk/footer/props.md';
import Events from '@ionic-internal/component-api/v1-sk/footer/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/footer/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/footer/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/footer/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/footer/slots.md';

<head>
  <title>Footer | Element určený na tvorbu layoutov</title>
  <meta
    name="description"
    content="Footer je súčasťou elementov určených na tvorbu layoutov a zobrazuje sa v spodnej časti obrazovky. Používa sa väčšinou na zobrazenie dodatočných informácií."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Footer je súčasťou elementov určených na tvorbu layoutov a zobrazuje sa v spodnej časti obrazovky. Používa sa väčšinou na zobrazenie dodatočných informácií.

## Príklady použitia

:::note
Pre informácie o použití **Footer** elementu sa presuňte do dokumentácie [**Layoutu**](./layout).
:::


## Kedy použiť

Použite `wje-footer` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
