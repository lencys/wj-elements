---
title: "Slider"
---

<head>
  <title>Slider: Element rozširuje možnosti štandardného HTML select elementu.</title>
  <meta name="description" content="Slider je interaktívny komponent posuvníka, ktorý umožňuje používateľom praktickým spôsobom vybrať hodnotu z rozsahu hodnôt." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Slider je interaktívny komponent posuvníka, ktorý umožňuje používateľom praktickým spôsobom vybrať hodnotu z rozsahu hodnôt. Ponúka handle (rukoväť), ktorou možno pohybovať, takže je ideálny pri tých scenároch, ktoré od používateľa vyžadujú číselný vstup alebo úpravu nejakého nastavenia, napríklad hlasitosti.

## Základné použitie

V predvolenom nastavení výber umožňuje používateľovi vybrať len jednu možnosť. Zahrnutím elementu `Icon` sa pri možnosti zobrazí aj zvolená ikona.

import Basic from '@site/static/usage/v1/slider/basic/index.md';

<Basic />

## Bubble

Pridaním atribútu bubble sa nad sliderom zobrazí bublina s číslom vyjadrujúcim aktuálnu hodnotu posuvníka.

import Bubble from '@site/static/usage/v1/slider/bubble/index.md';

<Bubble />

## Label

Pridaním atribútu `Label` umožníte používateľovi vybrať viacero možností.

import Label from '@site/static/usage/v1/slider/label/index.md';

<Label />

## Icons

Pridaním atribútu `Icons` umožníte používateľovi vybrať viacero možností.

import Icons from '@site/static/usage/v1/slider/icons/index.md';

<Icons />

## Color

Pridaním atribútu `color` umožníte používateľovi vybrať viacero možností.

import Colors from '@site/static/usage/v1/slider/colors/index.md';

<Colors />

## Atribúty a Vlastnosti

### clearable

|  |  |
| --- | --- |
| Popis | Ak `true`, zobrazí sa ikona na zmazanie všetkých zvolených možností. |
| Atribút | `clearable` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### color

|  |  |
| --- | --- |
| Popis | Určuje farbu slideru na jednu z farebnej palety aplikácie. Predvolené možnosti sú: `complete`, `danger`, `dark`, `primary`, `success` a `warning`. |
| Atribút | `color` |
| Typ | `complete`, `danger`, `dark`, `primary`, `success`, `warning` |
| Predvolená hodnota | `undefined` |

### disabled

|  |  |
| --- | --- |
| Popis | Ak `true`, s elementom nebude možné interagovať. |
| Atribút | `disabled` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |


### label

|  |  |
| --- | --- |
| Popis | Slúži na nastavenie popisu |
| Atribút | `label` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |

### multiple

|  |  |
| --- | --- |
| Popis | Nastaví select na výber viacerých možností |
| Atribút | `multiple` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### placeholder

|  |  |
| --- | --- |
| Popis | Slúži na nastavenie zástupného textu  |
| Atribút | `placeholder` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |

### trigger

|  |  |
| --- | --- |
| Popis | Určuje selectu spôsobom rozkliknutia |
| Atribút | `trigger` |
| Typ | `click`, `hover` |
| Predvolená hodnota | `click` |

## Eventy

| Event             | Popis                                                                      |
|-------------------|----------------------------------------------------------------------------|
| blur              | Vyvolaný keď elemenet stratí focus.                                        |
| focus             | Vyvolaný keď elemenet dostane focus.                                       |
| wj:button-click   | Vyvolaný po kliknuti na tlačidlo odstránenia všetkých zvolených možností.  |
| wj:chip-remove    | Vyvolaný po odstránení Chip elementu.                                      |
| wj:option-change  | Vyvolaný po zmene zvolenej možnosti.                                       |
| wj:options-load   | Vyvolaný po načítaní možností                                              |

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Party

| Názov | Popis |
| --- | --- |
| `clear` | Odkazuje na tlačidlo `<wj-button>` pre zmazanie všetkých zvolených možností  |
| `input` | Odkazuje na `<input>` element |
| `native` | Odkazuje na `<div>` element |


## CSS Custom Vlastnosti

| Vlastnosť                             | Popis                         |
|---------------------------------------|-------------------------------|
| `--wj-select-background-color`        | Farba pozadia elementu        |
| `--wj-select-border-color`            | Farba okrajov elementu        |
| `--wj-select-border-radius`           | Zaoblenie okrajov elementu    |
| `--wj-select-border-style`            | Štýl zaoblenia elementu       |
| `--wj-select-border-width`            | Šírka okrajov elementu        |
| `--wj-select-color`                   | Farba elementu                |
| `--wj-select-line-height`             | Výška riadka elementu         |
| `--wj-select-options-border-color`    | Farba okrajov rozbalovacieho okna       |
| `--wj-select-options-border-style`    | Štýl okrajov rozbalovacieho okna        |
| `--wj-select-options-border-width`    | Šírka okrajov rozbalovacieho okna       |

## Sloty

| Slot | Popis |
| --- | --- |
| `anchor` | Obsah sa umiestni do elementu `.wrapper` |
| `arrow` | Obsah sa umiestni do elementu `wj-icon`  |