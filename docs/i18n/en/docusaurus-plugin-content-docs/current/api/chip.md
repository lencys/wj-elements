---
title: 'Chip'
---

import Props from '@ionic-internal/component-api/v1/chip/props.md';
import Events from '@ionic-internal/component-api/v1/chip/events.md';
import Methods from '@ionic-internal/component-api/v1/chip/methods.md';
import Parts from '@ionic-internal/component-api/v1/chip/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/chip/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/chip/slots.md';

<head>
  <title>Chip | Small universal visual block</title>
  <meta
    name="description"
    content="API documentation for wje-chip, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Chip component is a universal element that is a small visual block containing various other elements such as avatars, text and icons. It offers options to customize colors, states and more.

## Basic use

This example shows the chip in its simplest form, as a short label or filter without additional content.

import Basic from '@site/static/usage/v1/chip/basic/index.md';

<Basic />

## Inserting other elements

It is also possible to display other elements in the chip element, for example **avatar**, **label** and **icon** elements.

import SlotExample from '@site/static/usage/v1/chip/slots/index.md';

<SlotExample />

## Styling

### Color variants

This example compares chip color variants to help choose an appropriate style for labels, filters, or statuses.

import Colors from '@site/static/usage/v1/chip/theming/colors/index.md';

<Colors />

### Styling with CSS custom properties

This example focuses on chip styling through CSS variables instead of changing markup or API settings.

import CSSProps from '@site/static/usage/v1/chip/theming/css-properties/index.md';

<CSSProps />


## When to use

Use `wje-chip` to improve readability, scannability, and contextual understanding of content.

## When not to use

Do not replace structured interactive data with media-only presentation when precision is needed.

## Accessibility

Provide alt text, maintain readable contrast, and include text equivalents for icon-only controls.

## Best Practices

- Compress media and use lazy loading in larger collections.
- Keep information priority consistent across cards/lists.
- Avoid duplicating the same meaning in icon and text without added value.

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
