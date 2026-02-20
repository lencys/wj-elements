---
title: 'Tab'
---

import Props from '@ionic-internal/component-api/v1/tab/props.md';
import Events from '@ionic-internal/component-api/v1/tab/events.md';
import Methods from '@ionic-internal/component-api/v1/tab/methods.md';
import Parts from '@ionic-internal/component-api/v1/tab/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/tab/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/tab/slots.md';

<head>
  <title>Tab | Tab navigation button</title>
  <meta
    name="description"
    content="API documentation for wje-tab, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `Tab` component is a child of the [TabGroup](tab-group.md) component and serves as a tab-based navigation button. It is used in combination with the [TabPanel](tab-panel.md) element.

:::note
For examples of using the `Tab` component, go to the documentation [**TabGroup**](tab-group.md).
:::


## When to use

Use `wje-tab` when users need to understand location, move between views, or traverse hierarchy.

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
