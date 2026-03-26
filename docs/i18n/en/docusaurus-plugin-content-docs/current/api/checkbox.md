---
title: 'Checkbox'
---

import Props from '@ionic-internal/component-api/v1/checkbox/props.md';
import Events from '@ionic-internal/component-api/v1/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v1/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v1/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/checkbox/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/checkbox/slots.md';

<head>
  <title>Checkbox | WebJET Element for selecting multiple options</title>
  <meta
    name="description"
    content="API documentation for wje-checkbox, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

A checkbox, or also a check box, is an element that allows users to select one or more options from a set. Click on the checkbox to change its status to `true` or `false`.

## Basic usage

This example shows the checkbox in its default state with a standard label. It is the best starting point for simple form choices.

import Basic from '@site/static/usage/v1/checkbox/basic/index.md';

<Basic />

## Placement End

This example moves the related content to the opposite side of the checkbox, which is useful in tighter or denser form layouts.

import End from '@site/static/usage/v1/checkbox/end/index.md';

<End />

## Color

This example compares checkbox color variants so you can see how semantic states affect the overall visual tone.

import Color from '@site/static/usage/v1/checkbox/color/index.md';

<Color />

## Indeterminate checkbox

When the `indeterminate` attribute is added, a checkbox is displayed whose default state is neutral, i.e. neither `true` nor `false`.

import Indeterminate from '@site/static/usage/v1/checkbox/indeterminate/index.md';

<Indeterminate />

## Variant

Adding the `variant` attribute with the value `circle` will display a checkbox in a round shape.

import Variant from '@site/static/usage/v1/checkbox/variant/index.md';

<Variant />

## CSS custom properties

When you need to adjust the checkbox outline or spacing without changing markup, use the component CSS variables.

import CssProperties from '@site/static/usage/v1/checkbox/theming/css-properties/index.md';

<CssProperties />


## When to use

Use `wje-checkbox` when users need to enter values, choose options, or trigger form-related actions.

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
