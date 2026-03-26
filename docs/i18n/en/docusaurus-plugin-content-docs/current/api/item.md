---
title: 'Item'
---

import Props from '@ionic-internal/component-api/v1/item/props.md';
import Events from '@ionic-internal/component-api/v1/item/events.md';
import Methods from '@ionic-internal/component-api/v1/item/methods.md';
import Parts from '@ionic-internal/component-api/v1/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/item/slots.md';

<head>
  <title>Item | Blocks List element with diverse content</title>
  <meta
    name="description"
    content="Item components are blocks that can contain various types of content, including text, icons, avatars, images, inputs, and other standard or custom elements."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Item components are blocks that can contain various types of content, including text, icons, avatars, images, inputs, and other standard or custom elements. Item elements are usually found inside [List](./list) elements.

## Basic usage

This example shows the most common `wje-item` shape: a single content row with the default spacing and without extra variants.

import Basic from '@site/static/usage/v1/item/basic/index.md';

<Basic />

## Separation lines

The `lines` attribute controls how the bottom separator of each item is rendered. This is useful when you need softer or stronger visual division inside a list.

import Lines from '@site/static/usage/v1/item/lines/index.md';

<Lines />

## Use with images

This example combines the item with media so it is clear how image or preview content sits next to text.

import Media from '@site/static/usage/v1/item/media/index.md';

<Media />

## Use with buttons

This example adds actions to the item so you can see the recommended pattern for rows that also need quick controls.

import Buttons from '@site/static/usage/v1/item/buttons/index.md';

<Buttons />

## Use with icons

This example focuses on icon placement inside an item and on keeping icons aligned with text and supporting content.

import Icons from '@site/static/usage/v1/item/icons/index.md';

<Icons />


## When to use

Use `wje-item` to improve readability, scannability, and contextual understanding of content.

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
