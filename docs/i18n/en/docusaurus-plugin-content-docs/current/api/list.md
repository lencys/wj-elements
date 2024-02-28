---
title: List
---

import Props from '@ionic-internal/component-api/v1/list/props.md';
import Events from '@ionic-internal/component-api/v1/list/events.md';
import Methods from '@ionic-internal/component-api/v1/list/methods.md';
import Parts from '@ionic-internal/component-api/v1/list/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/list/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/list/slots.md';


  <title>List | List of items display component</title>
  <meta name="description" content="Komponent List (Zoznam) sa skladá z viacerých elementov [Item](item) a môže obsahovať text, tlačidlá, prepínače, ikony, náhľady obrázkov, a mnoho iného. Listy vo všeobecnosti obsahujú položky s rovnakým obsahom a zoskupujú ich do väčšieho celku." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

The **List** (List) component consists of multiple [Item](../item) elements and can contain text, buttons, toggles, icons, image thumbnails, and much more. Sheets generally contain items with the same content and group them into a larger whole.

## Basic Usage

import Basic from '@site/static/usage/v1/list/basic/index.md';

<Basic />

## Nested leaf

Setting the value of the inset property to true adds a margin to the element's surroundings to create a nested list.

import Inset from '@site/static/usage/v1/list/inset/index.md';

<Inset />

## Line separation

The **lines** property modifies the bottom edge of items. Setting it to "full" will show full-width margins, "**inset**" will show left-padded margins, and "**none**" will show no margins.

If the lines property is set on the item, this property will take precedence over the property on the sheet.

import Lines from '@site/static/usage/v1/list/lines/index.md';

<Lines />

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
