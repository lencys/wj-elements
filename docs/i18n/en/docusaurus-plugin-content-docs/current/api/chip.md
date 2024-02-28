---
title: Chip
---

import Props from '@ionic-internal/component-api/v1/chip/props.md';
import Events from '@ionic-internal/component-api/v1/chip/events.md';
import Methods from '@ionic-internal/component-api/v1/chip/methods.md';
import Parts from '@ionic-internal/component-api/v1/chip/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/chip/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/chip/slots.md';


  <title>Chip | Small universal visual block</title>
  <meta name="description" content="Komponent Chip je univerzálny element, ktorý predstavuje malý vizuálny blok obsahujúci rôzne ďalšie elementy, ako napríklad avatary, text a ikony. Ponúka možnosti prispôsobenia farieb, stavov a ďalšie." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Chip component is a universal element that is a small visual block containing various other elements such as avatars, text and icons. It offers options to customize colors, states and more.

## Basic Usage

import Basic from '@site/static/usage/v1/chip/basic/index.md';

<Basic />

## Inserting other elements

It is also possible to display other elements in the chip element, for example **avatar**, **label** and **icon** elements.

import SlotExample from '@site/static/usage/v1/chip/slots/index.md';

<SlotExample />

## Styling

### Colour variants

import Colors from '@site/static/usage/v1/chip/theming/colors/index.md';

<Colors />

### Styling with CSS custom properties

import CSSProps from '@site/static/usage/v1/chip/theming/css-properties/index.md';

<CSSProps />

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
