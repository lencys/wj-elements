---
title: "Masonry"
---

<head>
  <title>Format Digital Component</title>
  <meta name="description" content="Komponent Masonry vytvára responzívne 'Masonry' rozvrhnutie podriadených prvkov, ktorý ich dynamicky usporadúva do stĺpcov na základe zadaných atribútov. Podporuje prispôsobenie počtu stĺpcov, maximálnej šírky stĺpcov, medzery medzi prvkami a debouncing na optimalizáciu výkonu." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent Masonry vytvára responzívne "Masonry" rozvrhnutie podriadených prvkov, ktoré sú dynamicky usporiadané do stĺpcov na základe zadaných atribútov. Podporuje prispôsobenie počtu stĺpcov, maximálnej šírky stĺpcov, medzery medzi prvkami a debouncing na optimalizáciu výkonu.


## Základné použitie

import Basic from '@site/static/usage/v1/masonry/basic/index.md';

<Basic />

## Maximálna šírka stĺpcov

Použitím atribútu `max-col-width` obmedzíte šírku stĺpcov na zadanú hodnotu.

import MaxColWidth from '@site/static/usage/v1/masonry/max-col-width/index.md';

<MaxColWidth />

## Gap

Použitím atribútu `gap` určíte šírku medzery medzi stĺpcami v pixeloch.

import Gap from '@site/static/usage/v1/masonry/gap/index.md';

<Gap />

## Atribúty a Vlastnosti

### cols

|  |  |
| --- | --- |
| Popis | Definuje počet stĺpcov. Pri hodnote `auto` zvolí počet stĺpcov podľa šírky rodiča. |
| Atribút | `cols` |
| Typ | `auto`, `number` |
| Predvolená hodnota | `auto` |

### debounce

|  |  |
| --- | --- |
| Popis | Určuje čas v ms, za ktorý sa rozloženie preformátuje pri každej zmene veľkosti rozloženia masonry. Tento reflow sa oneskoruje, aby sa zabránilo príliš častému vyvolaniu algoritmu rozloženia za sebou. |
| Atribút | `debounce` |
| Typ | `number` |
| Predvolená hodnota | `300` |

### gap

|  |  |
| --- | --- |
| Popis | Definuje šírku medzery medzi slĺpcami v pixeloch. |
| Atribút | `gap` |
| Typ | `number` |
| Predvolená hodnota | `24` |

### max-col-width

|  |  |
| --- | --- |
| Popis | Nastaví maximálnu šírku stĺpcov v pixeloch. |
| Atribút | `max-col-width` |
| Typ | `number` |
| Predvolená hodnota | `500` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

| Názov           | Popis                    |
|-----------------|--------------------------|
| `native`        | Odkazuje na `div` element vo vnútri elementu |
| `column`        | Odkazuje na všetky stĺpce vo vnútri elementu |
| `column-index`  | Odkazuje na konkrétny stĺpec element vo vnútri elementu, kde `index` predstavuje poradie stĺpca. Poradie začína nulou. |


## CSS Custom Vlastnosti

Pre tento komponent nie sú k dispozícií žiadne CSS custom vlastnosti.

## Sloty

| Názov | Popis |
| --- | --- |
| `{index}` | Obsah sa umiestni do stĺpca, `index` predstavuje poradie stĺpca. |
