---
title: 'Icon Picker'
---

import Props from '@ionic-internal/component-api/v1-sk/icon-picker/props.md';
import Events from '@ionic-internal/component-api/v1-sk/icon-picker/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/icon-picker/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/icon-picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/icon-picker/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/icon-picker/slots.md';

<head>
  <title>Icon | WebJET Element pre vybratie zo sady ikon</title>
  <meta
    name="description"
    content="Icon picker umožňuje používateľovi nájsť a zvoliť ikonu zo sady dostupných ikon. Jeho súčasťou je textové vyhľádavanie pre jednoduchšie vyhľadanie ikony."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Icon picker umožňuje používateľovi nájsť a zvoliť ikonu zo sady dostupných ikon. Jeho súčasťou je textové vyhľádavanie pre jednoduchšie vyhľadanie ikony.

## Základné použitie

Ukážka predstavuje základný spôsob výberu ikony, bez ďalšej kompozície s inými komponentmi.

import Basic from '@site/static/usage/v1/icon-picker/basic/index.md';

<Basic />


## Kedy použiť

Použite `wje-icon-picker` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
