---
title: 'Card Controls'
---

import Props from '@ionic-internal/component-api/v1-sk/card-controls/props.md';
import Events from '@ionic-internal/component-api/v1-sk/card-controls/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/card-controls/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/card-controls/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/card-controls/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/card-controls/slots.md';

<head>
  <title>Card Controls</title>
  <meta
    name="description"
    content="Tento element slúži na použitie v Card Header. pre zobrazenie tlačidiel na vykonanie rôznych akcií súvisiacich s kartou."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tento element slúži na použitie v [Card Header.](./card-header) pre zobrazenie tlačidiel na vykonanie rôznych akcií súvisiacich s kartou.

:::note Poznámka
Pre viac informácií o použití Card Controls sa presuňte do dokumentácie elementu [**Card Header**](./card-header).
:::


## Kedy použiť

Použite `wje-card-controls` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

## Kedy nepoužiť

Nepoužívajte ho ako náhradu za štruktúrované dáta tam, kde je potrebná presná interakcia.

## Prístupnosť

Doplňte alternatívny text pre obrázky, čitateľné kontrasty a textové ekvivalenty pre ikony bez popisu.

## Odporúčané postupy

- Komprimujte médiá a používajte lazy loading pri veľkých zoznamoch.
- Pri kartách a zoznamoch držte konzistentné informačné priority.
- Neopakujte rovnakú informáciu súčasne textom aj ikonou bez pridanej hodnoty.

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
