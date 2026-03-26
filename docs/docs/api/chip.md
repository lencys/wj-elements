---
title: 'Chip'
---

import Props from '@ionic-internal/component-api/v1-sk/chip/props.md';
import Events from '@ionic-internal/component-api/v1-sk/chip/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/chip/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/chip/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/chip/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/chip/slots.md';

<head>
  <title>Chip | Malý univerzálny vizuálny blok</title>
  <meta
    name="description"
    content="Komponent Chip je univerzálny element, ktorý predstavuje malý vizuálny blok obsahujúci rôzne ďalšie elementy, ako napríklad avatary, text a ikony."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent Chip je univerzálny element, ktorý predstavuje malý vizuálny blok obsahujúci rôzne ďalšie elementy, ako napríklad avatary, text a ikony. Ponúka možnosti prispôsobenia farieb, stavov a ďalšie.

## Základné použitie

Ukážka zobrazuje chip v jeho najjednoduchšej podobe ako krátky štítok alebo filter bez ďalších doplnkov.

import Basic from '@site/static/usage/v1/chip/basic/index.md';

<Basic />

## Vkladanie ďalších prvkov

V elemente chip je možné zobraziť aj ďalšie elementy, napríklad elementy **avatar**, **label** a **icon**.

import SlotExample from '@site/static/usage/v1/chip/slots/index.md';

<SlotExample />

## Štýlovanie

### Farebné varianty

Ukážka porovnáva farebné varianty chipu, aby bolo jednoduchšie vybrať vhodný štýl pre štítky, filtre alebo stavy.

import Colors from '@site/static/usage/v1/chip/theming/colors/index.md';

<Colors />

### Štýlovanie pomocou CSS custom vlastností

Ukážka sa sústreďuje na úpravu vzhľadu chipu cez CSS premenné namiesto zmeny markupu alebo API.

import CSSProps from '@site/static/usage/v1/chip/theming/css-properties/index.md';

<CSSProps />


## Kedy použiť

Použite `wje-chip` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
