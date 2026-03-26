---
title: 'Accordion'
---

import Props from '@ionic-internal/component-api/v1/accordion/props.md';
import Events from '@ionic-internal/component-api/v1/accordion/events.md';
import Methods from '@ionic-internal/component-api/v1/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v1/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/accordion/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/accordion/slots.md';

<head>
  <title>Accordion: coordinating expandable content sections</title>
  <meta
    name="description"
    content="The wje-accordion component groups wje-accordion-item children, coordinates their open state, and helps build structured expandable content sections."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-accordion` groups `wje-accordion-item` children and coordinates their state. It is most useful when several expandable sections need shared logic such as one-open-at-a-time behavior or an initially expanded item through `index`.

## Basic usage

The example below shows `wje-accordion` together with a single `wje-accordion-item` so the wrapper and item responsibilities are easy to read. A headline does not have to be text-only; it can include supporting status or action components as well.

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## Color variants on items

Color is configured on each `wje-accordion-item`, not on the wrapper itself. That means one accordion can mix different visual states per item.

import Colors from '@site/static/usage/v1/accordion/colors/index.md';

<Colors />

## Multiple items open at once

This example demonstrates the `multiple` attribute, where opening one item no longer closes the others. It also uses `index`, which selects the initially expanded item based on DOM order.

import Multiple from '@site/static/usage/v1/accordion/multiple/index.md';

<Multiple />

## Things To Keep In Mind

- Place direct `wje-accordion-item` children inside the wrapper.
- When `multiple` is not set, opening one item closes the others.
- `wje-accordion` is a coordination wrapper; most visual styling, slots, and interaction live on `wje-accordion-item`.
- The host uses `role="presentation"`, so interactive accessibility semantics are handled by the child items.

## Accessibility

- Make sure each item has a clear and meaningful `headline` slot.
- If you place additional interactive controls inside a headline, test focus order and keyboard behavior in the real layout.
- If parent logic needs to react to expansion changes, listen to the bubbling events emitted by `wje-accordion-item`.

## Best Practices

- Group only closely related sections inside the same accordion.
- Use `multiple` intentionally because long content can quickly make a page feel oversized.
- Use color variants to communicate meaning, not just decoration.

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
