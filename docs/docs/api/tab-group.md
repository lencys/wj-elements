---
title: 'TabGroup'
---

import Props from '@ionic-internal/component-api/v1/tab-group/props.md';
import Events from '@ionic-internal/component-api/v1/tab-group/events.md';
import Methods from '@ionic-internal/component-api/v1/tab-group/methods.md';
import Parts from '@ionic-internal/component-api/v1/tab-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/tab-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/tab-group/slots.md';

<head>
  <title>TabGroup | Navigácia založená na záložkách</title>
  <meta
    name="description"
    content="TabGroup zobrazuje navigáciu založenú na záložkách, ktorá umožňuje používateľom prepínať sa a zobrazovať rôzne časti obsahu aplikácie bez potreby prechádzať na inú stránku."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

TabGroup zobrazuje navigáciu založenú na záložkách, ktorá umožňuje používateľom prepínať sa a zobrazovať rôzne časti obsahu aplikácie bez potreby prechádzať na inú stránku. Skladá sa z jednotlivých záložiek [Tab](tab.md) a [Panelov](tab-panel.md), ktoré po kliknutí na záložku zobrazia jej obsah.
TabGroup element podporuje viacero variantov vzhľadu pomocou atribútu `variant`.

## Základné použitie

Element `Card` bol použitý len za účelom tejto ukážky.

import Basic from '@site/static/usage/v1/tab-group/basic/index.md';

<Basic />

## Varianty umiestnenia tabov

Pridaním vlastnosti `variant` je možné zmeniť umiestnenie tabov. Podporované sú hodnoty `start`, `end` a `bottom`.

### Start

import Start from '@site/static/usage/v1/tab-group/start/index.md';

<Start />

### End

import End from '@site/static/usage/v1/tab-group/end/index.md';

<End />

### Bottom

import Bottom from '@site/static/usage/v1/tab-group/bottom/index.md';

<Bottom />

## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />
