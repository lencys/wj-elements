---
title: 'Icon Picker'
---

import Props from '@ionic-internal/component-api/v1/icon-picker/props.md';
import Events from '@ionic-internal/component-api/v1/icon-picker/events.md';
import Methods from '@ionic-internal/component-api/v1/icon-picker/methods.md';
import Parts from '@ionic-internal/component-api/v1/icon-picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/icon-picker/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/icon-picker/slots.md';

<head>
  <title>Icon | WebJET Element to select from a set of icons</title>
  <meta
    name="description"
    content="Icon picker allows the user to find and select an icon from a set of available icons. It includes text search for easier icon retrieval."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Icon picker allows the user to find and select an icon from a set of available icons. It includes text search for easier icon retrieval.

## Basic usage

This example presents the basic icon selection flow without composing it with additional components.

import Basic from '@site/static/usage/v1/icon-picker/basic/index.md';

<Basic />


## When to use

Use `wje-icon-picker` to improve readability, scannability, and contextual understanding of content.

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
