---
title: 'Badge'
---

import Props from '@ionic-internal/component-api/v1-sk/badge/props.md';
import Events from '@ionic-internal/component-api/v1-sk/badge/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/badge/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/badge/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/badge/slots.md';

<head>
  <title>Badge | Odznaky</title>
  <meta
    name="description"
    content="Badge sú inline-block elementy, ktoré majú informatívny charakter a zvyčajne sa zobrazujú v blízkosti iného elementu."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Badge sú inline-block elementy, ktoré majú informatívny charakter a zvyčajne sa zobrazujú v blízkosti iného elementu. Používajú sa ako upozornenie, že k elementu sú priradené ďalšie elementy, a informujú používateľa o ich počte.

## Základné použitie

Ak chcete použiť komponent Badge, zahrňte ho do HTML s požadovanými atribútmi.

import Basic from '@site/static/usage/v1/badge/basic/index.md';

<Basic />

## Zoznam

import List from '@site/static/usage/v1/badge/list/index.md';

<List />

## Úprava štýlov

### Farby

import Colors from '@site/static/usage/v1/badge/theming/colors/index.md';

<Colors />


## Kedy použiť

Použite `wje-badge` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
