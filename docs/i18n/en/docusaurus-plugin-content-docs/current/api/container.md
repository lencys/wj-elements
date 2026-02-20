---
title: 'Container'
---

import Props from '@ionic-internal/component-api/v1/container/props.md';
import Events from '@ionic-internal/component-api/v1/container/events.md';
import Methods from '@ionic-internal/component-api/v1/container/methods.md';
import Parts from '@ionic-internal/component-api/v1/container/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/container/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/container/slots.md';

<head>
  <title>Container | Key element for creating layouts</title>
  <meta
    name="description"
    content="API documentation for wje-container, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Container is a key Layout element that is used to wrap the content of a page. It is designed to provide consistent spacing, offsets and alignment of the elements within it to ensure proper display and also to adapt to different devices and screen sizes.

:::note
For information on using the **Container** element, navigate to the [**Layout**](./layout) documentation.
:::


## When to use

Use `wje-container` to compose stable page structure with clear visual and semantic hierarchy.

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
