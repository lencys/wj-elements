---
title: "Progress bar"
---

<head>
  <title>Progress Bar | Horizontal App Progress Bar for Loading Indicator</title>
  <meta name="description" content="ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes—such as submitting a form or saving updates." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Progress Bar element je komponent navrhnutý na vizualizáciu priebehu. Ponúka možnosť vytvárať prispôsobiteľné kruhové alebo rovné ukazovatele s rôznymi možnosťami konfigurácie. 

## Základné použitie

Pre použitie komponentu Progress Bar, ho zahrňte do HTML s požadovanými atribútmi. Atribút progress nastaví percentuálnu hodnotu priebehu v progress bare.

import Basic from '@site/static/usage/v1/progress-bar/basic/index.md';

<Basic />

## Type

Podporované sú dva typy progress barov. Pridaním vlastnosti `type` s hodnotou `“circle”` zobrazíte progress bar s okrúhlym dizajnom. 


import Type from '@site/static/usage/v1/progress-bar/type/index.md';

<Type />

## Label

Pre zobrazenie popisiek pri progress bare je potrebné vložiť do jeho vnútra `Label` element a definovať  mu pozíciu pridaním atribútu `slot` s hodnotou `"start"` alebo `"end"`. 

import Label from '@site/static/usage/v1/progress-bar/label/index.md';

<Label />


## Linecap

Pridaním vlastnosti `linecap` s hodnotou `“round”` zobrazíte ukazovateľ priebehu so zaobleným koncom.

import Linecap from '@site/static/usage/v1/progress-bar/linecap/index.md';

<Linecap />


## Radius

Atribút radius určí priemer okrúhleho progress baru.

import Radius from '@site/static/usage/v1/progress-bar/radius/index.md';

<Radius />


## Stroke

Atribút stroke definuje šírku progress baru v pixeloch.


import Stroke from '@site/static/usage/v1/progress-bar/stroke/index.md';

<Stroke />


## Progress bar s obrázkom

Pre zobrazenie obrázku vo vnútri elementu, je potrebné obrázok zaobaliť do progress bar elementu.

import Image from '@site/static/usage/v1/progress-bar/image/index.md';

<Image />


## Farebné varianty progress baru

Vlastnosť `color` upravuje farbu elementu. V predvolenom nastavení má element farbu `dark`. Nastavením tejto hodnoty sa farba elementu zmení na jednu z farieb prednastavenej farebnej palety.


import Colors from '@site/static/usage/v1/progress-bar/theming/colors/index.md';

<Colors />


## Vlastnosti

### color

|  |  |
| --- | --- |
| Popis | Farba, ktorá sa má použiť z palety farieb vašej aplikácie. Predvolené možnosti sú: `"primary"`, `"complete"`, `"success"`, `"warning"`, `"danger"`, `"dark"` a `"light"`. |
| Atribút | `color` |
| Typ | `"complete"` ｜ `"danger"` ｜ `"dark"` ｜ `"light"` ｜ `"primary"` ｜ `"success"` ｜ `"warning"` ｜ `undefined` |
| Predvolená hodnota | `"dark"` |

### linecap

|  |  |
| --- | --- |
| Popis | Definuje ukazovateľ priebehu so zaobleným koncom. |
| Atribút | `round` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### progress

|  |  |
| --- | --- |
| Popis | Určuje hodnotu priebehu v percentách. |
| Atribút | `progress` |
| Typ | `number` |
| Predvolená hodnota | `0` |

### radius

|  |  |
| --- | --- |
| Popis | Určuje hodnotu priemeru progress baru v pixeloch. |
| Atribút | `radius` |
| Typ | `number` |
| Predvolená hodnota | `70` |

### stroke

|  |  |
| --- | --- |
| Popis | Určuje hodnotu šírky progress baru v pixeloch. |
| Atribút | `stroke` |
| Typ | `number` |
| Predvolená hodnota | `12` |

### type

|  |  |
| --- | --- |
| Popis | Pridaním vlastnosti type s hodnotou “circle” zobrazíte progress bar s okrúhlym dizajnom.  |
| Atribút | `type` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

| Názov | Popis |
| --- | --- |
| `--wj-progress-bar-color` | Definuje farbu ukazovateľa priebehu |
| `--wj-progress-bar-text-size` | Definuje veľkosť textu |

## Sloty

| Názov | Popis |
| --- | --- |
| `end` | Obsah sa umiestni vpravo v LTR a vľavo v RTL. |
| `start` | Obsah je umiestnený vľavo v LTR a vpravo v RTL. |