---
title: "Rate"
---

<head>
  <title>Rate</title>
  <meta name="description" content="Komponent Masonry vytvára responzívne 'Masonry' rozvrhnutie podriadených prvkov, ktorý ich dynamicky usporadúva do stĺpcov na základe zadaných atribútov. Podporuje prispôsobenie počtu stĺpcov, maximálnej šírky stĺpcov, medzery medzi prvkami a debouncing na optimalizáciu výkonu." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent "Rate" je element určený na zobrazovanie hodnotenia a jeho interakciu s ním. Umožňuje používateľom zadávať hodnotenia kliknutím alebo prejdením myšou na súbor ikon. Komponent podporuje prispôsobenie druhu ikon, presnosti hodnotenia alebo tiež maximálnej hodnoty hodnotenia.

## Základné použitie

import Basic from '@site/static/usage/v1/rate/basic/index.md';

<Basic />

## Value

Atribútom `value` nastavíte počiatočnú hodnotu hodnotenia.

import Value from '@site/static/usage/v1/rate/value/index.md';

<Value />

## Precision

Použitím atribútu `precision` určíte presnosť hodnotenia.

import Precision from '@site/static/usage/v1/rate/precision/index.md';

<Precision />

## Readonly

Atribút `readonly` zakáže interakcie s elementom.

import Readonly from '@site/static/usage/v1/rate/read-only/index.md';

<Readonly />

## Disabled

Použitím atribútu `disabled` zakáže interakcie a zobrazí element ako zašednutý.

import Disabled from '@site/static/usage/v1/rate/disabled/index.md';

<Disabled />

## Atribúty a Vlastnosti

### disabled

|  |  |
| --- | --- |
| Popis | Zakáže interakcie a zobrazí element ako zašednutý. |
| Atribút | `disabled` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### precision

|  |  |
| --- | --- |
| Popis | Určíte presnosť hodnotenia |
| Atribút | `precision` |
| Typ | `number` |
| Predvolená hodnota | `1` |

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

Pre tento komponent nie sú k dispozícii žiadne Sloty.
