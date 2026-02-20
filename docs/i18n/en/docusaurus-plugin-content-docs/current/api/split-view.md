---
title: 'SplitView'
---

import Props from '@ionic-internal/component-api/v1/split-view/props.md';
import Events from '@ionic-internal/component-api/v1/split-view/events.md';
import Methods from '@ionic-internal/component-api/v1/split-view/methods.md';
import Parts from '@ionic-internal/component-api/v1/split-view/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/split-view/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/split-view/slots.md';

<head>
  <title>SplitView | individual options within the Select component</title>
  <meta
    name="description"
    content="API documentation for wje-split-view, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Split view element is a versatile component that allows you to create a split view with two or more sections. Provides a divider slider that allows you to dynamically resize sections. Two orientations are supported - vertical and horizontal, and nesting another SplitView to create more complex views.

## Basic usage

import Basic from '@site/static/usage/v1/split-view/basic/index.md';

<Basic />

## Vertical SplitView

Two orientations are supported. Add the `vertical` attribute to display a vertical SplitView.

import Vertical from '@site/static/usage/v1/split-view/vertical/index.md';

<Vertical />

## Min/Max

Adding the `min` and `max` properties with values `"0"` to `"100"` will limit the range of motion of the separator.

import MinMax from '@site/static/usage/v1/split-view/min-max/index.md';

<MinMax />

## Disabled

Adding the `disabled` attribute disables the ability to scroll the separator.

import Disabled from '@site/static/usage/v1/split-view/disabled/index.md';

<Disabled />

## Nested SplitView

By nesting another SplitView, more complex views can be created.

import Split from '@site/static/usage/v1/split-view/split/index.md';

<Split />

## Styling

import Custom from '@site/static/usage/v1/split-view/custom/index.md';

<Custom />


## When to use

Use `wje-split-view` to compose stable page structure with clear visual and semantic hierarchy.

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
