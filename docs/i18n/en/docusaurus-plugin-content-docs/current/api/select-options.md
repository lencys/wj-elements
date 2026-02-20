---
title: 'Options'
---

import Props from '@ionic-internal/component-api/v1/options/props.md';
import Events from '@ionic-internal/component-api/v1/options/events.md';
import Methods from '@ionic-internal/component-api/v1/options/methods.md';
import Parts from '@ionic-internal/component-api/v1/options/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/options/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/options/slots.md';

<head>
  <title>Options | individual options within the Select component</title>
  <meta
    name="description"
    content="API documentation for wje-select-options, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Options element is intended for use inside the [Select](./select) element and is used to display a dynamically generated list of options that is asynchronously retrieved from the specified URL.

:::note
For more information on using Options, navigate to the [**Select**](./select) element documentation
:::


## When to use

Use `wje-select-options` when you need a consistent WebJET-based implementation for this UI concern.

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
