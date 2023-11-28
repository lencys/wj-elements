---
title: "Input"
---

<head>
  <title>Input: Custom Input Element</title>
  <meta name="description" content="Input element rozširuje možnosti štandardného HTML inputu pokročilými funkciami a možnosťami prispôsobenia. " />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Input element rozširuje možnosti štandardného HTML inputu pokročilými funkciami a možnosťami prispôsobenia. 


## Základné použitie

import Basic from '@site/static/usage/v1/input/basic/index.md';

<div class="xxlarge">

  <Basic />

</div>

## Použitie vo formulári

import Form from '@site/static/usage/v1/input/form/index.md';

<Form />

## Variant: standard

Input podporuje aj vizuál štandardného HTML inputu pridaním vlastnosti `variant` s hodnotou `standard`.

import Standard from '@site/static/usage/v1/input/standard/index.md';

<Standard />

## Standard vo formulári

import StandardForm from '@site/static/usage/v1/input/standard-form/index.md';

<StandardForm />

## Search

V kombinácii s elementorm `Button` vytvorí plnohodnotné vyhľadávacie pole.

import Search from '@site/static/usage/v1/input/search/index.md';

<div class="small">

<Search />

</div>

## Atribúty a Vlastnosti

### custom-error-display

|  |  |
| --- | --- |
| Popis | Aktivuje možnosť zobrazenia vlastnej chybovej hlášky. Pre jej nastavenie slúži vlastnosť `message` |
| Atribút | `custom-error-display` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### disabled

|  |  |
| --- | --- |
| Popis | Deaktivuje input |
| Atribút | `disabled` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### label

|  |  |
| --- | --- |
| Popis | Popisný text inputu |
| Atribút | `label` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |

### message

|  |  |
| --- | --- |
| Popis | Text vlastnej chybovej hlášky |
| Atribút | `message` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |

### placeholder

|  |  |
| --- | --- |
| Popis | Zástupný text inputu |
| Atribút | `placeholder` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |

### readonly

|  |  |
| --- | --- |
| Popis | Deaktivuje možnosť písania do inputu |
| Atribút | `readonly` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### required

|  |  |
| --- | --- |
| Popis | Nastaví input ako povinný pre vyplnenie |
| Atribút | `required` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### type

|  |  |
| --- | --- |
| Popis | Nastaví typ inputu. Podporované sú textové typy inputov ako napríklad `text`, `password`, `email`, `number`, `search`, `tel`, `url` |
| Atribút | `type` |
| Typ | `text`, `password`, `email`, `number`, `search`, `tel`, `url` |
| Predvolená hodnota | `text` |

### validate-on-change

|  |  |
| --- | --- |
| Popis | Nastaví validáciu obsahu inputu po každej vykonanej zmene v jeho obsahu |
| Atribút | `validate-on-change` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### value

|  |  |
| --- | --- |
| Popis | Predvyplní obsah inputu zvolenou hodnotou |
| Atribút | `value` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |


## Eventy

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Party

| Názov       | Popis                                    |
|-------------|------------------------------------------|
| `input`     | Odkazuje na `div` element vo vnútri Inputu |
| `native`    | Odkazuje na `input` element vo vnútri Inputu |


## CSS Custom Vlastnosti

| Názov       | Popis                                  |
|----------------------------------------|-------------|
| `--wj-input-background-color`          |  Farba pozadia Inputu                        |
| `--wj-input-border-color`              |  Farba okrajov Inputu                        |
| `--wj-input-border-color-focus`        |  Farba okrajov Inputu pri focuse             |
| `--wj-input-border-radius`             |  Zaoblenie okrajov Inputu                    |
| `--wj-input-border-style`              |  Štýl okrajov Inputu                         |
| `--wj-input-border-width`              |  Šírka okrajov Inputu                        |
| `--wj-input-color`                     |  Farba textu Inputu                          |
| `--wj-input-color-invalid`             |  Farba textu Inputu ak je neplatný           |
| `--wj-input-font-family`               |  Font textu Inputu                           |
| `--wj-input-line-height`               |  Výška riadka Inputu                         |
| `--wj-input-margin-bottom`             |  Spodná medzera Inputu                       |
| `--wj-input-slot-padding-inline`       |  Horizontálná medzera medzi slotmi Inputu    |

## Sloty

| Názov | Popis |
| --- | --- |
| `end` | Obsah sa umiestni vpravo od inputu |
| `start` | Obsah sa umiestni vľavo od inputu |