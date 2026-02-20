---
title: 'Masonry'
---

import Props from '@ionic-internal/component-api/v1/masonry/props.md';
import Events from '@ionic-internal/component-api/v1/masonry/events.md';
import Methods from '@ionic-internal/component-api/v1/masonry/methods.md';
import Parts from '@ionic-internal/component-api/v1/masonry/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/masonry/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/masonry/slots.md';

<head>
  <title>Masonry | Creates a responsive 'Masonry' layout of child elements</title>
  <meta
    name="description"
    content="The Masonry component creates a responsive &quot;Masonry&quot; layout of child elements that are dynamically arranged into columns based on specified attributes."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Masonry component creates a responsive "Masonry" layout of child elements that are dynamically arranged into columns based on specified attributes. Supports customizing the number of columns, maximum column width, element spacing, and debouncing to optimize performance.

## Basic usage

import Basic from '@site/static/usage/v1/masonry/basic/index.md';

<Basic />

## Maximum width of columns

Use the `max-col-width` attribute to limit the width of the columns to the specified value.

import MaxColWidth from '@site/static/usage/v1/masonry/max-col-width/index.md';

<MaxColWidth />

## The Gap

Use the `gap` attribute to specify the width of the gap between columns in pixels.

import Gap from '@site/static/usage/v1/masonry/gap/index.md';

<Gap />


## When to use

Use `wje-masonry` to compose stable page structure with clear visual and semantic hierarchy.

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
