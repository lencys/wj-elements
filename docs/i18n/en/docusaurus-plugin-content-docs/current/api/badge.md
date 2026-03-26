---
title: 'Badge'
---

import Props from '@ionic-internal/component-api/v1/badge/props.md';
import Events from '@ionic-internal/component-api/v1/badge/events.md';
import Methods from '@ionic-internal/component-api/v1/badge/methods.md';
import Parts from '@ionic-internal/component-api/v1/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/badge/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/badge/slots.md';

<head>
  <title>Badge | Badges</title>
  <meta
    name="description"
    content="API documentation for wje-badge, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Badges are inline-block elements that are informative and usually appear near another element. They are used as a notification that there are other elements associated with the element and inform the user of their number.

## Basic usage

To use the Badge component, include it in the HTML with the required attributes.

import Basic from '@site/static/usage/v1/badge/basic/index.md';

<Basic />

## List

This example places a badge inside a list row, where it works as a short supporting indicator rather than the main content.

import List from '@site/static/usage/v1/badge/list/index.md';

<List />

## Styling

### Colors

This example compares color variants of the component so it is easier to choose the right semantic state and visual emphasis.

import Colors from '@site/static/usage/v1/badge/theming/colors/index.md';

<Colors />


## When to use

Use `wje-badge` to improve readability, scannability, and contextual understanding of content.

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
