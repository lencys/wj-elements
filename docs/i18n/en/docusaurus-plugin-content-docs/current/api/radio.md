---
title: 'Radio'
---

import Props from '@ionic-internal/component-api/v1/radio/props.md';
import Events from '@ionic-internal/component-api/v1/radio/events.md';
import Methods from '@ionic-internal/component-api/v1/radio/methods.md';
import Parts from '@ionic-internal/component-api/v1/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/radio/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/radio/slots.md';

<head>
  <title>Radio component | Improved version of standard HTML radio element</title>
  <meta
    name="description"
    content="API documentation for wje-radio, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The radio element is a modified version of the standard HTML radio element, enhanced with styles to achieve a more visually consistent user interface across devices. It works similarly to a standard radio button and allows users to select one from a set of options. It is used inside the [radio group](./radio-group) element to add alignment and group them together.

## Basic usage

This example shows the radio in its default state without extra variants or grouping behavior.

import Basic from '@site/static/usage/v1/radio/basic/index.md';

<Basic />

## Inline

Adding the `inline` property arranges the elements in a horizontal layout.

import Inline from '@site/static/usage/v1/radio/inline/index.md';

<Inline />

## Styling

### color

Using the `color` property it is possible to change the color of the radio element.

import Color from '@site/static/usage/v1/radio/color/index.md';

<Color />


## When to use

Use `wje-radio` when users need to enter values, choose options, or trigger form-related actions.

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
