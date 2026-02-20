---
title: 'Router Link'
---

import Props from '@ionic-internal/component-api/v1/router-link/props.md';
import Events from '@ionic-internal/component-api/v1/router-link/events.md';
import Methods from '@ionic-internal/component-api/v1/router-link/methods.md';
import Parts from '@ionic-internal/component-api/v1/router-link/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/router-link/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/router-link/slots.md';

<head>
  <title>Router Link | Router Navigation Component</title>
  <meta
    name="description"
    content="The router link component serves as a customizable link designed for use in navigation across the application."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The router link component serves as a customizable link designed for use in navigation across the application.

:::note
For more information on using Router Link, go to the [**Router**](./router) page in the documentation.
:::


## When to use

Use `wje-router-link` when users need to understand location, move between views, or traverse hierarchy.

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
