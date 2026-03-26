---
title: 'Input'
---

import Props from '@ionic-internal/component-api/v1-sk/input/props.md';
import Events from '@ionic-internal/component-api/v1-sk/input/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/input/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/input/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/input/slots.md';

<head>
  <title>Input: Rozšírenie štandardného Input elementu</title>
  <meta
    name="description"
    content="Input element rozširuje možnosti štandardného HTML inputu pokročilými funkciami a možnosťami prispôsobenia."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Input element rozširuje možnosti štandardného HTML inputu pokročilými funkciami a možnosťami prispôsobenia.

## Základné použitie

Ukážka zobrazuje input v základnom stave bez rozšírených režimov, aby bolo jasné predvolené správanie a markup.

import Basic from '@site/static/usage/v1/input/basic/index.md';

<div className="xxlarge">

{' '}
<Basic />

</div>

## Použitie vo formulári

Ukážka vkladá input do skutočného formulára, takže je vidieť submit flow a väzbu na bežné formové správanie.

import Form from '@site/static/usage/v1/input/form/index.md';

<Form />

## Variant: standard

Input podporuje aj vizuál štandardného HTML inputu pridaním vlastnosti `variant` s hodnotou `standard`.

import Standard from '@site/static/usage/v1/input/standard/index.md';

<Standard />

## Standard vo formulári

Ukážka kombinuje štandardný variant inputu s formulárovým kontextom, aby bolo jasné, ako sa správa v bežnom formulárovom layoute.

import StandardForm from '@site/static/usage/v1/input/standard-form/index.md';

<StandardForm />

## Search

V kombinácii s elementorm `Button` vytvorí plnohodnotné vyhľadávacie pole.

import Search from '@site/static/usage/v1/input/search/index.md';

<div className="small">

<Search />

</div>

## Pickers

V kombinácii s elementorm `Button` vytvorí plnohodnotné vyhľadávacie pole.

import Pickers from '@site/static/usage/v1/input/pickers/index.md';

<Pickers />

## Clearable

V kombinácii s elementorm `Button` vytvorí plnohodnotné vyhľadávacie pole.

import Clearable from '@site/static/usage/v1/input/clearable/index.md';

<Clearable />


## Kedy použiť

Použite `wje-input`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
