---
title: QR Code
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
    content="API documentation for wje-qr-generator, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

A code consisting of an array of black and white squares that is typically used to store URLs or other information for the camera on a smartphone to read. These qr codes can be easily customised using different attributes.

## Interactive demo

To use the QR component, include it in the HTML with the required attributes.

import Basic from '@site/static/usage/v1/qr-code/basic/index.md';

<Basic />


## When to use

Use `wje-qr-code` when you need a consistent WebJET-based implementation for this UI concern.

## When not to use

Do not stretch the component beyond its responsibility; compose smaller primitives for edge cases.

## Accessibility

Validate keyboard behavior, focus states, contrast, and meaningful labels for interactive elements.

## Best Practices

- Prefer component APIs over direct DOM manipulation.
- Stick to design tokens and naming conventions.
- Test components with realistic data before production rollout.

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
