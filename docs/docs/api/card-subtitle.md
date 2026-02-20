---
title: 'Card Subtitle'
---

import Props from '@ionic-internal/component-api/v1-sk/card-subtitle/props.md';
import Events from '@ionic-internal/component-api/v1-sk/card-subtitle/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/card-subtitle/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/card-subtitle/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/card-subtitle/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/card-subtitle/slots.md';

<head>
  <title>Card Subtitle | Doplnkový alebo sekundárny text Card</title>
  <meta
    name="description"
    content="Element Card subtitle je komponent navrhnutý na použitie v rámci elementu Card Header na zobrazenie doplnkového alebo sekundárneho textu, čím používateľovi poskytuje dodatočný kontext alebo."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Card subtitle je komponent navrhnutý na použitie v rámci elementu [Card Header](./card-header) na zobrazenie doplnkového alebo sekundárneho textu, čím používateľovi poskytuje dodatočný kontext alebo informácie súvisiace s hlavným obsahom karty.

:::note Poznámka
Pre viac informácií o použití Card Subtitle sa presuňte do dokumentácie elementu [**Card**](./card).
:::


## Kedy použiť

Použite `wje-card-subtitle` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
