---
title: 'Color Picker'
---

import Props from '@ionic-internal/component-api/v1/color-picker/props.md';
import Events from '@ionic-internal/component-api/v1/color-picker/events.md';
import Methods from '@ionic-internal/component-api/v1/color-picker/methods.md';
import Parts from '@ionic-internal/component-api/v1/color-picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/color-picker/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/color-picker/slots.md';

<head>
  <title>Color Picker | WebJET Element for selecting a color from the color palette</title>
  <meta
    name="description"
    content="API documentation for wje-color-picker, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Color picker is an element that displays a color palette and allows users to select one of its colors. Displays the hex code of the selected color, which can be easily copied by the user.

## Basic usage

import Basic from '@site/static/usage/v1/color-picker/basic/index.md';

<div className="xxlarge">

<Basic />

</div>


## When to use

Use `wje-color-picker` when users need to enter values, choose options, or trigger form-related actions.

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
