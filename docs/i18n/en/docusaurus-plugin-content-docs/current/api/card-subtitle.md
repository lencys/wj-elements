---
title: 'Card Subtitle'
---

import Props from '@ionic-internal/component-api/v1/card-subtitle/props.md';
import Events from '@ionic-internal/component-api/v1/card-subtitle/events.md';
import Methods from '@ionic-internal/component-api/v1/card-subtitle/methods.md';
import Parts from '@ionic-internal/component-api/v1/card-subtitle/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/card-subtitle/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/card-subtitle/slots.md';

<head>
  <title>Card Subtitle | Supplementary or secondary text Card</title>
  <meta
    name="description"
    content="API documentation for wje-card-subtitle, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Card subtitle element is a component designed to be used within the [Card Header](./card-header) element to display additional or secondary text, providing the user with additional context or information related to the main content of the card.

:::note Note
For more information on using Card Subtitle, navigate to the [**Card**](./card) element documentation.
:::


## When to use

Use `wje-card-subtitle` to improve readability, scannability, and contextual understanding of content.

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
