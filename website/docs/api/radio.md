---
title: "Radio"
---

<head>
  <title>Radio komponent: Vylepšená verzia štandardného HTML radio elementu</title>
  <meta name="description" content="Radio element je upravená verzia štandardného HTML radio elementu, rozšírená o štýly pre dosiahnutie vizuálne konzistnejšieho používateľského rozhrania." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Radio element je upravená verzia štandardného HTML radio elementu, rozšírená o štýly pre dosiahnutie vizuálne konzistnejšieho používateľského rozhrania naprieč rôznymi zariadeniami. Funguje podobne ako štandardné rádio tlačidlo a umožňuje používateľom vybrať jednu z množiny možností. Používa sa vo vnútri elementu [radio group](./radio-group), ktorý im pridáva zarovnanie a zoskupuje ich do jedného celku.

## Základné použitie

import Basic from '@site/static/usage/v1/radio/basic/index.md';

<Basic />

## Inline

Pridaním vlastnosti `inline` sa elementy usporiadajú v horizontálnom rozložení.

import Inline from '@site/static/usage/v1/radio/inline/index.md';

<Inline />


## Úprava štýlov

### Colors

Pomocou vlastnosti `color` je možné zmeniť farbu radio elementu.

import Color from '@site/static/usage/v1/radio/color/index.md';

<Color />

### CSS Custom Properties

## Atribúty a Vlastnosti

### color


|  |  |
| --- | --- |
| Popis | Určuje farbu radio inputu po vybratí elementu na jednu z farebnej palety vašej aplikácie. Predvolené možnosti sú: `complete`, `danger`, `neutral`, `primary`, `success` a `warning`. |
| Atribút | `color` |
| Typ | `complete`, `danger`, `neutral`, `primary`, `success`, `warning` |
| Predvolená hodnota | `undefined` |

### checked

|  |  |
| --- | --- |
| Popis | Označuje aktuálne vybratú možnosť |
| Atribút | `checked` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### disabled

|  |  |
| --- | --- |
| Popis | Ak `true`, možnosť nie je možné zvoliť |
| Atribút | `disabled` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### indeterminate

|  |  |
| --- | --- |
| Popis | Po pridaní atribútu `indeterminate` sa nastaví predvolený stav radio elementu na neutrálny, tzn. ani `true` ani `false`. |
| Atribút | `indeterminate` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### name

|  |  |
| --- | --- |
| Popis | Názov radio elementu  |
| Atribút | `name` |
| Typ | `string` |
| Predvolená hodnota | `this.inputId` |

### value

|  |  |
| --- | --- |
| Popis | Hodnota radio elementu  |
| Atribút | `value` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |


## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

| Atribút             | Popis       |
|---------------------|-------------|
| `--wj-radio-margin-bottom` | Spodné odsadenie radio elementu. |
| `--wj-radio-margin-inline` | Pravé a ľavé odsadenie radio elementu.  |
| `--wj-radio-margin-top` | Horné odsadenie radio elementu. |


## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.