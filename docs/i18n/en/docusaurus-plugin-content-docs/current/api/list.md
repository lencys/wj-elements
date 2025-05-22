---
title: List
---

import Props from '@ionic-internal/component-api/v1/list/props.md';
import Events from '@ionic-internal/component-api/v1/list/events.md';
import Methods from '@ionic-internal/component-api/v1/list/methods.md';
import Parts from '@ionic-internal/component-api/v1/list/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/list/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/list/slots.md';

<head>
  <title>List | List of items display component</title>
  <meta
    name="description"
    content="Komponent List (Zoznam) sa skladá z viacerých elementov [Item](item) a môže obsahovať text, tlačidlá, prepínače, ikony, náhľady obrázkov, a mnoho iného. Listy vo všeobecnosti obsahujú položky s rovnakým obsahom a zoskupujú ich do väčšieho celku."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `List` (Zoznam) sa skladá z viacerých elementov [Item](../item) (položiek) a môže obsahovať text, tlačidlá, prepínače, ikony, náhľady obrázkov, a mnoho iného. Sheets generally contain items with the same content and group them into a larger whole.

## Basic usage

import Basic from '@site/static/usage/v1/list/basic/index.md';

<Basic />

## Nested leaf

Setting the value of the inset property to true adds a margin to the element's surroundings to create a nested list.

import Inset from '@site/static/usage/v1/list/inset/index.md';

<Inset />

## Line separation

Vlastnosť `lines` upravuje spodný okraj itemov. Nastavením tejto vlastnosti na hodnotu "`none`" sa nezobrazia žiadne okraje medzi položkami zoznamu.

import Lines from '@site/static/usage/v1/list/lines/index.md';

<Lines />

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
