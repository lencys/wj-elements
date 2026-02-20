---
title: 'Level Indicator'
---

import Props from '@ionic-internal/component-api/v1/level-indicator/props.md';
import Events from '@ionic-internal/component-api/v1/level-indicator/events.md';
import Methods from '@ionic-internal/component-api/v1/level-indicator/methods.md';
import Parts from '@ionic-internal/component-api/v1/level-indicator/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/level-indicator/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/level-indicator/slots.md';

<head>
  <title>Level Indicator | Element showing the level or progress of the process.</title>
  <meta
    name="description"
    content="API documentation for wje-level-indicator, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `Level Indicator` component is an element that allows you to view the level or progress of a process. It can be used to display battery level, user progress or other similar tasks.

## Basic use

import Basic from '@site/static/usage/v1/level-indicator/basic/index.md';

<Basic />

## Colorize

By adding the `colorize` attribute, the indicator bars are colored according to the level (low, medium, high).

import Color from '@site/static/usage/v1/level-indicator/color/index.md';

<Color />

## Sulphur indicator bars

By setting the CSS variable `--wje-level-indicator-width` to any value, the width of the indicator bars can be set.

import Bars from '@site/static/usage/v1/level-indicator/bars/index.md';

<Bars />

## Reverse

Adding the `reverse` attribute will display the indicator bars in reverse order.

import Reverse from '@site/static/usage/v1/level-indicator/reverse/index.md';

<Reverse />


## When to use

Use `wje-level-indicator` to communicate status, result of actions, or required next steps immediately.

## When not to use

Do not show multiple feedback channels for the same event unless there is a strong reason.

## Accessibility

Announce status updates with suitable ARIA live regions and manage focus for modal interactions.

## Best Practices

- Match message severity (info/success/warning/error) to actual user impact.
- Use confirmations only for destructive or hard-to-reverse actions.
- Keep timeouts consistent so users have enough time to read messages.

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
