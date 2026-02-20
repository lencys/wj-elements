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
    content="API documentation for wje-layout, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

**WebJET Elements** umožňuje si jednoducho zostaviť rozvrhnutie stránok pomocou 5 základných elementov: [Container](./container), [Header](./header), [Main](./main), [Aside](./aside) a [Footer](./footer). V prípade komplexnejších rozvrhnutí WebJET Elements ponúka tiež systém [Grid](./grid).

## Examples of use

import Basic from '@site/static/usage/v1/layout/basic/index.md';

<div className="xxxlarge">

<Basic />

</div>


## When to use

Use `wje-layout` to compose stable page structure with clear visual and semantic hierarchy.

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
