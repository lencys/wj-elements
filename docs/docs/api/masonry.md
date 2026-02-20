---
title: 'Masonry'
---

import Props from '@ionic-internal/component-api/v1-sk/masonry/props.md';
import Events from '@ionic-internal/component-api/v1-sk/masonry/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/masonry/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/masonry/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/masonry/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/masonry/slots.md';

<head>
  <title>Masonry | Vytvára responzívne 'Masonry' rozvrhnutie podriadených prvkov</title>
  <meta
    name="description"
    content="Komponent Masonry vytvára responzívne &quot;Masonry&quot; rozvrhnutie podriadených prvkov, ktoré sú dynamicky usporiadané do stĺpcov na základe zadaných atribútov."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent Masonry vytvára responzívne "Masonry" rozvrhnutie podriadených prvkov, ktoré sú dynamicky usporiadané do stĺpcov na základe zadaných atribútov. Podporuje prispôsobenie počtu stĺpcov, maximálnej šírky stĺpcov, medzery medzi prvkami a debouncing na optimalizáciu výkonu.

## Základné použitie

import Basic from '@site/static/usage/v1/masonry/basic/index.md';

<Basic />

## Maximálna šírka stĺpcov

Použitím atribútu `max-col-width` obmedzíte šírku stĺpcov na zadanú hodnotu.

import MaxColWidth from '@site/static/usage/v1/masonry/max-col-width/index.md';

<MaxColWidth />

## Gap

Použitím atribútu `gap` určíte šírku medzery medzi stĺpcami v pixeloch.

import Gap from '@site/static/usage/v1/masonry/gap/index.md';

<Gap />


## Kedy použiť

Použite `wje-masonry` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

## Kedy nepoužiť

Nepoužívajte ho na riešenie biznis logiky ani na stavovú orchestráciu komponentov.

## Prístupnosť

Zachovajte semantiku dokumentu (`header`, `main`, `aside`, `footer`) a logické poradie fokusovateľných prvkov.

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
