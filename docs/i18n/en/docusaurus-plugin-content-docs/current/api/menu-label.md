---
title: 'MenuLabel'
---

import Props from '@ionic-internal/component-api/v1/menu-label/props.md';
import Events from '@ionic-internal/component-api/v1/menu-label/events.md';
import Methods from '@ionic-internal/component-api/v1/menu-label/methods.md';
import Parts from '@ionic-internal/component-api/v1/menu-label/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/menu-label/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/menu-label/slots.md';

<head>
  <title>MenuLabel | Element for displaying descriptive text of navigation items.</title>
  <meta
    name="description"
    content="API documentation for wje-menu-label, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The MenuLabel is a child of the [Menu.](./menu) element and can also represent, for example, descriptive text for navigation items.
For examples of MenuLabel usage, go to the [**Menu**] element documentation page(./menu).


## When to use

Use `wje-menu-label` when users need to understand location, move between views, or traverse hierarchy.

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
