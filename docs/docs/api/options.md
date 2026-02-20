---
title: 'Options'
---

import Props from '@ionic-internal/component-api/v1-sk/options/props.md';
import Events from '@ionic-internal/component-api/v1-sk/options/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/options/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/options/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/options/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/options/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Stránka pre `wje-options` bola automaticky doplnená, aby dokumentácia pokrývala aktuálnu verziu komponentov.
Detailné návody na použitie a odporúčania doplníme v ďalšej obsahovej fáze.


## Kedy použiť

Použite `wje-options`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

## Kedy nepoužiť

Nepoužívajte ho len ako vizuálny dekoratívny prvok bez interakcie. V takom prípade uprednostnite prezentačné komponenty.

## Prístupnosť

Vždy prepojte komponent s popisom (`label`/`aria-label`), zachovajte ovládanie klávesnicou a pri validačných chybách zobrazte zrozumiteľnú správu.

## Odporúčané postupy

- Majte jednotné validačné pravidlá a error stavy naprieč celým formulárom.
- Pri asynchrónnych operáciách zobrazte stav načítania alebo disabled stav.
- Pri zložitých formulároch preferujte menšie sekcie a okamžitú spätnú väzbu.

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
