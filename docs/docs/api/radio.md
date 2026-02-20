---
title: 'Radio'
---

import Props from '@ionic-internal/component-api/v1-sk/radio/props.md';
import Events from '@ionic-internal/component-api/v1-sk/radio/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/radio/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/radio/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/radio/slots.md';

<head>
  <title>Radio komponent | Vylepšená verzia štandardného HTML radio elementu</title>
  <meta
    name="description"
    content="Radio element je upravená verzia štandardného HTML radio elementu, rozšírená o štýly pre dosiahnutie vizuálne konzistentnejšieho používateľského rozhrania naprieč rôznymi zariadeniami."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Radio element je upravená verzia štandardného HTML radio elementu, rozšírená o štýly pre dosiahnutie vizuálne konzistentnejšieho používateľského rozhrania naprieč rôznymi zariadeniami. Funguje podobne ako štandardné rádio tlačidlo a umožňuje používateľom vybrať jednu z množiny možností. Používa sa vo vnútri elementu [radio group](./radio-group), ktorý im pridáva zarovnanie a zoskupuje ich do jedného celku.

## Základné použitie

import Basic from '@site/static/usage/v1/radio/basic/index.md';

<Basic />

## Inline

Pridaním vlastnosti `inline` sa elementy usporiadajú v horizontálnom rozložení.

import Inline from '@site/static/usage/v1/radio/inline/index.md';

<Inline />

## Úprava štýlov

### color

Pomocou vlastnosti `color` je možné zmeniť farbu radio elementu.

import Color from '@site/static/usage/v1/radio/color/index.md';

<Color />


## Kedy použiť

Použite `wje-radio`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
