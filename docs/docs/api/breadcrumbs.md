---
title: 'Breadcrumbs'
---

import Props from '@ionic-internal/component-api/v1-sk/breadcrumbs/props.md';
import Events from '@ionic-internal/component-api/v1-sk/breadcrumbs/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/breadcrumbs/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/breadcrumbs/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/breadcrumbs/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/breadcrumbs/slots.md';

<head>
  <title>Breadcrumbs | Navigačná cesta</title>
  <meta
    name="description"
    content="Breadcrumbs je komponent, ktorý zobrazuje cestu, po ktorej používateľ prešiel v rámci aplikácie alebo webu. Tento element zobrazuje hierarchické usporiadanie stránok, v ktorom každý segment."
  />
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

Zbalené položky je možné zobraziť aj v podobe rozbaľovacieho okna použitím vlastnosti `collapsed-variant` s hodnotou `dropdown`.

import PopoverOnClick from '@site/static/usage/v1/breadcrumbs/collapsing-items/popover-on-click/index.md';

<PopoverOnClick />


## Kedy použiť

Použite `wje-breadcrumbs`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

## Kedy nepoužiť

Nepoužívajte viac paralelných navigačných vzorov, ktoré si navzájom konkurujú.

## Prístupnosť

Zabezpečte jasné active/selected stavy, predvídateľné poradie tabulátora a pomenovanie ovládacích prvkov.

## Odporúčané postupy

- Držte URL a UI stav v synchronizácii, aby bola navigácia reprodukovateľná.
- Používajte konzistentné názvoslovie položiek naprieč menu, breadcrumbom a tabmi.
- Pri hlbokých štruktúrach pridajte pomocný kontext (breadcrumb, nadpis, ikony).

## Atribúty a vlastnosti

<Props />

## Udalosti

<Events />

## Metódy

<Methods />

## CSS tieňové časti

<Parts />

## CSS vlastné premenné

<CustomProps />

## Sloty

<Slots />
