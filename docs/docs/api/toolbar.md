---
title: 'Toolbar'
---

import Props from '@ionic-internal/component-api/v1-sk/toolbar/props.md';
import Events from '@ionic-internal/component-api/v1-sk/toolbar/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/toolbar/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/toolbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/toolbar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/toolbar/slots.md';

<head>
  <title>Toolbar | Flexibilný kontajner určený na zobrazovanie rôzneho obsahu organizovaným spôsobom</title>
  <meta
    name="description"
    content="Element Toolbar je flexibilný kontajner určený na zobrazovanie rôzneho obsahu organizovaným spôsobom, ktorý sa zvyčajne používa v hornej časti webových aplikácií alebo stránok."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Toolbar je flexibilný kontajner určený na zobrazovanie rôzneho obsahu organizovaným spôsobom, ktorý sa zvyčajne používa v hornej časti webových aplikácií alebo stránok. Môže obsahovať tlačidlá, navigáciu, pole vyhľadávania, a iné. Podporuje zarovnanie obsahu a tiež ho možno prilepiť k hornej časti obrazovky.

Súčasťou Toolbar je element [ToolbarActions](./toolbar-actions), ktorý zoskupuje rôzne akcie v podobe tlačidiel do jedného celku.

## Základné použitie

Ukážka predstavuje základný toolbar s predvolenou skladbou obsahu a ovládacích prvkov.

import Basic from '@site/static/usage/v1/toolbar/basic/index.md';

<Basic />

## Dynamický breadcrumbs

Ukážka skladá toolbar z dynamicky generovaného breadcrumb trailu, čo sa hodí pre kontextovo závislú navigáciu.

import DynamicBreadcrumbs from '@site/static/usage/v1/toolbar/dynamic-breadcrumbs/index.md';

<DynamicBreadcrumbs />

## Dynamický action

Ukážka mení akcie v toolbare podľa kontextu, takže je vidieť, ako reagovať na stav aktuálnej obrazovky.

import DynamicAction from '@site/static/usage/v1/toolbar/dynamic-action/index.md';

<DynamicAction />


## Kedy použiť

Použite `wje-toolbar` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
