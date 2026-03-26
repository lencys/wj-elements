---
title: 'Header'
---

import Props from '@ionic-internal/component-api/v1/header/props.md';
import Events from '@ionic-internal/component-api/v1/header/events.md';
import Methods from '@ionic-internal/component-api/v1/header/methods.md';
import Parts from '@ionic-internal/component-api/v1/header/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/header/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/header/slots.md';

<head>
  <title>Header | Element for creating layouts</title>
  <meta
    name="description"
    content="The header is part of the layout elements and is displayed at the top. It is mostly used to display navigation, logos, etc."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The header is part of the layout elements and is displayed at the top. It is mostly used to display navigation, logos, etc.

## Basic usage

The example below shows the header in the simplest vertical layout with main content rendered below it.

import Basic from '@site/static/usage/v1/header/basic/index.md';

<Basic />

:::note
For information on using the **Header** element, navigate to the [**Layout**](./layout) documentation.
:::


## When to use

Use `wje-header` to compose stable page structure with clear visual and semantic hierarchy.

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
