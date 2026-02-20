---
title: 'Card Title'
---

import Props from '@ionic-internal/component-api/v1/card-title/props.md';
import Events from '@ionic-internal/component-api/v1/card-title/events.md';
import Methods from '@ionic-internal/component-api/v1/card-title/methods.md';
import Parts from '@ionic-internal/component-api/v1/card-title/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/card-title/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/card-title/slots.md';

<head>
  <title>Card Title | Showing card title</title>
  <meta
    name="description"
    content="API documentation for wje-card-title, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Card Title element is a component designed for use within the [Card Header](./card-header) element and displays the title of the card, allowing the user to quickly identify its subject or contents.

:::note Note
For more information on using Card Title, navigate to the [**Card**](./card) element documentation.
:::


## When to use

Use `wje-card-title` to improve readability, scannability, and contextual understanding of content.

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
