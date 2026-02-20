---
title: 'Toggle'
---

import Props from '@ionic-internal/component-api/v1-sk/toggle/props.md';
import Events from '@ionic-internal/component-api/v1-sk/toggle/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/toggle/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/toggle/slots.md';

<head>
  <title>Toggle | Element umožňujúci prepínať medzi dvoma stavmi</title>
  <meta
    name="description"
    content="Toggle elementy sú malé interaktívne ovládacie prvky, ktoré umožňujú prepínať medzi dvoma stavmi. Môžete ich aktivovať kliknutím myši."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toggle elementy sú malé interaktívne ovládacie prvky, ktoré umožňujú prepínať medzi dvoma stavmi. Môžete ich aktivovať kliknutím myši. Najčastejšie sa používajú na aktiváciu a deaktiváciu funkcionalít prípadne na prepínanie medzi zobrazením a skrytím iných elementov.

## Basic Usage

import Basic from '@site/static/usage/v1/toggle/basic/index.md';

<Basic />

## Colors

import Colors from '@site/static/usage/v1/toggle/colors/index.md';

<div className="large">
  <Colors />
</div>


## Kedy použiť

Použite `wje-toggle`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
