---
title: 'Footer'
---

import Props from '@ionic-internal/component-api/v1/footer/props.md';
import Events from '@ionic-internal/component-api/v1/footer/events.md';
import Methods from '@ionic-internal/component-api/v1/footer/methods.md';
import Parts from '@ionic-internal/component-api/v1/footer/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/footer/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/footer/slots.md';

<head>
  <title>Footer | Element for creating layouts</title>
  <meta
    name="description"
    content="The footer is part of the layout elements and appears at the bottom of the screen. It is mostly used to display additional information."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The footer is part of the layout elements and appears at the bottom of the screen. It is mostly used to display additional information.

## Basic usage

Even though `wje-footer` is usually used as part of a larger layout, the standalone example below helps show its role inside a vertical page structure.

import Basic from '@site/static/usage/v1/footer/basic/index.md';

<Basic />

:::note
For information on using the **Footer** element, navigate to the [**Layout**](./layout) documentation.
:::


## When to use

Use `wje-footer` to compose stable page structure with clear visual and semantic hierarchy.

## When not to use

Do not use layout components to handle business logic or application orchestration.

## Accessibility

Preserve document semantics (`header`, `main`, `aside`, `footer`) and logical tab/focus order.

## Best Practices

- Define mobile/desktop breakpoints first, then refine visual details.
- Prefer spacing tokens over ad-hoc margin/padding overrides.
- Test keyboard and screen reader behavior for overflow scenarios.

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
