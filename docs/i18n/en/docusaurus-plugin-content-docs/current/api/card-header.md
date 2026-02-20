---
title: 'Card Header'
---

import Props from '@ionic-internal/component-api/v1/card-header/props.md';
import Events from '@ionic-internal/component-api/v1/card-header/events.md';
import Methods from '@ionic-internal/component-api/v1/card-header/methods.md';
import Parts from '@ionic-internal/component-api/v1/card-header/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/card-header/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/card-header/slots.md';

<head>
  <title>Card Header</title>
  <meta
    name="description"
    content="API documentation for wje-card-header, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Card header element is a component designed for use in tabs and serves as a container for placing relevant headings, icons, or other content that helps the user quickly understand the context or purpose of the main content of the tab.

:::note Note
For more information on using the Card Header, navigate to the [**Card**](./card) element documentation.
:::


## When to use

Use `wje-card-header` to improve readability, scannability, and contextual understanding of content.

## When not to use

Do not replace structured interactive data with media-only presentation when precision is needed.

## Accessibility

Provide alt text, maintain readable contrast, and include text equivalents for icon-only controls.

## Best Practices

- Compress media and use lazy loading in larger collections.
- Keep information priority consistent across cards/lists.
- Avoid duplicating the same meaning in icon and text without added value.

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
