---
title: 'Breadcrumb'
---

import Props from '@ionic-internal/component-api/v1/breadcrumb/props.md';
import Events from '@ionic-internal/component-api/v1/breadcrumb/events.md';
import Methods from '@ionic-internal/component-api/v1/breadcrumb/methods.md';
import Parts from '@ionic-internal/component-api/v1/breadcrumb/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/breadcrumb/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/breadcrumb/slots.md';

<head>
  <title>Breadcrumbs | Navigation Route Segment</title>
  <meta
    name="description"
    content="API documentation for wje-breadcrumb, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Breadcrumb displays one segment of the navigation path in the application and is a descendant of the Breadcrumbs element. It can also display an icon.

:::note Note

For more information on using Breadcrumbs, navigate to the [**Breadcrumbs**](./breadcrumbs) element documentation.

:::


## When to use

Use `wje-breadcrumb` when users need to understand location, move between views, or traverse hierarchy.

## When not to use

Do not combine multiple competing navigation patterns for the same user flow.

## Accessibility

Ensure visible active/selected states, predictable tab order, and clear control naming.

## Best Practices

- Keep URL state and UI navigation state synchronized.
- Use consistent labels across menu, breadcrumbs, and tabs.
- Add context for deep structures (breadcrumbs, headings, icon cues).

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
