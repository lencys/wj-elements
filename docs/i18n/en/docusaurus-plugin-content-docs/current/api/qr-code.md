---
title: 'QR Code'
---

import Props from '@ionic-internal/component-api/v1/qr-code/props.md';
import Events from '@ionic-internal/component-api/v1/qr-code/events.md';
import Methods from '@ionic-internal/component-api/v1/qr-code/methods.md';
import Parts from '@ionic-internal/component-api/v1/qr-code/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/qr-code/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/qr-code/slots.md';

<head>
  <title>QR Code | QR Code</title>
  <meta
    name="description"
    content="API documentation for wje-qr-code, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

A code consisting of an array of black and white squares that is typically used to store URLs or other information for the camera on a smartphone to read. These qr codes can be easily customised using different attributes.

## Basic use

To use the QR component, include it in HTML with the required attributes. In HTML, kebab-case attributes are recommended (`foreground-alpha`, `background-alpha`), but camelCase aliases are also supported (`foregroundAlpha`, `backgroundAlpha`).

import Basic from '@site/static/usage/v1/qr-code/basic/index.md';

<Basic />

## Supported attributes

- `value`: value encoded into the QR code.
- `size`: output QR size in px.
- `padding`: inner padding in px.
- `foreground`: foreground color.
- `foreground-alpha` (alias `foregroundAlpha`): foreground opacity in range `0-1`.
- `background`: background color.
- `background-alpha` (alias `backgroundAlpha`): background opacity in range `0-1`.
- `level`: error correction level (`L`, `M`, `Q`, `H`).

Slots:
- `top`: content rendered above the QR code.
- `bottom`: content rendered below the QR code.


## When to use

Use `wje-qr-code` to improve readability, scannability, and contextual understanding of content.

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
