---
title: 'FileUpload Item'
---

import Props from '@ionic-internal/component-api/v1-sk/file-upload-item/props.md';
import Events from '@ionic-internal/component-api/v1-sk/file-upload-item/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/file-upload-item/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/file-upload-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/file-upload-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/file-upload-item/slots.md';

<head>
  <title>FileUploadItem | Položka (súbor) v rámci FileUpload komponentu</title>
  <meta
    name="description"
    content="Element FileUploadItem predstavuje individuálnu položku (súbor) v rámci FileUpload komponentu. Zobrazuje podrobnosti, ako je názov súboru, veľkosť, priebeh nahrávania, a poskytuje akcie,."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element FileUploadItem predstavuje individuálnu položku (súbor) v rámci FileUpload komponentu. Zobrazuje podrobnosti, ako je názov súboru, veľkosť, priebeh nahrávania, a poskytuje akcie, ako je vymazanie súboru. Tento komponent je určený na použitie v kontexte FileUpload komponentu.

Pre viac informácií o použití FileUploadItem sa presuňte do dokumentácie elementu [FileUpload](./file-upload)

## Základné použitie

Ukážka zobrazuje jednu položku nahrávaného súboru v predvolenom stave, teda tak, ako sa bude javiť v zozname po výbere súboru.

import Basic from '@site/static/usage/v1/file-upload-item/basic/index.md';

<Basic />

## S obrázkom

Ukážka používa image variant file-upload-item, aby bolo vidieť, ako sa líši náhľadová položka od všeobecného súboru.

import Icon from '@site/static/usage/v1/file-upload-item/image/index.md';

<Icon />

## Is uploaded

Atribút `is-uploaded` zobrazí element v stave nahratého súboru.

import IsUploaded from '@site/static/usage/v1/file-upload-item/isuploaded/index.md';

<IsUploaded />


## Kedy použiť

Použite `wje-file-upload-item`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
