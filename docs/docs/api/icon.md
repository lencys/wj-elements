---
title: 'Icon'
---

<head>
  <title>Icon: WebJET Element pre zobrazovanie ikon</title>
  <meta
    name="description"
    content="Tento komponent poskytuje jednoduchý spôsob zobrazenia ikon zo sady SVG obrázkov, pričom umožňuje rôzne možnosti prispôsobenia."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tento komponent poskytuje jednoduchý spôsob zobrazenia ikon zo sady SVG obrázkov, pričom umožňuje rôzne možnosti prispôsobenia. WebJET Elements využíva sadu ikon Tabler. Pre zoznam všetkých dostupných ikon navštívte [tabler-icons.io](https://tabler-icons.io/).

## Základné použitie

import Basic from '@site/static/usage/v1/icon/basic/index.md';

<Basic />

## Custom

import Custom from '@site/static/usage/v1/icon/custom/index.md';

<Custom />

## Atribúty a Vlastnosti

### color

|  |  |
| --- | --- |
| Popis | Farba ikony z palety farieb aplikácie. Predvolené možnosti sú: `"primary"`, `"secondary"`, `"complete"`, `"success"`, `"warning"`, `"danger"`, `"dark"`, a `"light"`. |
| Atribút | `color` |
| Typ | `"danger"` ｜ `"dark"` ｜ `"light"` ｜ `"primary"` ｜ `"secondary"` ｜ `"success"` ｜ `"warning"` ｜ undefined |
| Predvolená hodnota | `inherit` |

### name

|  |  |
| --- | --- |
| Popis | Určuje názov ikony na zobrazenie zo sady priloženej kolekcie SVG ikon. |
| Atribút | `name` |
| Typ | `string` ｜ `undefined` |
| Predvolená hodnota | `undefined` |

### size

|  |  |
| --- | --- |
| Popis | Nastavte na `"small"` pre menšiu ikonu, alebo na `"large"` pre väčšiu ikonu. V predvolenom nastavení je veľkosť nenastavená. |
| Atribút | `size` |
| Typ | `large` ｜ `small` ｜ `undefined` |
| Predvolená hodnota | `undefined` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom vlastnosti

| Názov   | Popis    |
|---------|----------|
| `--wj-icon-height` | Definuje výšku ikony |
| `--wj-icon-size` | Definuje veľkosť ikony |
| `--wj-icon-width` | Definuje šírku ikony |

## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.