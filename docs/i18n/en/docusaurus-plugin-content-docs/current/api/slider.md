---
title: 'Slider'
---

import Props from '@ionic-internal/component-api/v1/slider/props.md';
import Events from '@ionic-internal/component-api/v1/slider/events.md';
import Methods from '@ionic-internal/component-api/v1/slider/methods.md';
import Parts from '@ionic-internal/component-api/v1/slider/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/slider/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/slider/slots.md';

<head>
  <title>Slider | Element extends the capabilities of the standard HTML select element.</title>
  <meta
    name="description"
    content="API documentation for wje-slider, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Slider is an interactive slider component that allows users to select a value from a range of values in a convenient way. It features a handle that can be moved, making it ideal for those scenarios that require the user to provide numeric input or adjust some setting such as volume.

## Basic usage

By default, the selection allows the user to select only one option. Including the `Icon` element will also display the selected icon next to the option.

import Basic from '@site/static/usage/v1/slider/basic/index.md';

<Basic />

## Bubble

Adding the bubble attribute will display a bubble above the slider with a number representing the current value of the slider.

import Bubble from '@site/static/usage/v1/slider/bubble/index.md';

<Bubble />

## Label

This example adds a label to the slider so the user can better understand the meaning of the current value or range.

import Label from '@site/static/usage/v1/slider/label/index.md';

<Label />

## Icons

This example adds icons to the slider so the start and end of the range are easier to interpret visually.

import Icons from '@site/static/usage/v1/slider/icons/index.md';

<Icons />

## Color

This example compares slider color variants and how they affect readability and visual emphasis.

import Colors from '@site/static/usage/v1/slider/colors/index.md';

<Colors />


## When to use

Use `wje-slider` when users need to enter values, choose options, or trigger form-related actions.

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
