---
title: 'Label'
---

import Props from '@ionic-internal/component-api/v1/label/props.md';
import Events from '@ionic-internal/component-api/v1/label/events.md';
import Methods from '@ionic-internal/component-api/v1/label/methods.md';
import Parts from '@ionic-internal/component-api/v1/label/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/label/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/label/slots.md';

<head>
  <title>Label | Element for adding descriptive text content to components</title>
  <meta
    name="description"
    content="API documentation for wje-label, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

**Label** is an element used to add text content to components. Label can be used for example inside elements [Item](./item), [Card](./card) or also in element [Badge](./badge) and others.

The position of the label inside the element can be inline, fixed, stacked or floating.


## When to use

Use `wje-label` when you need a consistent WebJET-based implementation for this UI concern.

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
