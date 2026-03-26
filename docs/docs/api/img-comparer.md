---
title: 'Image Comparer'
---

import Props from '@ionic-internal/component-api/v1-sk/image-comparer/props.md';
import Events from '@ionic-internal/component-api/v1-sk/image-comparer/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/image-comparer/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/image-comparer/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/image-comparer/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/image-comparer/slots.md';

<head>
  <title>Image Comparer | Porovnávač obrázkov</title>
  <meta
    name="description"
    content="Element Image Comparer slúži na porovnanie dvoch obrázkov. Obrázky zobrazí na sebe a umožňuje odkrývať spodný obrázok pomocou vstavaného posuvníka."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Image Comparer slúži na porovnanie dvoch obrázkov. Obrázky zobrazí na sebe a umožňuje odkrývať spodný obrázok pomocou vstavaného posuvníka.

## Basic Usage

Ukážka predstavuje základné porovnanie dvoch obrázkov, aby bolo jasné, ako funguje posuvník a rozdelenie pohľadu.

import Basic from '@site/static/usage/v1/img-comparer/basic/index.md';

<div class="large">

<Basic />

</div>


## Kedy použiť

Použite `wje-img-comparer` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
