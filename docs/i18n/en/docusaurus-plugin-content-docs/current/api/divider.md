---
title: 'Divider'
---

import Props from '@ionic-internal/component-api/v1/divider/props.md';
import Events from '@ionic-internal/component-api/v1/divider/events.md';
import Methods from '@ionic-internal/component-api/v1/divider/methods.md';
import Parts from '@ionic-internal/component-api/v1/divider/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/divider/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/divider/slots.md';

<head>
  <title>Divider | WebJET Element to display the divider</title>
  <meta
    name="description"
    content="API documentation for wje-divider, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The divider element is used to display a separator between sections. It can also be used as a separator between menu items.

## Basic use

This example shows the divider in its simplest role: visually separating two blocks of content without any extra decoration.

import Basic from '@site/static/usage/v1/divider/basic/index.md';

<Basic />


## When to use

Use `wje-divider` when you need a consistent WebJET-based implementation for this UI concern.

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
