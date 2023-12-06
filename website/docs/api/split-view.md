---
title: "SplitView"
---


<head>
  <title>SplitView | jednotlivé voliteľné možnosti v rámci komponentu Select</title>
  <meta name="description" content="Element Option predstavuje jednotlivé voliteľné možnosti v rámci komponentu Select. Je obdobný štandardnému elementu HTML select a umožňuje používateľom vykonať jeden alebo viacero výberov na základe konfigurácie komponentu Select." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Option predstavuje jednotlivé voliteľné možnosti v rámci komponentu [Select](./select). Je obdobný štandardnému elementu HTML select a umožňuje používateľom vykonať jeden alebo viacero výberov na základe konfigurácie komponentu `select`. Tieto elementry sa môžu dynamicky napĺňať a sú navrhnuté tak, aby bezproblémovo spolupracovali s vlastnou logikou komponentu wj-select vrátane funkcií, ako je viacnásobný výber a vlastné štylizovanie.

Pre informácie o použití Option sa presuňte do dokumentácie elementu [Select.](./select)

## Základné použitie

import Basic from '@site/static/usage/v1/split-view/basic/index.md';

<div className="xlarge">
<Basic />
</div>

## Vertikálny SplitView

Podporované sú dve orientácie. Pridaním atribútu `vertical` zobrazíte vertikálny SplitView.

import Vertical from '@site/static/usage/v1/split-view/vertical/index.md';

<div className="xlarge">
<Vertical />
</div>

## Min/Max

Pridaním vlastnosti `min` a `max` s hodnotami `“0”` až `“100”` obmedzíte škálu pohybu oddelovača.

import MinMax from '@site/static/usage/v1/split-view/min-max/index.md';

<div className="xlarge">
<MinMax />
</div>

## Disabled

Pridaním atribút `disabled` deaktivuje možnosť posúvania oddelovača.

import Disabled from '@site/static/usage/v1/split-view/disabled/index.md';

<div className="xlarge">
<Disabled />
</div>

## Vnorený SplitView

Vnorením ďalšieho SplitView je možné vytvoriť zložitejšie zobrazenia.

import Split from '@site/static/usage/v1/split-view/split/index.md';

<div className="xlarge">
<Split />
</div>

## Úprava štýlov

import Custom from '@site/static/usage/v1/split-view/custom/index.md';

<div className="xlarge">
<Custom />
</div>

## Atribúty a Vlastnosti

### disabled

|  |  |
| --- | --- |
| Popis | Deaktivuje možnosť posúvania oddelovača |
| Atribút | `disabled` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### initial

|  |  |
| --- | --- |
| Popis | Určuje hodnotu daného option elementu |
| Atribút | `initial` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### max

|  |  |
| --- | --- |
| Popis | Určuje hodnotu maximálnej pozície oddelovača |
| Atribút | `max` |
| Typ | `integer` |
| Predvolená hodnota | `100` |

### min

|  |  |
| --- | --- |
| Popis | Určuje hodnotu minimálnej pozície oddelovača |
| Atribút | `min` |
| Typ | `integer` |
| Predvolená hodnota | `0` |

### vertical

|  |  |
| --- | --- |
| Popis | Zmení orientáciu elementu na vertikálnu |
| Atribút | `vertical` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |


| Attribute | Description                                          |
|-----------|------------------------------------------------------|
| disabled  | Used to disable the resizing functionality.          |
| initial   | Sets the initial split ratio or size of the panels.  |
| max       | Represents the maximum size limit for the panels.    |
| min       | Represents the minimum size limit for the panels.    |
| vertical  | Determines the orientation of the split view.        |


## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

| Názov | Popis |
| --- | --- |
| `divider` | Odkazuje na `<div>` s triedou `wj-divider` |

## CSS Custom Vlasnosti

| Custom Vlasnosť                         | Popis                                                          |
|-----------------------------------------|----------------------------------------------------------------------|
| --wj-split-view-calc-a                  | Určuje vypočítanú percentuálnu hodnotu šírka/výška prvého panela.  |
| --wj-split-view-calc-b                  | Určuje vypočítanú percentuálnu hodnotu šírka/výška druhého panela. |
| --wj-split-view-clamp-a                 | Aplikuje funkciu CSS `clamp()` na udržanie veľkosti prvého panela v rozsahu min-max. |
| --wj-split-view-clamp-b                 | Aplikuje funkciu CSS `clamp()` na udržanie veľkosti druhého panela v rozsahu min-max. |
| --wj-split-view-divider-area            | Určuje celkovú plochu (šírka/výška) oddeľovača vrátane interaktívnej plochy. |
| --wj-split-view-divider-background      | Nastavuje farbu pozadia oddeľovača.                       |
| --wj-split-view-divider-size            | Nastavuje šírku/výšku oddeľovača.                        |
| --wj-split-view-divider-width           | Určuje hrúbku oddelovača.                              |
| --wj-split-view-max                     | Predstavuje maximálnu povolenú veľkosť (v percentách) pre panel.    |
| --wj-split-view-min                     | Predstavuje minimálnu povolenú veľkosť (v percentách) pre panel.    |


## Sloty

| Názov | Popis |
|-----------|--- |
| `divider`   | Obsah sa umiestni do oddelovača wj-divider. |
| `end`      | Obsah sa umiestni do druhého panela. |
| `start`     | Obsah sa umiestni do prvého panela. |
