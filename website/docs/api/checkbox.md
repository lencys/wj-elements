---
title: "Checkbox"
---

<head>
  <title>Checkbox: WebJET Element pre vybratie viacerých možností</title>
  <meta name="description" content="ion-checkboxes allow selection of multiple options from a set and appear as checked (ticked) when activated. Learn about the checkbox component for Ionic apps." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Checkbox, alebo tiež začiarkavacie políčko, je element, ktorý umožňuje používateľom vybrať jednu alebo viac možností z množiny. Kliknutím na checkbox zmeníte jeho stav na `true` alebo `false`.

## Základné použitie

import Basic from '@site/static/usage/v1/checkbox/basic/index.md';

<Basic />


## Indeterminate (Neurčité) Checkboxy

Po pridaní atribútu `indeterminate` sa zobrazí checkbox, ktorého predvolený stav je neutrálny, tzn. ani `true` ani `false`.

import Indeterminate from '@site/static/usage/v1/checkbox/indeterminate/index.md';

<Indeterminate />

## Variant

Pridaní atribútu `variant` s hodnotou `circle` zobrazíte checkbox v okrúhlom tvare.

import Variant from '@site/static/usage/v1/checkbox/variant/index.md';

<Variant />

## Theming

### CSS Custom Properties

## Atribúty a Vlastnosti

### checked

|  |  |
| --- | --- |
| Popis | Zmení predvolený stav checkboxu na `true`. |
| Atribút | `checked` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### color

|  |  |
| --- | --- |
| Popis | Určuje farbu pozadia checkboxu. Predvolené možnosti sú: `"primary"`, `"secondary"`, `"complete"`, `"success"`, `"warning"`, `"danger"`, `"dark"`, a `"light"`. |
| Atribút | `color` |
| Typ | `"danger"` ｜ `"dark"` ｜ `"light"` ｜ `"primary"` ｜ `"secondary"` ｜ `"success"` ｜ `"warning"`｜ `undefined` |
| Predvolená hodnota | `undefined` |

### disabled

|  |  |
| --- | --- |
| Popis | Deaktivuje checkbox takže jeho hodnotu nebude možné meniť |
| Atribút | `disabled` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### indeterminate

|  |  |
| --- | --- |
| Popis | Po pridaní atribútu `indeterminate` sa zobrazí checkbox, ktorého predvolený stav je neutrálny. |
| Atribút | `indeterminate` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### variant

|  |  |
| --- | --- |
| Popis | Zmení vzľad checkboxu. Podporovaný je okrúhly tvar pridaním hodnoty `circle`. |
| Atribút | `variant` |
| Typ | `circle` |
| Predvolená hodnota | `undefined` |

## Eventy


## Metódy


## CSS Shadow Parts


## CSS Custom Properties


## Sloty

