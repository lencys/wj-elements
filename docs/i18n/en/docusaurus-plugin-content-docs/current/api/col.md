---
title: 'Col'
---

import Props from '@ionic-internal/component-api/v1/col/props.md';
import Events from '@ionic-internal/component-api/v1/col/events.md';
import Methods from '@ionic-internal/component-api/v1/col/methods.md';
import Parts from '@ionic-internal/component-api/v1/col/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/col/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/col/slots.md';

<head>
  <title>Col | Horizontal placement of content based on screen size.</title>
  <meta
    name="description"
    content="The **Col** (column) component is the basic building block of Grid and allows you to horizontally arrange content and adjust its layout based on the screen size."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The **Col** (column) component is the basic building block of [Grid](./grid) and allows you to horizontally arrange content and adjust its layout based on the screen size. It is used by adding it inside the [Row](./row) element.

:::note Note

For more information on using **Col**, navigate to the system documentation [**Grid**](./grid).

:::


## When to use

Use `wje-col` to compose stable page structure with clear visual and semantic hierarchy.

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
