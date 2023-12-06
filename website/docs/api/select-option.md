---
title: "Option"
---


<head>
  <title>Option | jednotlivé voliteľné možnosti v rámci komponentu Select</title>
  <meta name="description" content="Element Option predstavuje jednotlivé voliteľné možnosti v rámci komponentu Select. Je obdobný štandardnému elementu HTML select a umožňuje používateľom vykonať jeden alebo viacero výberov na základe konfigurácie komponentu Select." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Option predstavuje jednotlivé voliteľné možnosti v rámci komponentu [Select](./select). Je obdobný štandardnému elementu HTML select a umožňuje používateľom vykonať jeden alebo viacero výberov na základe konfigurácie komponentu `select`. Tieto elementry sa môžu dynamicky napĺňať a sú navrhnuté tak, aby bezproblémovo spolupracovali s vlastnou logikou komponentu wj-select vrátane funkcií, ako je viacnásobný výber a vlastné štylizovanie.

Pre informácie o použití Option sa presuňte do dokumentácie elementu [Select.](./select)


## Atribúty a Vlastnosti

### value

|  |  |
| --- | --- |
| Popis | Určuje hodnotu daného option elementu |
| Atribút | `value` |
| Typ | `any` |
| Predvolená hodnota | `undefined` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

| Názov | Popis |
| --- | --- |
| `native` | Odkazuje na `<div>` element |

## CSS Custom Properties
<CustomProps />

## Slots
| Názov | Popis |
| --- | --- |
| `` | Obsah sa umiestni medzi named sloty. |
| `end` | Obsah sa umiestni vpravo. |
| `start` | Obsah je umiestnený vľavo. |