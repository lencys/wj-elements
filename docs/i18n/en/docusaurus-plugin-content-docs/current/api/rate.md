---
title: 'Rate'
---

import Props from '@ionic-internal/component-api/v1/rate/props.md';
import Events from '@ionic-internal/component-api/v1/rate/events.md';
import Methods from '@ionic-internal/component-api/v1/rate/methods.md';
import Parts from '@ionic-internal/component-api/v1/rate/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/rate/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/rate/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-rate` is used for both entering and displaying ratings. The component supports whole and fractional steps, readonly mode, disabled state, and custom icons.

## Basic usage

The simplest scenario is an interactive rating with the default star icon and a maximum defined by `max`.

import Basic from '@site/static/usage/v1/rate/basic/index.md';

<Basic />

## Initial value

The `value` attribute sets the initial or current rating. It is useful for editing an existing review and for read-only presentation.

import Value from '@site/static/usage/v1/rate/value/index.md';

<Value />

## Rating precision

If you need halves or smaller steps, use the `precision` attribute. Hover and click behavior is then rounded according to that precision.

import Precision from '@site/static/usage/v1/rate/precision/index.md';

<Precision />

## Read-only mode

With `readonly`, the value stays visible but users can no longer change it. This is useful for showing previously stored ratings.

import ReadOnly from '@site/static/usage/v1/rate/read-only/index.md';

<ReadOnly />

## Disabled state

The disabled state blocks both interaction and hover feedback. Use it when rating is temporarily unavailable or gated by another condition.

import Disabled from '@site/static/usage/v1/rate/disabled/index.md';

<Disabled />


## When to use

Use `wje-rate` when users evaluate quality, satisfaction, or preference on a small scale.

## When not to use

Do not use it when users need precise numeric input or when the meaning of the scale is ambiguous.

## Accessibility

For important decisions, pair the rating with clear text so users understand both the scale and the current value. Readonly and disabled states should be understandable even without hover feedback.

## Best Practices

- Keep the scale meaning consistent, such as 1 to 5, across the whole product.
- If you use custom icons through `icons`, preserve the same visual logic for filled and unfilled states.
- When showing a stored rating, prefer readonly over disabled if the main goal is readability rather than blocking action.

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
