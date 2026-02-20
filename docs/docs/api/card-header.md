---
title: 'Card Header'
---

import Props from '@ionic-internal/component-api/v1-sk/card-header/props.md';
import Events from '@ionic-internal/component-api/v1-sk/card-header/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/card-header/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/card-header/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/card-header/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/card-header/slots.md';

<head>
  <title>Card Header</title>
  <meta
    name="description"
    content="Element Card header je komponent navrhnutý pre použitie v kartách a slúži ako kontajner na umiestnenie príslušných nadpisov, ikon alebo iného obsahu, ktorý pomáha používateľovi rýchlo."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Card header je komponent navrhnutý pre použitie v kartách a slúži ako kontajner na umiestnenie príslušných nadpisov, ikon alebo iného obsahu, ktorý pomáha používateľovi rýchlo pochopiť kontext alebo účel hlavného obsahu karty.

:::note Poznámka
Pre viac informácií o použití Card Header sa presuňte do dokumentácie elementu [**Card**](./card).
:::


## Kedy použiť

Použite `wje-card-header` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
