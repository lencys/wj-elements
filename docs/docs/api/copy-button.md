---
title: 'Copy button'
---

import Props from '@ionic-internal/component-api/v1-sk/copy-button/props.md';
import Events from '@ionic-internal/component-api/v1-sk/copy-button/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/copy-button/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/copy-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/copy-button/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/copy-button/slots.md';

<head>
  <title>Copy button | Skopírovanie do clipboardu na jeden klik</title>
  <meta
    name="description"
    content="Copy button umožňuje jedným kliknutím skopírovať želaný obsah do clipboardu. Podporované sú input, textarea, wje-input, wje-label a a element."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Copy button umožňuje jedným kliknutím skopírovať želaný obsah do clipboardu. Podporované sú `input`, `textarea`, `wje-input`, `wje-label` a `a` element.

## Základné použitie

import Basic from '@site/static/usage/v1/copy-button/basic/index.md';

<Basic />

## Custom label

Pridaním vlastnosti `label` a `label-success` zmeníte text tooltipu po skopírovaní hodnoty.

import CustomLabel from '@site/static/usage/v1/copy-button/custom-label/index.md';

<CustomLabel />

## Element

import Element from '@site/static/usage/v1/copy-button/element/index.md';

<Element />

## Input

import Input from '@site/static/usage/v1/copy-button/input/index.md';

<Input />

## WJE-Input

import WJInput from '@site/static/usage/v1/copy-button/wj-input/index.md';

<WJInput />

## Hyperlink

import Hyperlink from '@site/static/usage/v1/copy-button/hyperlink/index.md';

<Hyperlink />


## Kedy použiť

Použite `wje-copy-button`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
