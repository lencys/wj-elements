---
title: 'Step'
---

import Props from '@ionic-internal/component-api/v1/step/props.md';
import Events from '@ionic-internal/component-api/v1/step/events.md';
import Methods from '@ionic-internal/component-api/v1/step/methods.md';
import Parts from '@ionic-internal/component-api/v1/step/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/step/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/step/slots.md';

<head>
  <title>Step | One step within the Stepper component</title>
  <meta
    name="description"
    content="API documentation for wje-step, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `Step` component displays a single step within the [Stepper] component(stepper.md). It is a child component that is used to define the individual steps within a sequence.

:::note
For examples of using the `Step` component, go to the [**Stepper**] documentation(stepper.md).
:::


## When to use

Use `wje-step` when users need to enter values, choose options, or trigger form-related actions.

## When not to use

Do not use it as a decorative element without interaction. Prefer presentational components in that case.

## Accessibility

Always provide a label (`label`/`aria-label`), keep keyboard support, and surface clear validation feedback.

## Best Practices

- Keep validation rules and error behavior consistent across the entire form.
- Show loading or disabled states during async operations.
- Split complex forms into smaller sections with immediate feedback.

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
