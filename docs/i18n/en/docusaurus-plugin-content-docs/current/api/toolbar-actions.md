---
title: 'ToolbarActions'
---

import Props from '@ionic-internal/component-api/v1/toolbar-actions/props.md';
import Events from '@ionic-internal/component-api/v1/toolbar-actions/events.md';
import Methods from '@ionic-internal/component-api/v1/toolbar-actions/methods.md';
import Parts from '@ionic-internal/component-api/v1/toolbar-actions/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/toolbar-actions/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/toolbar-actions/slots.md';

<head>
  <title>ToolbarActions | Wrapper for buttons inserted into the Toolbar element</title>
  <meta
    name="description"
    content="API documentation for wje-toolbar-actions, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The ToolbarActions element serves as a wrapper for the buttons inserted into the Toolbar element and thus groups the different toolbar actions into a single unit.

:::note
For more information on using ToolbarActions, go to the [**Toolbar**](./toolbar) element documentation.
:::


## When to use

Use `wje-toolbar-actions` to compose stable page structure with clear visual and semantic hierarchy.

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
