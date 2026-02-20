---
title: 'Toolbar Action'
---

import Props from '@ionic-internal/component-api/v1-sk/toolbar-action/props.md';
import Events from '@ionic-internal/component-api/v1-sk/toolbar-action/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/toolbar-action/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/toolbar-action/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/toolbar-action/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/toolbar-action/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Stránka pre `wje-toolbar-action` bola automaticky doplnená, aby dokumentácia pokrývala aktuálnu verziu komponentov.
Detailné návody na použitie a odporúčania doplníme v ďalšej obsahovej fáze.


## Kedy použiť

Použite `wje-toolbar-action` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
