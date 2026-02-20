---
title: 'OrgChartItem'
---

import Props from '@ionic-internal/component-api/v1/orgchart-item/props.md';
import Events from '@ionic-internal/component-api/v1/orgchart-item/events.md';
import Methods from '@ionic-internal/component-api/v1/orgchart-item/methods.md';
import Parts from '@ionic-internal/component-api/v1/orgchart-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/orgchart-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/orgchart-item/slots.md';

<head>
  <title>OrgChartItem | OrgChartItem</title>
  <meta
    name="description"
    content="API documentation for wje-orgchart-item, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

The OrgChartItem component is used to display a single item in the organizational structure.
It can contain different types of nodes and links between them. This component is part of the [OrgChart](./orgchart) component, which is used to display the entire organizational structure.

For more information on using OrgChartItem, go to the [**OrgChart**] element documentation page(./orgchart).


## When to use

Use `wje-orgchart-item` when users need to understand location, move between views, or traverse hierarchy.

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
