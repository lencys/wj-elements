---
title: 'Carousel'
---

import Props from '@ionic-internal/component-api/v1/carousel/props.md';

import Events from '@ionic-internal/component-api/v1/carousel/events.md';

import Methods from '@ionic-internal/component-api/v1/carousel/methods.md';

import Parts from '@ionic-internal/component-api/v1/carousel/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/carousel/custom-props.md';

import Slots from '@ionic-internal/component-api/v1/carousel/slots.md';

<head>
  <title>Card | Card format container</title>
  <meta
    name="description"
    content="API documentation for wje-carousel, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A **Carousel** is an element that displays multiple items, such as images or news updates, in a rotating fashion.

## Basic usage

This example shows the simplest carousel with several slides and default controls, so the baseline slide-to-slide behavior is easy to understand.

import Basic from '@site/static/usage/v1/carousel/basic/index.md';

<Basic />

## Paginaton

This example enables pagination controls so you can see how users can move between slides without relying on gestures or arrows.

import Pagination from '@site/static/usage/v1/carousel/pagination/index.md';

<Pagination />

## No loop

This example disables infinite looping, so the first and last slide behave like real boundaries.

import NoLoop from '@site/static/usage/v1/carousel/no-loop/index.md';

<NoLoop />

## Dialogue

This example places the carousel inside a dialog to show how it behaves in the constrained space of an overlay.

import Dialog from '@site/static/usage/v1/carousel/dialog/index.md';

<Dialog />

## Thumbnail image

This example adds thumbnail previews that act as secondary navigation between slides.

import Thumbnail from '@site/static/usage/v1/carousel/thumbnail/index.md';

<Thumbnail />

## Offset

This example works with spacing between slides and around the viewport so you can compare a tighter and a more airy layout rhythm.

import Spacing from '@site/static/usage/v1/carousel/spacing/index.md';

<Spacing />

## Distribution

This example splits the available space so that multiple slides stay visible at the same time, which is useful for galleries or dense overviews.

import Split from '@site/static/usage/v1/carousel/split/index.md';

<Split />


## When to use

Use `wje-carousel` to improve readability, scannability, and contextual understanding of content.

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
