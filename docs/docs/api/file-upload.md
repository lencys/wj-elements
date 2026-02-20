---
title: 'FileUpload'
---

import Props from '@ionic-internal/component-api/v1-sk/file-upload/props.md';
import Events from '@ionic-internal/component-api/v1-sk/file-upload/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/file-upload/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/file-upload/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/file-upload/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/file-upload/slots.md';

<head>
  <title>FileUpload | Nahrávanie súborov pre webové aplikácie</title>
  <meta
    name="description"
    content="Komponent FileUpload poskytuje univerzálnu funkciu nahrávania súborov pre webové aplikácie. Podporuje prispôsobiteľné atribúty, ako sú povolené typy súborov, veľkosť častí alebo tiež."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent FileUpload poskytuje univerzálnu funkciu nahrávania súborov pre webové aplikácie. Podporuje prispôsobiteľné atribúty, ako sú povolené typy súborov, veľkosť častí alebo tiež maximálnu veľkosť súboru, spolu s metódami drag-and-drop a tradičným výberom súborov.

## Základné použitie

import Basic from '@site/static/usage/v1/file-upload/basic/index.md';

<Basic />

## S ikonou

import Icon from '@site/static/usage/v1/file-upload/icon/index.md';

<Icon />


## Kedy použiť

Použite `wje-file-upload`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
