---
title: Masonry
---

import Props from '@ionic-internal/component-api/v1/masonry/props.md';
import Events from '@ionic-internal/component-api/v1/masonry/events.md';
import Methods from '@ionic-internal/component-api/v1/masonry/methods.md';
import Parts from '@ionic-internal/component-api/v1/masonry/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/masonry/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/masonry/slots.md';


  <title>Masonry | Creates a responsive 'Masonry' layout of child elements</title>
  <meta name="description" content="Komponent Masonry vytvára responzívne 'Masonry' rozvrhnutie podriadených prvkov, ktorý ich dynamicky usporadúva do stĺpcov na základe zadaných atribútov. Podporuje prispôsobenie počtu stĺpcov, maximálnej šírky stĺpcov, medzery medzi prvkami a debouncing na optimalizáciu výkonu." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Masonry component creates a responsive "Masonry" layout of child elements that are dynamically arranged into columns based on specified attributes. Supports customizing the number of columns, maximum column width, element spacing, and debouncing to optimize performance.

## Basic use

import Basic from '@site/static/usage/v1/masonry/basic/index.md';

<Basic />

## Maximum width of columns

Use the `max-col-width` attribute to limit the width of the columns to the specified value.

import MaxColWidth from '@site/static/usage/v1/masonry/max-col-width/index.md';

<MaxColWidth />

## The Gap

Use the `gap` attribute to specify the width of the gap between columns in pixels.

import Gap from '@site/static/usage/v1/masonry/gap/index.md';

<Gap />

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
