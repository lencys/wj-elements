---
title: 'Pagination'
---

import Props from '@ionic-internal/component-api/v1-sk/pagination/props.md';
import Events from '@ionic-internal/component-api/v1-sk/pagination/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/pagination/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/pagination/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/pagination/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/pagination/slots.md';

<head>
  <title>Pagination | Komponent stránkovania v aplikáciách</title>
  <meta
    name="description"
    content="API dokumentácia pre wje-pagination vrátane odporúčaného použitia, atribútov, udalostí, metód, možností štýlovania a slotov."
  />
</head>

Komponent `Pagination` slúži na zobrazenie stránkovania v aplikáciách. Umožňuje používateľom navigovať medzi rôznymi stránkami obsahu a zlepšuje tak používateľskú skúsenosť pri prehliadaní veľkého množstva údajov.

## Základné použitie

import Basic from '@site/static/usage/v1/pagination/basic/index.md';

<Basic />

## Max pages

import MaxPages from '@site/static/usage/v1/pagination/max-pages/index.md';

<MaxPages />

## Round

import Round from '@site/static/usage/v1/pagination/round/index.md';

<Round />

## First, Last Buttons

import Buttons from '@site/static/usage/v1/pagination/buttons/index.md';

<Buttons />

## Show info

import Info from '@site/static/usage/v1/pagination/info/index.md';

<Info />


## Kedy použiť

Použite `wje-pagination`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
