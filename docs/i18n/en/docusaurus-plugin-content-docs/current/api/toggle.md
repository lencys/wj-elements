---
title: 'Toggle'
---

import Props from '@ionic-internal/component-api/v1/toggle/props.md';
import Events from '@ionic-internal/component-api/v1/toggle/events.md';
import Methods from '@ionic-internal/component-api/v1/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v1/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/toggle/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/toggle/slots.md';

<head>
  <title>Toggle | Element allowing to switch between two states</title>
  <meta
    name="description"
    content="Toggle elements are small interactive controls that allow you to switch between two states. You can activate them with a click of the mouse."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toggle elements are small interactive controls that allow you to switch between two states. You can activate them with a click of the mouse. They are most often used to activate and deactivate functionalities or to switch between showing and hiding other elements.

## Basic Usage

This example shows the toggle in its simplest form, as a switch with default appearance and behavior.

import Basic from '@site/static/usage/v1/toggle/basic/index.md';

<Basic />

## Colors

This example compares color variants of the toggle so the effect on meaning and state readability is easy to see.

import Colors from '@site/static/usage/v1/toggle/colors/index.md';

<div className="large">
  <Colors />
</div>

## Custom CSS properties

CSS variables let you change dimensions, radii, and track or handle colors without introducing a wrapper component just for styling.

import Custom from '@site/static/usage/v1/toggle/custom/index.md';

<Custom />


## When to use

Use `wje-toggle` when users need to enter values, choose options, or trigger form-related actions.

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
