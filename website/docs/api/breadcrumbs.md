---
title: "Breadcrumbs"
---

<head>
  <title>Breadcrumbs | Navigačná cesta</title>
  <meta name="description" content="Breadcrumbs je komponent, ktorý zobrazuje cestu, po ktorej používateľ prešiel v rámci aplikácie alebo webu. Tento element zobrazuje hierarchické usporiadanie stránok, v ktorom každý segment cesty 
  Breadcrumb je hyperlink, umožňujúci rýchly návrat na predchádzajúce úrovne. Breadcrumbs môže obsahovať ikonu." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Breadcrumbs je komponent, ktorý zobrazuje cestu, po ktorej používateľ prešiel v rámci aplikácie alebo webu. Tento element zobrazuje hierarchické usporiadanie stránok, v ktorom každý segment cesty [**Breadcrumb**](./breadcrumb) je hyperlink, umožňujúci rýchly návrat na predchádzajúce úrovne. Breadcrumbs môže obsahovať ikonu.

## Základné použitie

import Basic from '@site/static/usage/v1/breadcrumbs/basic/index.md';

<Basic />

## Použitie s ikonami

import IconsOnItems from '@site/static/usage/v1/breadcrumbs/icons/icons-on-items/index.md';

<IconsOnItems />

## Vlastná ikona oddeľovača

import CustomSeparators from '@site/static/usage/v1/breadcrumbs/icons/custom-separators/index.md';

<CustomSeparators />

## Zbaľovací breadcrumb

### Maximálny počet položiek

Ak je v zozname viac položiek ako hodnota `maxItems`, zoznam sa zbalí. V predvolenom nastavení sa zobrazí len prvá a posledná položky.

import MaxItems from '@site/static/usage/v1/breadcrumbs/collapsing-items/max-items/index.md';

<MaxItems />

### Počet položiek pred alebo po zbalení

Keď sú položky zbalené, počet položiek, ktoré sa majú zobraziť, možno ovládať pridaním vlastností `itemsBeforeCollapse` a `itemsAfterCollapse`.

import ItemsBeforeAfter from '@site/static/usage/v1/breadcrumbs/collapsing-items/items-before-after/index.md';

<ItemsBeforeAfter />

### Rozbaľovacie okno

Zbalené položky je možné zobraziť aj v podobe rozbaľovacieho okna použítím vlastnosti `collapsed-variant` s hodnotou `dropdown`.

import PopoverOnClick from '@site/static/usage/v1/breadcrumbs/collapsing-items/popover-on-click/index.md';

<PopoverOnClick />

## Atribúty a Vlastnosti

### itemsAfterCollapse

|  |  |
| --- | --- |
| Popis | Určuje hodnotu maximálneho počtu zobrazených položiek po zbalení |
| Atribút | `itemsAfterCollapse` |
| Typ | `integer` |
| Predvolená hodnota | `0` |

### itemsBeforeCollapse

|  |  |
| --- | --- |
| Popis | Určuje hodnotu maximálneho počtu zobrazených položiek pred zbalení  |
| Atribút | `itemsBeforeCollapse` |
| Typ | `integer` |
| Predvolená hodnota | `0` |

### maxItems

|  |  |
| --- | --- |
| Popis | Určuje hodnotu maximálneho počtu zobrazených položiek v navigácii Breadcrumbs |
| Atribút | `maxItems` |
| Typ | `integer` |
| Predvolená hodnota | `0` |


## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

Pre tento komponent nie sú k dispozícií žiadne CSS custom vlastnosti.

## Sloty

Pre tento komponent nie sú k dispozícií žiadne pomenované sloty.