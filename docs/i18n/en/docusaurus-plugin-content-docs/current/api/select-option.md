---
title: 'Option'
---

import Props from '@ionic-internal/component-api/v1/option/props.md';
import Events from '@ionic-internal/component-api/v1/option/events.md';
import Methods from '@ionic-internal/component-api/v1/option/methods.md';
import Parts from '@ionic-internal/component-api/v1/option/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/option/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/option/slots.md';

<head>
  <title>Option | individual options within the Select component</title>
  <meta
    name="description"
    content="API documentation for wje-select-option, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Option element represents the individual options within the [Select](./select) component. It is similar to the standard HTML select element and allows users to make one or more selections based on the configuration of the `select` component. These elements can be dynamically populated and are designed to work seamlessly with the wje-select component's own logic, including features such as multiple selection and custom styling.

For information on using Option, navigate to the [Select.](./select) element documentation.


## When to use

Use `wje-select-option` when you need a consistent WebJET-based implementation for this UI concern.

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
