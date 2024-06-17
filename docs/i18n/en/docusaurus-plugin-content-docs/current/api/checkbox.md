---
title: Checkbox
---

import Props from '@ionic-internal/component-api/v1/checkbox/props.md';
import Events from '@ionic-internal/component-api/v1/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v1/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v1/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/checkbox/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/checkbox/slots.md';

<head>
  <title>Checkbox | WebJET Element for selecting multiple options</title>
  <meta name="description" content="Checkbox, alebo tiež začiarkavacie políčko, je element, ktorý umožňuje používateľom vybrať jednu alebo viac možností z množiny. Kliknutím na checkbox zmeníte jeho stav na `true` alebo `false`." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A checkbox, or also a check box, is an element that allows users to select one or more options from a set. Click on the checkbox to change its status to `true` or `false`.

## Basic usage

import Basic from '@site/static/usage/v1/checkbox/basic/index.md';

<Basic />

## Indeterminate checkbox

When the `indeterminate` attribute is added, a checkbox is displayed whose default state is neutral, i.e. neither `true` nor `false`.

import Indeterminate from '@site/static/usage/v1/checkbox/indeterminate/index.md';

<Indeterminate />

## Variant

Adding the `variant` attribute with the value `circle` will display a checkbox in a round shape.

import Variant from '@site/static/usage/v1/checkbox/variant/index.md';

<Variant />

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
