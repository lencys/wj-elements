---
title: 'Card Controls'
---

import Props from '@ionic-internal/component-api/v1/card-controls/props.md';
import Events from '@ionic-internal/component-api/v1/card-controls/events.md';
import Methods from '@ionic-internal/component-api/v1/card-controls/methods.md';
import Parts from '@ionic-internal/component-api/v1/card-controls/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/card-controls/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/card-controls/slots.md';

<head>
  <title>Card Controls</title>
  <meta
    name="description"
    content="This element is for use in Card Header. to display buttons to perform various card-related actions."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

This element is for use in [Card Header.](./card-header) to display buttons to perform various card-related actions.

:::note Note
For more information on using Card Controls, navigate to the [**Card Header**](./card-header) element documentation.
:::


## When to use

Use `wje-card-controls` to improve readability, scannability, and contextual understanding of content.

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
