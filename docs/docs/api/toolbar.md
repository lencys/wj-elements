---
title: "Toolbar"
---

<head>
  <title>Toolbar | Flexibilný kontajner určený na zobrazovanie rôzneho obsahu organizovaným spôsobom</title>
  <meta name="description" content="Element Toolbar je flexibilný kontajner určený na zobrazovanie rôzneho obsahu organizovaným spôsobom, ktorý sa zvyčajne používa v hornej časti webových aplikácií alebo stránok. Môže obsahovať tlačidlá, navigáciu, pole vyhľadávania, a iné." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Toolbar je flexibilný kontajner určený na zobrazovanie rôzneho obsahu organizovaným spôsobom, ktorý sa zvyčajne používa v hornej časti webových aplikácií alebo stránok. Môže obsahovať tlačidlá, navigáciu, pole vyhľadávania, a iné. Podporuje zarovnanie obsahu a tiež ho možno prilepiť k hornej časti obrazovky.

Súčasťou Toolbar je element [ToolbarActions](./toolbar-actions), ktorý zoskupuje rôzne akcie v podobe tlačidiel do jedného celku.

## Základné použitie

import Basic from '@site/static/usage/v1/toolbar/basic/index.md';

<Basic />

## Dynamický breadcrumbs

import DynamicBreadcrumbs from '@site/static/usage/v1/toolbar/dynamic-breadcrumbs/index.md';

<DynamicBreadcrumbs />

## Dynamický action

import DynamicAction from '@site/static/usage/v1/toolbar/dynamic-action/index.md';

<DynamicAction />

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Party

Pre tento komponent nie sú k dispozícií žiadne CSS shadow party.

## CSS Custom Vlastnosti

| Názov                           | Popis       |
|---------------------------------|-------------|
| `--wj-toolbar-backcolor`        | Nastavuje farbu pozadia toolbaru. |
| `--wj-toolbar-border-color`     | Určuje farbu okrajov toolbaru. |
| `--wj-toolbar-min-height`       | Určuje minimálnu výšku toolbaru. |
| `--wj-toolbar-padding-bottom`   | Určuje spodné vnútorné odsadenie toolbaru. |
| `--wj-toolbar-padding-inline`   | Určuje vnútorné horizontálne odsadenie toolbaru. |
| `--wj-toolbar-padding-top`      | Určuje horné vnútorné odsadenie toolbaru. |
| `--wj-toolbar-top`              | Určuje pozíciu toolbaru z hora pri použití `sticky`. |

## Sloty

| Slot        | Popis                                                             |
| ----------- | ----------------------------------------------------------------- |
| `end`       | Obsah sa umiestni vpravo od textu tlačidla v LTR a vľavo v RTL.   |
| `start`     | Obsah je umiestnený vľavo od textu tlačidla v LTR a vpravo v RTL. |

