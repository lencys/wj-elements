---
title: 'Main'
---

import Props from '@ionic-internal/component-api/v1/main/props.md';
import Events from '@ionic-internal/component-api/v1/main/events.md';
import Methods from '@ionic-internal/component-api/v1/main/methods.md';
import Parts from '@ionic-internal/component-api/v1/main/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/main/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/main/slots.md';

<head>
  <title>Main | Element for creating layouts</title>
  <meta
    name="description"
    content="API documentation for wje-main, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Main is a layout element and is displayed next to the [Aside](./aside) element. It is mostly used to display the main content.

## Examples of use

:::note
For information on using the **Main** element, navigate to the [**Layout**](./layout) documentation.
:::


## When to use

Use `wje-main` to compose stable page structure with clear visual and semantic hierarchy.

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
