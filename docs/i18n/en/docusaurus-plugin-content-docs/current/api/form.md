---
title: 'Form'
---

import Props from '@ionic-internal/component-api/v1/form/props.md';
import Events from '@ionic-internal/component-api/v1/form/events.md';
import Methods from '@ionic-internal/component-api/v1/form/methods.md';
import Parts from '@ionic-internal/component-api/v1/form/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/form/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/form/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `wje-form` page was auto-generated to keep API documentation coverage in sync with the current component set.
Detailed usage and best-practice guidance will be expanded in the next content phase.


## When to use

Use `wje-form` when users need to enter values, choose options, or trigger form-related actions.

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
