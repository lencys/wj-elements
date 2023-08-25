---
title: "Badge"
---

<head>
  <title>Badge | Odznaky</title>
  <meta name="description" content="Badge sú inline-block elementy, ktoré majú informatívny charakter a zvyčajne sa zobrazujú v blízkosti iného elementu. Používajú sa ako upozornenie, že k elementu sú priradené ďalšie elementy, a informujú používateľa o ich počte." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Badge sú inline-block elementy, ktoré majú informatívny charakter a zvyčajne sa zobrazujú v blízkosti iného elementu. Používajú sa ako upozornenie, že k elementu sú priradené ďalšie elementy, a informujú používateľa o ich počte.

## Použitie

Ak chcete použiť komponent Badge, zahrňte ho do HTML s požadovanými atribútmi.

import Basic from '@site/static/usage/v7/badge/basic/index.md';

<Basic />


## Úprava štýlov

### Farby

import Colors from '@site/static/usage/v7/badge/theming/colors/index.md';

<Colors />


## Atribúty a Vlastnosti

### color

|  |  |
| --- | --- |
| Popis | Farba, ktorá sa má použiť z palety farieb vašej aplikácie. Predvolené možnosti sú: `"primary"`, `"complete"`,  `"success"`, `"warning"`, `"danger"`, `"info"`, `"contrast-low"` a `"menu"`. |
| Atribút | `color` |
| Typ | `"complete"` ｜ `"danger"` ｜ `"info"` ｜ `"menu"` ｜ `"primary"` ｜ `"success"` ｜ `"warning"` ｜ `undefined` |
| Predvolená hodnota | `"contrast-low"` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti


| Názov | Popis |
| --- | --- |
| `--wj-chip-border-radius` | Upraví zaoblenie elementu badge |

## Sloty

| Názov | Popis |
| --- | --- |
| `` | Obsah sa umiestni medzi named sloty. |
| `end` | Obsah sa umiestni vpravo v LTR a vľavo v RTL. |
| `icon-only` | Mal by sa použiť na ikonu v tlačidle, ktoré neobsahuje text. |
| `start` | Obsah je umiestnený vľavo v LTR a vpravo v RTL. |