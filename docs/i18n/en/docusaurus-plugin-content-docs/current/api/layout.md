---
title: 'Layout'
---

import Props from '@ionic-internal/component-api/v1/layout/props.md';
import Events from '@ionic-internal/component-api/v1/layout/events.md';
import Methods from '@ionic-internal/component-api/v1/layout/methods.md';
import Parts from '@ionic-internal/component-api/v1/layout/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/layout/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/layout/slots.md';

<head>
  <title>Layout | Element to easily build a page layout</title>
  <meta
    name="description"
    content="Guide to composing page layout in WebJET Elements using Container, Header, Main, Aside, Footer, and Grid primitives."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

**WebJET Elements** makes it easy to compose page structure using five layout primitives: [Container](./container), [Header](./header), [Main](./main), [Aside](./aside), and [Footer](./footer). For more complex screens, you can combine them with the [Grid](./grid) system.

## Examples of use

import Basic from '@site/static/usage/v1/layout/basic/index.md';

<div className="xxxlarge">

<Basic />

</div>


## When to use

Use the layout primitives when you need a stable page structure with a clear hierarchy of header, main content, sidebar, and footer.

## When not to use

Do not use layout components to handle business logic or application state orchestration. Their role is structure and composition.

## Accessibility

Preserve document semantics (`header`, `main`, `aside`, `footer`) and logical tab/focus order. A page should have only one primary `main` region.

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
