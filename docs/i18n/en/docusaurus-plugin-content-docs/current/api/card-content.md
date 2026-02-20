---
title: 'Card Content'
---

import Props from '@ionic-internal/component-api/v1/card-content/props.md';
import Events from '@ionic-internal/component-api/v1/card-content/events.md';
import Methods from '@ionic-internal/component-api/v1/card-content/methods.md';
import Parts from '@ionic-internal/component-api/v1/card-content/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/card-content/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/card-content/slots.md';

<head>
  <title>Card Header</title>
  <meta
    name="description"
    content="This element is for use in the tab to hold the primary contents of the tab."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

This element is for use in the tab to hold the primary contents of the tab.

:::note Note

For more information on using Card Content, navigate to the [**Card**](./card) element documentation.

:::


## When to use

Use `wje-card-content` to improve readability, scannability, and contextual understanding of content.

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
