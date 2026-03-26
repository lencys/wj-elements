---
title: 'Icon'
---

import Props from '@ionic-internal/component-api/v1/icon/props.md';
import Events from '@ionic-internal/component-api/v1/icon/events.md';
import Methods from '@ionic-internal/component-api/v1/icon/methods.md';
import Parts from '@ionic-internal/component-api/v1/icon/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/icon/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/icon/slots.md';

<head>
  <title>Icon | WebJET Element for displaying icons</title>
  <meta
    name="description"
    content="API documentation for wje-icon, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

This component provides a simple way to display icons from a set of SVG images, while allowing various customization options. WebJET Elements uses the Tabler icon set. For a list of all available icons, see [tabler-icons.io](https://tabler-icons.io/).

## Basic usage

This example shows icon usage in its simplest form, as a standalone visual element with a default icon name.

import Basic from '@site/static/usage/v1/icon/basic/index.md';

<Basic />

## Style Outline / Filled

This example demonstrates how the `lines` option changes visual separation inside the `wje-icon` component.

import Styles from '@site/static/usage/v1/icon/style/index.md';

<Styles />

## Custom

This example focuses on using a custom icon outside the default set, which is useful for brand or project-specific iconography.

import Custom from '@site/static/usage/v1/icon/custom/index.md';

<Custom />


## When to use

Use `wje-icon` to improve readability, scannability, and contextual understanding of content.

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
