---
title: 'RadioGroup'
---

import Props from '@ionic-internal/component-api/v1/radio-group/props.md';
import Events from '@ionic-internal/component-api/v1/radio-group/events.md';
import Methods from '@ionic-internal/component-api/v1/radio-group/methods.md';
import Parts from '@ionic-internal/component-api/v1/radio-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/radio-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/radio-group/slots.md';

<head>
  <title>RadioGroup | Container for radio buttons</title>
  <meta
    name="description"
    content="API documentation for wje-radio-group, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

RadioGroup serves as a container for a group of [radio](./radio) buttons.
Allows users to select one option from a set of options, ensuring that only one radio button within a group is selected at any given time. The component supports the `inline` attribute, which, when set, arranges the radio buttons in a horizontal layout. In addition, it programmatically manages the `value` attribute, which reflects the value of the currently selected radio button.


## When to use

Use `wje-radio-group` when users need to enter values, choose options, or trigger form-related actions.

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
