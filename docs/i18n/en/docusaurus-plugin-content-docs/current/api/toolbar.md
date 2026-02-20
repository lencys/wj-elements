---
title: 'Toolbar'
---

import Props from '@ionic-internal/component-api/v1/toolbar/props.md';
import Events from '@ionic-internal/component-api/v1/toolbar/events.md';
import Methods from '@ionic-internal/component-api/v1/toolbar/methods.md';
import Parts from '@ionic-internal/component-api/v1/toolbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/toolbar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/toolbar/slots.md';

<head>
  <title>Toolbar | Flexible container designed to display different content in an organized way</title>
  <meta
    name="description"
    content="API documentation for wje-toolbar, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Element Toolbar is a flexible container designed to display a variety of content in an organized manner, typically used at the top of web applications or pages. It may contain buttons, navigation, search box, and more. It supports content alignment and can also be glued to the top of the screen.

Part of the Toolbar is the [ToolbarActions](./toolbar-actions) element, which groups different actions in the form of buttons into a single unit.

## Basic usage

import Basic from '@site/static/usage/v1/toolbar/basic/index.md';

<Basic />

## Dynamic breadcrumbs

import DynamicBreadcrumbs from '@site/static/usage/v1/toolbar/dynamic-breadcrumbs/index.md';

<DynamicBreadcrumbs />

## Dynamic action

import DynamicAction from '@site/static/usage/v1/toolbar/dynamic-action/index.md';

<DynamicAction />


## When to use

Use `wje-toolbar` to compose stable page structure with clear visual and semantic hierarchy.

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
