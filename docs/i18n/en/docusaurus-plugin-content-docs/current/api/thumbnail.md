---
title: 'Thumbnail'
---

import Props from '@ionic-internal/component-api/v1/thumbnail/props.md';
import Events from '@ionic-internal/component-api/v1/thumbnail/events.md';
import Methods from '@ionic-internal/component-api/v1/thumbnail/methods.md';
import Parts from '@ionic-internal/component-api/v1/thumbnail/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/thumbnail/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/thumbnail/slots.md';

<head>
  <title>Thumbnail | Image thumbnail component</title>
  <meta
    name="description"
    content="Thumbnail makes it easier to view larger images or other media by displaying a smaller preview of them. It can be used alone but also in other elements."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Thumbnail makes it easier to view larger images or other media by displaying a smaller preview of them. It can be used alone but also in other elements.

## Basic usage

import Basic from '@site/static/usage/v1/thumbnail/basic/index.md';

<Basic />

## Use in Items

When used in [Item.](./item) elements, its size adjusts to the size of the parent, and its position can be specified by adding a `slot` with a value of `start` for left positioning, or `end` for right positioning.

import Item from '@site/static/usage/v1/thumbnail/item/index.md';

<Item />

## Custom styles

import CSSProps from '@site/static/usage/v1/thumbnail/theming/css-properties/index.md';

<CSSProps />


## When to use

Use `wje-thumbnail` to improve readability, scannability, and contextual understanding of content.

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
