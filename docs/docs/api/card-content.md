---
title: 'Card Content'
---

import Props from '@ionic-internal/component-api/v1-sk/card-content/props.md';
import Events from '@ionic-internal/component-api/v1-sk/card-content/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/card-content/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/card-content/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/card-content/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/card-content/slots.md';

<head>
  <title>Card Header</title>
  <meta
    name="description"
    content="Tento element slúži na použitie v karte pre umiestnenie primárneho obsahu karty."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tento element slúži na použitie v karte pre umiestnenie primárneho obsahu karty.

:::note Poznámka

Pre viac informácií o použití Card Content sa presuňte do dokumentácie elementu [**Card**](./card).

:::


## Kedy použiť

Použite `wje-card-content` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
