---
title: "Thumbnail"
---

<head>
  <title>Thumbnail | Thumbnail App Component to Wrap Images or Icons</title>
  <meta name="description" content="Thumbnail uľahčuje zobrazenie väčších obrázkov alebo iných médií zobrazením ich menšieho náhľadu. Je ho možné použiť samostatne ale aj v iných elementoch." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Thumbnail uľahčuje zobrazenie väčších obrázkov alebo iných médií zobrazením ich menšieho náhľadu. Je ho možné použiť samostatne ale aj v iných elementoch.

## Základné použitie

import Basic from '@site/static/usage/v1/thumbnail/basic/index.md';

<Basic />

## Použitie v Itemoch

Pri použití v elementoch [Item.](./item) sa jeho veľkosť prispôsobí veľkosti rodiča a jeho pozíciu je možné určiť pridaním `slotu` s hodnotou `start` pre umiestnenie vľavo, alebo `end` pre umiestnenie vpravo.

import Item from '@site/static/usage/v1/thumbnail/item/index.md';

<Item />

## Vlastné štýly

import CSSProps from '@site/static/usage/v1/thumbnail/theming/css-properties/index.md';

<CSSProps />

## Atribúty a Vlastnosti


## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

| Vlasnosť   | Popis      |
|-----------|-------------|
| `--wj-border-radius`    | Zaoblenie okrajov elementu |
| `--wj-thumbnail-height` | Výška elementu|
| `--wj-thumbnail-width`  | Šírka elementu |

## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.
