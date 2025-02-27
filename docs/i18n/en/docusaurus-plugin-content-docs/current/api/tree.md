---
title: Tree
---

import Props from '@ionic-internal/component-api/v1/accordion/props.md';
import Events from '@ionic-internal/component-api/v1/accordion/events.md';
import Methods from '@ionic-internal/component-api/v1/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v1/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/accordion/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/accordion/slots.md';

<head>
  <title>Accordion: view content in drop-down sections</title>
  <meta
    name="description"
    content="Element Accordion umožňuje zobraziť obsah v rozbaľovacích sekciách. Každá sekcia môže byť rozbalená alebo zbalená kliknutím, čo umožňuje používateľom rýchlo nájsť a zobraziť požadované informácie. Element podporuje viacnásobný výber, čo znamená, že môže byť naraz rozbalených viacero sekcií. Okrem toho umožňuje nastaviť počiatočný index rozbalenej sekcie, čo poskytuje flexibilitu pri inicializácii komponentu s predvoleným rozbaleným obsahom.
"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `Tree` element allows hierarchical display of data in a tree structure. It is used to visualize categories, file systems or navigation structures. Tree contains wje-tree as the main container and wje-tree-item as the individual tree entries. Items can contain children, creating a nested hierarchy.

## Basic use

import Basic from '@site/static/usage/v1/tree/basic/index.md';

<Basic />

## Multiple

import Multiple from '@site/static/usage/v1/tree/multiple/index.md';

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
