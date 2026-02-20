---
title: 'TabPanel'
---

import Props from '@ionic-internal/component-api/v1/tab-panel/props.md';
import Events from '@ionic-internal/component-api/v1/tab-panel/events.md';
import Methods from '@ionic-internal/component-api/v1/tab-panel/methods.md';
import Parts from '@ionic-internal/component-api/v1/tab-panel/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/tab-panel/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/tab-panel/slots.md';

<head>
  <title>TabPanel | Content container for Tab element</title>
  <meta
    name="description"
    content="API documentation for wje-tab-panel, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `TabPanel` component is a child of the [TabGroup](tab-group.md) component and serves as a container for the contents of the tab. It is used in combination with element [Tab](tab.md).

For examples of using the `Tab` component, go to the [TabGroup](tab-group.md) documentation.


## When to use

Use `wje-tab-panel` when users need to understand location, move between views, or traverse hierarchy.

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
