---
title: 'OrgChartItem'
---

import Props from '@ionic-internal/component-api/v1-sk/orgchart-item/props.md';
import Events from '@ionic-internal/component-api/v1-sk/orgchart-item/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/orgchart-item/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/orgchart-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/orgchart-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/orgchart-item/slots.md';

<head>
  <title>OrgChartItem | OrgChartItem</title>
  <meta
    name="description"
    content="API dokumentácia pre wje-orgchart-item vrátane odporúčaného použitia, atribútov, udalostí, metód, možností štýlovania a slotov."
  />
</head>

Komponent OrgChartItem slúži na zobrazenie jednej položky v organizačnej štruktúre.
Môže obsahovať rôzne typy uzlov a prepojenia medzi nimi. Tento komponent je súčasťou [OrgChart](./orgchart) komponentu, ktorý slúži na zobrazenie celej organizačnej štruktúry.

Pre viac informácií o použití OrgChartItem prejdite na stránku dokumentácie elementu [**OrgChart**](./orgchart).


## Kedy použiť

Použite `wje-orgchart-item`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
