---
title: 'Color Picker'
---

import Props from '@ionic-internal/component-api/v1-sk/color-picker/props.md';
import Events from '@ionic-internal/component-api/v1-sk/color-picker/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/color-picker/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/color-picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/color-picker/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/color-picker/slots.md';

<head>
  <title>Color Picker | WebJET Element pre vybratie farby z farebnej palety</title>
  <meta
    name="description"
    content="Color picker je element, ktorý zobrazuje farebnú paletu a umožňuje používateľom vybrať jednu z jej farieb. Zobrazuje hex kód vybranej farby, ktorý je používateľom možné jednoducho."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Color picker je element, ktorý zobrazuje farebnú paletu a umožňuje používateľom vybrať jednu z jej farieb. Zobrazuje hex kód vybranej farby, ktorý je používateľom možné jednoducho skopírovať.

## Základné použitie

import Basic from '@site/static/usage/v1/color-picker/basic/index.md';

<div className="xxlarge">

<Basic />

</div>


## Kedy použiť

Použite `wje-color-picker`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
