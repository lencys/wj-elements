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
  <title>List: Item List View Component for iOS and Android Apps</title>
  <meta name="description" content="Lists are made up of multiple rows of items containing text, icons, toggles, and more. Learn about the list view component for iOS and Android Ionic apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Komponent **List** (Zoznam) sa skladá z viacerých elementov [Item](./item) a môže obsahovať text, tlačidlá, prepínače, ikony, náhľady obrázkov, a mnoho iného. Listy vo všeobecnosti obsahujú itemy s rovnakým obsahom a zoskupujú ich do väčšieho celku.

## Základné použitie

import Basic from '@site/static/usage/v1/list/basic/index.md';

<Basic />


## Vnorený list

Nastavením hodnoty vlastnosti inset na true sa do okolia elementu pridá margin a vznikne tak vnorený zoznam.

import Inset from '@site/static/usage/v1/list/inset/index.md';

<Inset />


## Oddelovacie čiary

Vlastnosť **lines** upravuje spodný okraj itemov. Nastavením na "full" sa zobrazia okraje na celú šírku, "**inset**" zobrazí okraje upravené ľavým paddingom a "**none**" nezobrazí žiadne okraje. 

Ak je na iteme nastavená vlastnosť lines, bude mať táto vlastnosť prednosť pred vlastnosťou na liste.

import Lines from '@site/static/usage/v1/list/lines/index.md';

<Lines />


## Atribúty a Vlastnosti

### lines

|  |  |
| --- | --- |
| Popis | Štýl oddeľovacích čiar medzi elementami Item vo vnútri List elementu |
| Atribút | `lines` |
| Typ | `full`, `inset`, `none` |
| Predvolená hodnota | `inset` |


## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú verejne dostupné žiadne metódy.

## CSS Shadow Party

Pre tento komponent nie sú verejne dostupné žiadne CSS Shadow Party.

## CSS Custom Vlastnosti

| Názov | Popis |
| --- | --- |
| `--wj-list-background`        |  Pozadie List elementu           |
| `--wj-list-border-radius`     |  Zaoblenie List elementu           |
| `--wj-list-inset-padding`     |  Vnútorné odsadenie List elementu           |

## Sloty

| Názov | Popis |
| --- | --- |
| `end` | Obsah sa umiestni vpravo od textu tlačidla v LTR a vľavo v RTL. |
| `start` | Obsah je umiestnený vľavo od textu tlačidla v LTR a vpravo v RTL. |