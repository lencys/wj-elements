---
title: "Select"
---

import { Icon } from '@iconify/react';

<head>
  <title>Select: Element rozširuje možnosti štandardného HTML select elementu.</title>
  <meta name="description" content="Select element rozširuje možnosti štandardného HTML select elementu. Podporuje jeden alebo viacero výberov pridaním atribútu `multiple`.Okrem toho ponúka funkcie, ako sú vymazateľné výbery a vlastný zastupný text (placeholder)." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

**Select** element rozširuje možnosti štandardného HTML select elementu. Podporuje jeden alebo viacero výberov pridaním atribútu `multiple`.
Okrem toho ponúka funkcie, ako sú vymazateľné výbery a vlastný zastupný text (placeholder). Vizuálne môže komponent zobrazovať vybrané možnosti ako chipy a obsahuje vstupné pole a rozbaľovací zoznam možností.

## Základné použitie

V predvolenom nastavení výber umožňuje používateľovi vybrať len jednu možnosť. Zahrnutím elementu `Icon` sa pri možnosti zobrazí aj zvolená ikona.

import SingleSelectionExample from '@site/static/usage/v1/select/basic/single-selection/index.md';

<SingleSelectionExample />

## Výber viacerých položiek

Pridaním atribútu `multiple` umožníte používateľovi vybrať viacero možností.

import MultipleSelectionExample from '@site/static/usage/v1/select/basic/multiple-selection/index.md';

<div className="xxlarge">

<MultipleSelectionExample />

</div>

## Clearable

Pridaním atribútu `clearable` umožníte používateľovi odstraniť všetky zvolené možnosti kliknutím na ikonu <Icon icon="radix-icons:cross-2" height="14" />.

import Clearable from '@site/static/usage/v1/select/clearable/index.md';

<div className="xxlarge">

<Clearable />

</div>

## Disabled

Pridaním atribútu `disabled` zabránite používateľovi interagovať so Selectom.

import Disabled from '@site/static/usage/v1/select/disabled/index.md';

<div className="xxlarge">

<Disabled />

</div>

## Standard

Pridaním atribútu `standard` sa zobrazí Select v štýle štandardného HTML selectu.

import Standard from '@site/static/usage/v1/select/standard/index.md';

<div className="xxlarge">

<Standard />

</div>


## Atribúty a Vlastnosti

### clearable

|  |  |
| --- | --- |
| Popis | Ak `true`, zobrazí sa ikona <Icon icon="radix-icons:cross-2" height="14" /> na zmazanie všetkých zvolených možností. |
| Atribút | `clearable` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

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

## CSS Shadow Parts

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

## Slots

| Slot | Popis |
| --- | --- |
| `anchor` | Obsah sa umiestni do elementu `.wrapper` |
| `arrow` | Obsah sa umiestni do elementu `wj-icon` vo vnútri   |