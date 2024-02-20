---
title: "Thumbnail"
---
import Props from '@ionic-internal/component-api/v1/thumbnail/props.md';
import Events from '@ionic-internal/component-api/v1/thumbnail/events.md';
import Methods from '@ionic-internal/component-api/v1/thumbnail/methods.md';
import Parts from '@ionic-internal/component-api/v1/thumbnail/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/thumbnail/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/thumbnail/slots.md';

<head>
  <title>Thumbnail | Komponent pre zobrazenie náhľadov obrázkov</title>
  <meta name="description" content="Thumbnail uľahčuje zobrazenie väčších obrázkov alebo iných médií zobrazením ich menšieho náhľadu. Je ho možné použiť samostatne ale aj v iných elementoch." />
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

## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />