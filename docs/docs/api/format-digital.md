---
title: "FormatDigital"
---

<head>
  <title>Format Digital | Formátovanie číselných hodnôt</title>
  <meta name="description" content="Komponent FormatDigital je určený na formátovanie číselných hodnôt do ľudsky čitateľného digitálneho formátu s ohľadom na rôzne predpony jednotiek, ako sú kilo, mega, giga atď. Ponúka možnosti prispôsobenia jednotiek, štýlu zobrazenia jednotiek a podporuje lokalizáciu." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent FormatDigital je určený na formátovanie číselných hodnôt do ľudsky čitateľného digitálneho formátu s ohľadom na rôzne predpony jednotiek, ako sú kilo, mega, giga atď. Ponúka možnosti prispôsobenia jednotiek, štýlu zobrazenia jednotiek a podporuje lokalizáciu.

## Základné použitie

import Basic from '@site/static/usage/v1/format-digital/basic/index.md';

<Basic />

## Formáty zobrazenia

import FormattingDisplay from '@site/static/usage/v1/format-digital/formatting-display/index.md';

<FormattingDisplay />

## Formáty bajtov

import FormattingBytes from '@site/static/usage/v1/format-digital/formatting-bytes/index.md';

<FormattingBytes />

## Formáty bitov

import FormattingBits from '@site/static/usage/v1/format-digital/formatting-bits/index.md';

<FormattingBits />

## Sloty

import Slots from '@site/static/usage/v1/format-digital/slots/index.md';

<Slots />

## Atribúty a Vlastnosti

### unit

|  |  |
| --- | --- |
| Popis | Definuje jednotku pre zobrazenie hodnôt. |
| Atribút | `unit` |
| Typ | `bit`, `byte` |
| Predvolená hodnota | `byte` |

### unit-display

|  |  |
| --- | --- |
| Popis | Nastaví veľkosť fragmentu pre nahrávanie veľkých súborov v bajtoch. |
| Atribút | `unit-display` |
| Typ | `long`, `narrow`, `short` |
| Predvolená hodnota | `short` |


## Eventy

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

| Názov           | Popis                    |
|-----------------|--------------------------|
| `native`        | Odkazuje na `div` element s triedou `native-format-digital` vo vnútri elementu |

## CSS Custom Vlastnosti

Pre tento komponent nie sú k dispozícií žiadne CSS custom vlastnosti.

## Sloty

| Názov | Popis |
| --- | --- |
| `` | Obsah sa umiestni medzi named sloty. |
| `end` | Obsah sa umiestni vpravo od textu tlačidla v LTR a vľavo v RTL. |
| `start` | Obsah je umiestnený vľavo od textu tlačidla v LTR a vpravo v RTL. |
