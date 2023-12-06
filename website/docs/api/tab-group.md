---
title: "TabGroup"
---

<head>
  <title>TabGroup: Tab-Based Component for App Top-Level Navigation</title>
  <meta name="description" content="Tabs are top-level components to implement tab-based navigation. Ion-tabs have no styling & work as router outlets for navigation that behaves like native apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

TabGroup zobrazuje navigáciu založenú na záložkách, ktorá umožňuje používateľom prepínať sa a zobrazovať rôzne časti obsahu aplikácie bez potreby prechádzať na inú stránku. Skladá sa z jednotlivých záložiek [Tab](tab.md) a [Panelov](tab-panel.md), ktoré po kliknutí na záložku zobrazia jej obsah.
TabGroup element podporuje viacero variantov vzhľadu pomocou atribútu `variant`.

## Základné použitie

Element `Card` bol použítý len za účelom tejto ukážky.

import Basic from '@site/static/usage/v1/tab-group/basic/index.md';

<Basic />

## Varianty umiestnenia tabov

Pridaním vlastnosti `variant` je možné zmeniť umiestnenie tabov. Podporované sú hodnoty `start`, `end` a `bottom`.

### Start

import Start from '@site/static/usage/v1/tab-group/start/index.md';

<Start />

### End

import End from '@site/static/usage/v1/tab-group/end/index.md';

<End />

### Bottom

import Bottom from '@site/static/usage/v1/tab-group/bottom/index.md';

<Bottom />

## Atribúty a Vlastnosti

### variant

|  |  |
| --- | --- |
| Popis |  Určuje variantu rozloženia TabGroup. Medzi možné hodnoty patrí `start`, `end` a `bottom`.   |
| Atribút | `variant` |
| Typ | `start`, `end`,`bottom`, `undefined` |
| Predvolená hodnota | `undefined` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Party

Pre tento komponent nie sú k dispozícii žiadne shadow party.


## CSS Custom Vlastnosti


| Názov                      | Description                                      |
|----------------------------|--------------------------------------------------|
| `--wj-font-size`           | Určuje veľkosť písma.                        |
| `--wj-tab-color-active`    | Určuje farbu pozadia aktívneho tab elementu. |
| `--wj-tab-color-hover`     | Určuje farbu pozadia tab elementu po ukázaní myšou.   |
| `--wj-tab-font-weight`     | Nastavuje váhu písma.                    |
| `--wj-tab-letter-spacing`  | Nastavuje vzdiaenosť medzi písmenami.    |
| `--wj-tab-padding-bottom`  | Určuje spodné odsadenie tabu.            |
| `--wj-tab-padding-inline`  | Určuje horizontálne odsadenie tabu.      |
| `--wj-tab-padding-top`     | Určuje horné odsadenie tabu.             |
| `--wj-tab-text-transfrom`  | Nastavuje transformáciu textu v tabe.    |


## Sloty

| Názov | Popis |
|-----------|--- |
| `nav`      | Obsah sa umiestni do `nav` elementu. |
