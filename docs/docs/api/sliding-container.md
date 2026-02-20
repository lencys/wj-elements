---
title: 'Sliding Container'
---

import Props from '@ionic-internal/component-api/v1-sk/sliding-container/props.md';
import Events from '@ionic-internal/component-api/v1-sk/sliding-container/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/sliding-container/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/sliding-container/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/sliding-container/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/sliding-container/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Stránka pre `wje-sliding-container` bola automaticky doplnená, aby dokumentácia pokrývala aktuálnu verziu komponentov.
Detailné návody na použitie a odporúčania doplníme v ďalšej obsahovej fáze.


## Kedy použiť

Použite `wje-sliding-container` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
