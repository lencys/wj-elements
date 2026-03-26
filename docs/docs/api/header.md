---
title: 'Header'
---

import Props from '@ionic-internal/component-api/v1-sk/header/props.md';
import Events from '@ionic-internal/component-api/v1-sk/header/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/header/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/header/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/header/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/header/slots.md';

<head>
  <title>Header | Element určený na tvorbu layoutov</title>
  <meta
    name="description"
    content="Header je súčasťou elementov určených na tvorbu layoutov a zobrazuje sa v hornej časti. Používa sa väčšinou na zobrazenie navigácie, loga a pod."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Header je súčasťou elementov určených na tvorbu layoutov a zobrazuje sa v hornej časti. Používa sa väčšinou na zobrazenie navigácie, loga a pod.

## Základné použitie

Samostatná ukážka nižšie zobrazuje header v najjednoduchšom vertikálnom layoute s hlavným obsahom pod ním.

import Basic from '@site/static/usage/v1/header/basic/index.md';

<Basic />

:::note
Pre informácie o použití **Header** elementu sa presuňte do dokumentácie [**Layoutu**](./layout).
:::


## Kedy použiť

Použite `wje-header` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

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
