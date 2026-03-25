---
title: 'Layout'
---

import Props from '@ionic-internal/component-api/v1-sk/layout/props.md';
import Events from '@ionic-internal/component-api/v1-sk/layout/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/layout/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/layout/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/layout/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/layout/slots.md';

<head>
  <title>Layout | Element umožňujúci jednoducho zostaviť layout stránky</title>
  <meta
    name="description"
    content="**WebJET Elements** umožňuje si jednoducho zostaviť rozvrhnutie stránok pomocou 5 základných elementov: Container, Header, Main, Aside a Footer."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

**WebJET Elements** umožňuje jednoducho skladať rozvrhnutie stránky pomocou piatich základných stavebných blokov: [Container](./container), [Header](./header), [Main](./main), [Aside](./aside) a [Footer](./footer). Pri komplexnejších stránkach ich môžete kombinovať aj so systémom [Grid](./grid).

## Príklady použitia

import Basic from '@site/static/usage/v1/layout/basic/index.md';

<div className="xxxlarge">

<Basic />

</div>


## Kedy použiť

Použite layout primitives WebJET Elements vtedy, keď potrebujete stabilnú štruktúru stránky s jasnou hierarchiou hlavičky, hlavného obsahu, bočného panelu a päty.

## Kedy nepoužiť

Tieto elementy nepoužívajte na riešenie biznis logiky ani na orchestráciu stavu aplikácie. Ich úlohou je štruktúra a rozloženie.

## Prístupnosť

Zachovajte semantiku dokumentu (`header`, `main`, `aside`, `footer`) a logické poradie fokusovateľných prvkov. Na stránke by mal byť vždy práve jeden hlavný obsahový región `main`.

## Odporúčané postupy

- Najprv definujte desktop/mobile breakpoints a až potom dolaďujte detaily.
- Preferujte konzistentné spacing tokeny pred ad-hoc margin/padding hodnotami.
- Pri layoutoch s overflow vždy otestujte klávesnicovú navigáciu a čítačky.

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
