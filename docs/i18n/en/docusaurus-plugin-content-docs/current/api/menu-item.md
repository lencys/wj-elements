---
title: 'MenuItem'
---

import Props from '@ionic-internal/component-api/v1/menu-item/props.md';
import Events from '@ionic-internal/component-api/v1/menu-item/events.md';
import Methods from '@ionic-internal/component-api/v1/menu-item/methods.md';
import Parts from '@ionic-internal/component-api/v1/menu-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/menu-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/menu-item/slots.md';

<head>
  <title>MenuItem | Element to display items in the Menu item</title>
  <meta
    name="description"
    content="API documentation for wje-menu-item, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

MenuItem is a child of the [Menu.](./menu) element and represents a navigation item within it. It can display a submenu with additional navigation items and also allows icons to be displayed.
For examples of using MenuItem, go to the [**Menu**](./menu) element documentation page.


## When to use

Use `wje-menu-item` when users need to understand location, move between views, or traverse hierarchy.

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
