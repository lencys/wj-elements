---
title: 'Col'
---

import Props from '@ionic-internal/component-api/v1-sk/col/props.md';
import Events from '@ionic-internal/component-api/v1-sk/col/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/col/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/col/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/col/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/col/slots.md';

<head>
  <title>Col | Horizontálne rozmiestnenie obsahu na základe veľkosti obrazovky.</title>
  <meta
    name="description"
    content="Komponent **Col** (stĺpec) je základným stavebným prvkom Gridu a umožňuje horizontálne rozmiestniť obsah a upraviť jeho usporiadanie na základe veľkosti obrazovky."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent **Col** (stĺpec) je základným stavebným prvkom [Gridu](./grid) a umožňuje horizontálne rozmiestniť obsah a upraviť jeho usporiadanie na základe veľkosti obrazovky. Používa sa pridaním do vnútra [Row](./row) elementu.

:::note Poznámka

Pre viac informácií o použití **Col** sa presuňte do dokumentácie systému [**Grid**](./grid).

:::


## Kedy použiť

Použite `wje-col` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
