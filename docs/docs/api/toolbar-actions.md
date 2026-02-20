---
title: 'ToolbarActions'
---

import Props from '@ionic-internal/component-api/v1-sk/toolbar-actions/props.md';
import Events from '@ionic-internal/component-api/v1-sk/toolbar-actions/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/toolbar-actions/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/toolbar-actions/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/toolbar-actions/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/toolbar-actions/slots.md';

<head>
  <title>ToolbarActions | Obaľovací kontajner pre tlačidlá vložené do elementu Toolbar</title>
  <meta
    name="description"
    content="Element ToolbarActions slúži ako obaľovací kontajner pre tlačidlá vložené do elementu Toolbar a zoskupuje tak rôzne akcie toolbaru do jedného celku."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element ToolbarActions slúži ako obaľovací kontajner pre tlačidlá vložené do elementu Toolbar a zoskupuje tak rôzne akcie toolbaru do jedného celku.

:::note
Pre viac informácií o použití ToolbarActions prejdite do dokumentácie elementu [**Toolbar**](./toolbar).
:::


## Kedy použiť

Použite `wje-toolbar-actions` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
