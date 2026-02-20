---
title: 'Input File'
---

import Props from '@ionic-internal/component-api/v1-sk/input-file/props.md';
import Events from '@ionic-internal/component-api/v1-sk/input-file/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/input-file/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/input-file/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/input-file/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/input-file/slots.md';

<head>
  <title>Input File: Rozšírenie štandardného Input elementu</title>
  <meta
    name="description"
    content="Input File element rozširuje Input element o možnosť nahrávania súborov."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

`Input File` element rozširuje `Input` element o možnosť nahrávania súborov.

## Základné použitie

import Basic from '@site/static/usage/v1/input-file/basic/index.md';

<Basic />


## Kedy použiť

Použite `wje-input-file`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
