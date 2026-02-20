---
title: 'Thumbnail'
---

import Props from '@ionic-internal/component-api/v1-sk/thumbnail/props.md';
import Events from '@ionic-internal/component-api/v1-sk/thumbnail/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/thumbnail/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/thumbnail/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/thumbnail/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/thumbnail/slots.md';

<head>
  <title>Thumbnail | Komponent pre zobrazenie náhľadov obrázkov</title>
  <meta
    name="description"
    content="Thumbnail uľahčuje zobrazenie väčších obrázkov alebo iných médií zobrazením ich menšieho náhľadu. Je ho možné použiť samostatne ale aj v iných elementoch."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Thumbnail uľahčuje zobrazenie väčších obrázkov alebo iných médií zobrazením ich menšieho náhľadu. Je ho možné použiť samostatne ale aj v iných elementoch.

## Základné použitie

import Basic from '@site/static/usage/v1/thumbnail/basic/index.md';

<Basic />

## Použitie v Itemoch

Pri použití v elementoch [Item.](./item) sa jeho veľkosť prispôsobí veľkosti rodiča a jeho pozíciu je možné určiť pridaním `slotu` s hodnotou `start` pre umiestnenie vľavo, alebo `end` pre umiestnenie vpravo.

import Item from '@site/static/usage/v1/thumbnail/item/index.md';

<Item />

## Vlastné štýly

import CSSProps from '@site/static/usage/v1/thumbnail/theming/css-properties/index.md';

<CSSProps />


## Kedy použiť

Použite `wje-thumbnail` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
