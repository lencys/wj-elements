---
title: 'Image'
---

import Props from '@ionic-internal/component-api/v1/image/props.md';
import Events from '@ionic-internal/component-api/v1/image/events.md';
import Methods from '@ionic-internal/component-api/v1/image/methods.md';
import Parts from '@ionic-internal/component-api/v1/image/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/image/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/image/slots.md';

<head>
  <title>Image Element | Element pre zobrazovanie obrázkov</title>
  <meta
    name="description"
    content="Element Image pridáva obrázkom funkciu lazyload a počas načítavania zobrazuje zástupnú ikonu (placeholder) v podobe animovaného obrázka."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Image slúži na zobrazovanie obrázkov. Pridáva obrázkom funkciu lazyload a počas načítavania zobrazuje zástupnú ikonu (loader) v podobe animovaného obrázka.

Využíva Intersection Observer API, vďaka čomu načítava obrázky iba vtedy, keď sú viditeľné v okne prehliadača. To znižuje sieťové zaťaženie a zlepšuje výkon stránky.

## Basic Usage

import Basic from '@site/static/usage/v1/img/basic/index.md';

<Basic />

## Fallout

Atribút `Fallout` určuje akciu, ktorá sa má vykonať v prípade chyby pri načítaní obrázka. Možné hodnoty sú `delete` (odstráni sa obrázok) alebo `log` (vypíše chybu do konzoly).

### Fallout - Delete (odstrániť)

Atribút `fallout` s hodnotou `"delete"` spôsobí odstránenie elementu v prípade, že prišlo k chybe pri načítaní obrázka.

import FalloutDelete from '@site/static/usage/v1/img/fallout-delete/index.md';

<FalloutDelete />

### Fallout - Log

Atribút `fallout` s hodnotou `"log"` spôsobí odstránenie elementu v prípade, že prišlo k chybe pri načítaní obrázka.

import FalloutLog from '@site/static/usage/v1/img/fallout-log/index.md';

<FalloutLog />

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
