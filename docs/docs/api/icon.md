---
title: 'Icon'
---

import Props from '@ionic-internal/component-api/v1-sk/icon/props.md';
import Events from '@ionic-internal/component-api/v1-sk/icon/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/icon/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/icon/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/icon/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/icon/slots.md';

<head>
  <title>Icon | WebJET Element pre zobrazovanie ikon</title>
  <meta
    name="description"
    content="Tento komponent poskytuje jednoduchý spôsob zobrazenia ikon zo sady SVG obrázkov, pričom umožňuje rôzne možnosti prispôsobenia. WebJET Elements využíva sadu ikon Tabler."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tento komponent poskytuje jednoduchý spôsob zobrazenia ikon zo sady SVG obrázkov, pričom umožňuje rôzne možnosti prispôsobenia. WebJET Elements využíva sadu ikon Tabler. Zoznam všetkých dostupných ikon nájdete na [tabler-icons.io](https://tabler-icons.io/).

## Základné použitie

import Basic from '@site/static/usage/v1/icon/basic/index.md';

<Basic />

## Štýl Outline / Filled

import Styles from '@site/static/usage/v1/icon/style/index.md';

<Styles />

## Custom

import Custom from '@site/static/usage/v1/icon/custom/index.md';

<Custom />


## Kedy použiť

Použite `wje-icon` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
