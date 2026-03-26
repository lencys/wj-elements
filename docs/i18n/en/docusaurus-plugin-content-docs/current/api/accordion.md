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

`wje-accordion` is the parent container for multiple `wje-accordion-item` children. It does not render rich section UI on its own and it does not define the individual headers itself. Its main responsibility is state coordination across child items, especially the “only one item open at a time” behavior and the initially open item via the `index` attribute. If you only need one collapsible section, most of the visual and interactive behavior lives in `wje-accordion-item`; `wje-accordion` becomes useful when you want several items to share one coordination layer.

## Basic usage

The example below shows a single item with richer content in the `headline`, `description`, and `content` slots. It also demonstrates that a headline does not have to be text-only—you can place `wje-status`, `wje-dropdown`, action menus, or other supporting components inside it.

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## Color variants on items

This example matters for one key reason: color is not configured on `wje-accordion` itself. It is applied to individual `wje-accordion-item` elements through the `color` attribute. The wrapper only keeps the group together. If you want mixed visual states inside one accordion, you configure them per item.

import Colors from '@site/static/usage/v1/accordion/colors/index.md';

<Colors />

## Multiple items open at once

This example demonstrates the `multiple` attribute, which prevents one item from automatically closing the others when it opens. It also uses the `index` attribute for the item that should start opened on initialization. The `index` value maps to DOM order, so `1` targets the second item and `2` targets the third. If you rely on a specific item being open by default, it is a good idea to verify the resulting behavior in the exact content structure you are shipping.

import Multiple from '@site/static/usage/v1/accordion/multiple/index.md';

<Multiple />

## How the component works in practice

The most important thing to understand about `wje-accordion` is what the wrapper does and what is already handled by its items:

- `wje-accordion` accepts children through the default slot; in practice you should place direct `wje-accordion-item` children inside it.
- When an item opens, the wrapper listens for the bubbling `wje-accordion-item:open` event and, when `multiple` is **not** set, calls `collapseAll()` on the remaining items.
- The wrapper does not currently provide its own visual `parts` or dedicated CSS custom properties. Most styling lives on `wje-accordion-item`.
- The host sets `role="presentation"`, so accessibility semantics for the interactive experience are concentrated in the child items, not in the wrapper.

## When to use

Use `wje-accordion` when you have multiple logically separated sections and want users to reveal them progressively without overwhelming the screen. Common examples include FAQ sections, advanced settings, extra detail panels, grouped form subsections, and contextual secondary content that should not always stay expanded.

## When not to use

Do not use it as a substitute for page navigation, side-by-side comparison tables, or content that must remain visible at all times. If users need to compare multiple sections continuously, a grid, tabs, or a standard page layout may be a better fit.

## Accessibility

- Make sure each item has a clear and meaningful `headline` slot.
- If you place additional interactive controls inside a headline, test focus order and keyboard behavior in the real layout.
- The wrapper itself is presentational; button roles and panel ARIA relationships are handled by `wje-accordion-item`.

## Best Practices

- Group only closely related sections inside the same accordion.
- Use `multiple` intentionally—long content can quickly make a page feel oversized.
- Use color variants to communicate meaning, not just decoration.
- If you react to item expansion in parent code, listening on `wje-accordion` is often the most convenient approach because item events bubble to it.

## Attributes and Properties

<Props />

## Events

The wrapper does not create an extra top-level custom event of its own, but it is an important place to listen for bubbling `wje-accordion-item` events, especially `wje-accordion-item:open` and `wje-accordion-item:close`.

<Events />

## Methods

The most practical public methods are `collapseAll(exception)` and `getAccordions()`. The first closes every item except the provided one; the second returns the direct `wje-accordion-item` children.

<Methods />

## CSS Shadow Parts

`wje-accordion` does not currently expose its own shadow parts. If you need detailed visual customization, use the API and parts on `wje-accordion-item`.

<Parts />

## CSS Custom Properties

The wrapper currently does not add dedicated documented CSS custom properties; styling is focused on the child items.

<CustomProps />

## Slots

From a usage perspective, expect a default slot for direct `wje-accordion-item` children.

<Slots />
