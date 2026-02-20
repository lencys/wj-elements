---
title: 'Row'
---

import Props from '@ionic-internal/component-api/v1/row/props.md';
import Events from '@ionic-internal/component-api/v1/row/events.md';
import Methods from '@ionic-internal/component-api/v1/row/methods.md';
import Parts from '@ionic-internal/component-api/v1/row/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/row/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/row/slots.md';

<head>
  <title>Row | Horizontal container for Grid system</title>
  <meta
    name="description"
    content="API documentation for wje-row, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Row is the basic element of a responsive [Grid](./grid) system and serves as a horizontal container for arranging and aligning columns ([columns](./col)).

:::note Note

For more information on using **Row**, navigate to the [**Grid**](./grid) system documentation.

:::


## When to use

Use `wje-row` to compose stable page structure with clear visual and semantic hierarchy.

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
