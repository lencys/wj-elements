---
title: 'OrgChartGroup'
---

import Props from '@ionic-internal/component-api/v1-sk/orgchart/props.md';
import Events from '@ionic-internal/component-api/v1-sk/orgchart/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/orgchart/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/orgchart/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/orgchart/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/orgchart/slots.md';

<head>
  <title>OrgChartItem | OrgChartItem</title>
  <meta
    name="description"
    content="API dokumentácia pre wje-orgchart-group vrátane odporúčaného použitia, atribútov, udalostí, metód, možností štýlovania a slotov."
  />
</head>

Komponent `OrgChartGroup` slúži na zoskupovanie položiek [OrgChartItem](./orgchart-item) v organizačnej štruktúre [OrgChart](./orgchart).

Pre viac informácií o použití OrgChartItem prejdite na stránku dokumentácie elementu [**OrgChart**](./orgchart).


## Kedy použiť

Použite `wje-orgchart-group`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
