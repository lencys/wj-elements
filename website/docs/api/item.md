---
title: "Item"
---

<head>
  <title>Item: Input, Edit, or Delete iOS and Android Item Elements</title>
  <meta name="description" content="Komponenty Item sú bloky, ktoré môžu obsahovať rôzne typy obsahu vrátane textu, ikon, avatarov, obrázkov, inputov a iných štandardných alebo custom elementov. Item elementy sa zvyčajne nachádzajú vo vnútri List elementov." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponenty Item sú bloky, ktoré môžu obsahovať rôzne typy obsahu vrátane textu, ikon, avatarov, obrázkov, inputov a iných štandardných alebo custom elementov. Item elementy sa zvyčajne nachádzajú vo vnútri [List](./list)  elementov.

## Základné použitie

import Basic from '@site/static/usage/v1/item/basic/index.md';

<Basic />

## Oddelovacie čiary

import Lines from '@site/static/usage/v1/item/lines/index.md';

<Lines />


## Použitie s obrázkami

import Media from '@site/static/usage/v1/item/media/index.md';

<Media />


## Použitie s tlačidlami

import Buttons from '@site/static/usage/v1/item/buttons/index.md';

<Buttons />


## Použitie s ikonami

import Icons from '@site/static/usage/v1/item/icons/index.md';

<Icons />


## Atribúty a Vlastnosti

### lines

|  |  |
| --- | --- |
| Popis | Štýl horizontálnych oddeľovačov elementov Item |
| Atribút | `lines` |
| Typ | `full`, `inset`, `none` |
| Predvolená hodnota | `inset` |


## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú verejne dostupné žiadne metódy.

## CSS Shadow Parts

| Názov | Popis |
| --- | --- |
| `native` | Odkazuje na `<div>` element vo vnútri elementu Item |

## CSS Custom Vlastnosti

| Názov | Popis |
| --- | --- |
| `--wj-border-width`                      |     Šírka okrajov elementu        |
| `--wj-item-background`                   |     Farba pozadia elementu        |
| `--wj-item-background-hover`             |     Farba pozadia elementu pri ukázaní myšou        |
| `--wj-item-color`                        |     Farba textu        |
| `--wj-item-inner-border-width`           |     Hrúbka okrajov vnútornej časti elementu       |
| `--wj-item-inner-box-shadow`             |     Vnútorný box-shadow vnútornej časti elementu        |
| `--wj-item-inner-padding-bottom`         |     Spodné vnútorné odsadenie vnútornej časti elementu      |
| `--wj-item-inner-padding-end`            |     Pravé vnútorné odsadenie vnútornej časti elementu       |
| `--wj-item-inner-padding-start`          |     Ľavé vnútorné odsadenie vnútornej časti elementu         |
| `--wj-item-inner-padding-top`            |     Horné vnútorné odsadenie vnútornej časti elementu         |
| `--wj-item-min-height`                   |     Minimálna výška elementu        |
| `--wj-item-padding-bottom`               |     Spodné vnútorné odsadenie         |
| `--wj-item-padding-end`                  |     Pravé vnútorné odsadenie        |
| `--wj-item-padding-start`                |     Ľavé vnútorné odsadenie        |
| `--wj-item-padding-top`                  |     Horné vnútorné odsadenie       |
| `--wj-item-transition`                   |     Prechody elementu        |

## Sloty

| Názov | Popis |
| --- | --- |
| `end` | Obsah sa umiestni vpravo od textu tlačidla v LTR a vľavo v RTL. |
| `start` | Obsah je umiestnený vľavo od textu tlačidla v LTR a vpravo v RTL. |