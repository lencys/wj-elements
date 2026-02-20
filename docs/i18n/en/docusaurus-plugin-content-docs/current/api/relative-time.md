---
title: 'Relative Time'
---

import Props from '@ionic-internal/component-api/v1/relative-time/props.md';
import Events from '@ionic-internal/component-api/v1/relative-time/events.md';
import Methods from '@ionic-internal/component-api/v1/relative-time/methods.md';
import Parts from '@ionic-internal/component-api/v1/relative-time/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/relative-time/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/relative-time/slots.md';

<head>
  <title>Reorder | ion-reorder: Drag and Drop Icon to Reorder Items</title>
  <meta
    name="description"
    content="The RelativeTime component is an element used to display the relative time based on the inserted date. Calculates and displays the relative time difference between the current date and the."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The RelativeTime component is an element used to display the relative time based on the inserted date. Calculates and displays the relative time difference between the current date and the specified date. The relative time format is localized based on the language of the user's browser.

## Basic usage

import Basic from '@site/static/usage/v1/relative-time/basic/index.md';

<Basic />


## When to use

Use `wje-relative-time` to improve readability, scannability, and contextual understanding of content.

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
