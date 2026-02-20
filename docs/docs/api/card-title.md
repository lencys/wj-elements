---
title: 'Card Title'
---

import Props from '@ionic-internal/component-api/v1-sk/card-title/props.md';
import Events from '@ionic-internal/component-api/v1-sk/card-title/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/card-title/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/card-title/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/card-title/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/card-title/slots.md';

<head>
  <title>Card Title | Zobrazujúci názov karty</title>
  <meta
    name="description"
    content="Element Card Title je komponent navrhnutý na použitie v rámci elementu Card Header a zobrazuje názov karty, čím používateľovi umožňuje rýchlo identifikovať jej predmet alebo obsah."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Card Title je komponent navrhnutý na použitie v rámci elementu [Card Header](./card-header) a zobrazuje názov karty, čím používateľovi umožňuje rýchlo identifikovať jej predmet alebo obsah.

:::note Poznámka
Pre viac informácií o použití Card Title sa presuňte do dokumentácie elementu [**Card**](./card).
:::


## Kedy použiť

Použite `wje-card-title` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
