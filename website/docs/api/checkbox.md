---
title: "Checkbox"
---

<head>
  <title>Checkbox: WebJET Element pre vybratie viacerých možností</title>
  <meta name="description" content="Checkbox, alebo tiež začiarkavacie políčko, je element, ktorý umožňuje používateľom vybrať jednu alebo viac možností z množiny. Kliknutím na checkbox zmeníte jeho stav na `true` alebo `false`." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Checkbox, alebo tiež začiarkavacie políčko, je element, ktorý umožňuje používateľom vybrať jednu alebo viac možností z množiny. Kliknutím na checkbox zmeníte jeho stav na `true` alebo `false`.

## Základné použitie

import Basic from '@site/static/usage/v1/checkbox/basic/index.md';

<Basic />


## Indeterminate checkbox

Po pridaní atribútu `indeterminate` sa zobrazí checkbox, ktorého predvolený stav je neutrálny, tzn. ani `true` ani `false`.

import Indeterminate from '@site/static/usage/v1/checkbox/indeterminate/index.md';

<Indeterminate />

## Variant

Pridaní atribútu `variant` s hodnotou `circle` zobrazíte checkbox v okrúhlom tvare.

import Variant from '@site/static/usage/v1/checkbox/variant/index.md';

<Variant />

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

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Party

Pre tento komponent nie sú k dispozícii žiadne shadow party.

## CSS Custom Vlastnosti

| Vlastnosť                       | Popis                    |
|---------------------------------|--------------------------|
| `--wj-checkbox-height` | Určuje minimálnu výšku checkboxu | 
| `--wj-checkbox-margin-bottom` | Veľkosť vonkajšieho spodného okraja | 
| `--wj-checkbox-margin-inline` | Veľkosť vonkajších okrajov vľavo a vpravo | 
| `--wj-checkbox-margin-top` | Veľkosť vonkajšieho horného okraja | 
| `--wj-checkbox-width` | Určuje minimálnu šírku checkboxu | 

## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.
