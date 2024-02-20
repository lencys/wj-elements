---
title: "List"
---
import Props from '@ionic-internal/component-api/v1/list/props.md';
import Events from '@ionic-internal/component-api/v1/list/events.md';
import Methods from '@ionic-internal/component-api/v1/list/methods.md';
import Parts from '@ionic-internal/component-api/v1/list/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/list/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/list/slots.md';

<head>
  <title>List | Komponent zobrazenia zoznamu položiek</title>
  <meta name="description" content="Komponent List (Zoznam) sa skladá z viacerých elementov [Item](./item) a môže obsahovať text, tlačidlá, prepínače, ikony, náhľady obrázkov, a mnoho iného. Listy vo všeobecnosti obsahujú položky s rovnakým obsahom a zoskupujú ich do väčšieho celku." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Komponent **List** (Zoznam) sa skladá z viacerých elementov [Item](./item) (položiek) a môže obsahovať text, tlačidlá, prepínače, ikony, náhľady obrázkov, a mnoho iného. Listy vo všeobecnosti obsahujú položky s rovnakým obsahom a zoskupujú ich do väčšieho celku.

## Základné použitie

import Basic from '@site/static/usage/v1/list/basic/index.md';

<Basic />


## Vnorený list

Nastavením hodnoty vlastnosti inset na true sa do okolia elementu pridá margin a vznikne tak vnorený zoznam.

import Inset from '@site/static/usage/v1/list/inset/index.md';

<Inset />


## Oddeľovanie čiary

Vlastnosť **lines** upravuje spodný okraj itemov. Nastavením na "full" sa zobrazia okraje na celú šírku, "**inset**" zobrazí okraje upravené ľavým paddingom a "**none**" nezobrazí žiadne okraje. 

Ak je na iteme nastavená vlastnosť lines, bude mať táto vlastnosť prednosť pred vlastnosťou na liste.

import Lines from '@site/static/usage/v1/list/lines/index.md';

<Lines />


## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />