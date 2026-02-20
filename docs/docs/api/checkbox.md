---
title: 'Checkbox'
---

import Props from '@ionic-internal/component-api/v1-sk/checkbox/props.md';
import Events from '@ionic-internal/component-api/v1-sk/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/checkbox/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/checkbox/slots.md';

<head>
  <title>Checkbox | WebJET Element pre vybratie viacerých možností</title>
  <meta
    name="description"
    content="Checkbox, alebo tiež začiarkavacie políčko, je element, ktorý umožňuje používateľom vybrať jednu alebo viac možností z množiny. Kliknutím na checkbox zmeníte jeho stav na true alebo false."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Checkbox, alebo tiež začiarkavacie políčko, je element, ktorý umožňuje používateľom vybrať jednu alebo viac možností z množiny. Kliknutím na checkbox zmeníte jeho stav na `true` alebo `false`.

## Základné použitie

import Basic from '@site/static/usage/v1/checkbox/basic/index.md';

<Basic />

## Placement End

import End from '@site/static/usage/v1/checkbox/end/index.md';

<End />

## Color

import Color from '@site/static/usage/v1/checkbox/color/index.md';

<Color />

## Indeterminate checkbox

Po pridaní atribútu `indeterminate` sa zobrazí checkbox, ktorého predvolený stav je neutrálny, tzn. ani `true` ani `false`.

import Indeterminate from '@site/static/usage/v1/checkbox/indeterminate/index.md';

<Indeterminate />

## Variant

Pridaní atribútu `variant` s hodnotou `circle` zobrazíte checkbox v okrúhlom tvare.

import Variant from '@site/static/usage/v1/checkbox/variant/index.md';

<Variant />


## Kedy použiť

Použite `wje-checkbox`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
