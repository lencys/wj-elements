---
title: 'Aside'
---

import Props from '@ionic-internal/component-api/v1-sk/aside/props.md';
import Events from '@ionic-internal/component-api/v1-sk/aside/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/aside/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/aside/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/aside/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/aside/slots.md';

<head>
  <title>Layout: Aside element</title>
  <meta
    name="description"
    content="Aside je prvok na tvorbu layoutov a zobrazuje sa vedľa elementu Main. Používa sa väčšinou na zobrazenie doplnkových informácií k hlavnému obsahu, prípadne navigácie."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Aside je prvok na tvorbu layoutov a zobrazuje sa vedľa elementu [Main](./main). Používa sa väčšinou na zobrazenie doplnkových informácií k hlavnému obsahu, prípadne navigácie.

## Príklady použitia

:::note
Pre informácie o použítí **Aside** elementu sa presuňte do dokumentácie [**Layoutu**](./layout).
:::


## Kedy použiť

Použite `wje-aside` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
