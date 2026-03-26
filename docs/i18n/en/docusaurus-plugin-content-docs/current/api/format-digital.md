---
title: 'FormatDigital'
---

import Props from '@ionic-internal/component-api/v1/format-digital/props.md';
import Events from '@ionic-internal/component-api/v1/format-digital/events.md';
import Methods from '@ionic-internal/component-api/v1/format-digital/methods.md';
import Parts from '@ionic-internal/component-api/v1/format-digital/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/format-digital/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/format-digital/slots.md';

<head>
  <title>Format Digital | Formatting numeric values</title>
  <meta
    name="description"
    content="The FormatDigital component is designed to format numeric values into a human-readable digital format with respect to various unit prefixes such as kilo, mega, giga, etc."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The FormatDigital component is designed to format numeric values into a human-readable digital format with respect to various unit prefixes such as kilo, mega, giga, etc. It offers options to customize units, display style of units and supports localization.

## Basic usage

This example shows the basic formatting of a numeric value without additional display options, making the default behavior easy to understand.

import Basic from '@site/static/usage/v1/format-digital/basic/index.md';

<Basic />

## Display options

This example compares several display modes for the same value so the formatting differences are immediately visible.

import FormattingDisplay from '@site/static/usage/v1/format-digital/formatting-display/index.md';

<FormattingDisplay />

## Byte formatting

This example focuses on converting values to byte units, which is useful for file sizes or storage metrics.

import FormattingBytes from '@site/static/usage/v1/format-digital/formatting-bytes/index.md';

<FormattingBytes />

## Formatting bits

This example focuses on converting values to bit units, for example for network speeds or transfer limits.

import FormattingBits from '@site/static/usage/v1/format-digital/formatting-bits/index.md';

<FormattingBits />

## Use with slots

This example shows how to place custom content before or after the formatted value with slots, without changing the formatting logic itself.

import DisplaySlots from '@site/static/usage/v1/format-digital/slots/index.md';

<DisplaySlots />


## When to use

Use `wje-format-digital` when you need a consistent WebJET-based implementation for this UI concern.

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
