---
title: 'Image Comparer'
---

import Props from '@ionic-internal/component-api/v1/image-comparer/props.md';
import Events from '@ionic-internal/component-api/v1/image-comparer/events.md';
import Methods from '@ionic-internal/component-api/v1/image-comparer/methods.md';
import Parts from '@ionic-internal/component-api/v1/image-comparer/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/image-comparer/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/image-comparer/slots.md';

<head>
  <title>Image Comparer | Image Comparer</title>
  <meta
    name="description"
    content="The Image Comparer element is used to compare two images. It displays the images on top of each other and allows you to reveal the bottom image using the built-in slider."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Image Comparer element is used to compare two images. It displays the images on top of each other and allows you to reveal the bottom image using the built-in slider.

## Basic Usage

import Basic from '@site/static/usage/v1/img-comparer/basic/index.md';

<div class="large">

<Basic />

</div>


## When to use

Use `wje-img-comparer` to improve readability, scannability, and contextual understanding of content.

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
