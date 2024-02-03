---
title: "Toggle"
---

<head>
  <title>Toggle : Ovládací prvov, ktorý umožňuje prepínať medzi dvoma stavmi</title>
  <meta name="description" content="Toggle elementy sú malé interaktívne ovládacie prvky, ktoré umožňujú prepínať medzi dvoma stavmi. Môžete ich aktivovať kliknutím myši." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toggle elementy sú malé interaktívne ovládacie prvky, ktoré umožňujú prepínať medzi dvoma stavmi. Môžete ich aktivovať kliknutím myši. Najčastejšie sa používajú na aktiváciu a deaktiváciu funkcionalít prípadne na prepínanie medzi zobrazením a skrytím iných elementov.

## Basic Usage

import Basic from '@site/static/usage/v1/toggle/basic/index.md';

<Basic />

## Colors

import Colors from '@site/static/usage/v1/toggle/colors/index.md';

<div className="large">
<Colors />
</div>

## Atribúty a Vlastnosti

### checked

|  |  |
| --- | --- |
| Popis | Ak `true`, toggle je aktivovaný |
| Atribút | `checked` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### color

|  |  |
| --- | --- |
| Popis | Určuje farbu toggle elementu v aktívnom stave na jednu z farebnej palety aplikácie. Predvolené možnosti sú: `complete`, `danger`, `dark`, `primary`, `success` a `warning`. |
| Atribút | `color` |
| Typ | `complete`, `danger`, `dark`, `primary`, `success`, `warning` |
| Predvolená hodnota | `undefined` |


### disabled

|  |  |
| --- | --- |
| Popis | Ak `true`, s toggle elementom nie je možné interagovať |
| Atribút | `disabled` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### name

|  |  |
| --- | --- |
| Popis | Nastaví name atribút elementu, ktorý je dôležitý pri použití vo formulároch. |
| Atribút | `name` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |


## Eventy

| Event             | Popis                                  |
|-------------------|----------------------------------------|
| `change`          | Vyvolaný pri zmene stavu elementu.     |
| `click`           | Vyvolaný pri kliknutí na element.      |


## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Party

| Názov | Popis |
| --- | --- |
| `input` | Odkazuje na `<input>` element typu `checkbox` |
| `toggle` | Odkazuje na vnútorný `<div>` obaľovací element  |

## CSS Custom Vlastnosti

| Názov                                  | Popis       |
|----------------------------------------|-------------|
| `--wj-toggle-border-radius`            | Určuje zaoblenie okrajov toggle elementu |
| `--wj-toggle-color-base`               | Určuje farbu pozadia elementu. Tvorí ju liniárny gradient s farbou v atribúte `color`. |
| `--wj-toggle-handle-border-radius`     | Určuje zaoblenie okrajov toggle handle (rúčky) |
| `--wj-toggle-handle-color`             | Určuje farbu toggle handle (rúčky) |
| `--wj-toggle-handle-height`            | Určuje výšku toggle handle (rúčky) |
| `--wj-toggle-handle-shadow`            | Určuje tieň toggle handle (rúčky) v neaktívnom stave. |
| `--wj-toggle-handle-shadow-checked`    | Určuje tieň toggle handle (rúčky) v aktívnom stave. |
| `--wj-toggle-handle-width`             | Určuje šírku toggle handle (rúčky) |
| `--wj-toggle-height`                   | Určuje výšku toggle elementu |
| `--wj-toggle-width`                    | Určuje šírku toggle elementu |


## Sloty

| Slot | Popis |
| --- | --- |
| `` | Predvolené umiestnenie obsahu elementu. |

