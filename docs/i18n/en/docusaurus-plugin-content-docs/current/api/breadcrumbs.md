---
title: 'Breadcrumbs'
---

import Props from '@ionic-internal/component-api/v1/breadcrumbs/props.md';
import Events from '@ionic-internal/component-api/v1/breadcrumbs/events.md';
import Methods from '@ionic-internal/component-api/v1/breadcrumbs/methods.md';
import Parts from '@ionic-internal/component-api/v1/breadcrumbs/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/breadcrumbs/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/breadcrumbs/slots.md';

<head>
  <title>Breadcrumbs | Navigation</title>
  <meta
    name="description"
    content="API documentation for wje-breadcrumbs, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Breadcrumbs is a component that displays the path a user has taken within an application or site. This element displays a hierarchical page layout in which each segment of the [**Breadcrumb**](./breadcrumb) path is a hyperlink, allowing a quick return to previous levels. Breadcrumbs may contain an icon.

## Basic usage

import Basic from '@site/static/usage/v1/breadcrumbs/basic/index.md';

<Basic />

## Use with icons

import IconsOnItems from '@site/static/usage/v1/breadcrumbs/icons/icons-on-items/index.md';

<IconsOnItems />

## Custom separator icon

import CustomSeparators from '@site/static/usage/v1/breadcrumbs/icons/custom-separators/index.md';

<CustomSeparators />

## Collapsible breadcrumb

### Maximum number of items

If there are more items in the list than the value of `maxItems`, the list is collapsed. By default, only the first and last entries are displayed.

import MaxItems from '@site/static/usage/v1/breadcrumbs/collapsing-items/max-items/index.md';

<MaxItems />

### Number of items before or after packing

When items are collapsed, the number of items to be displayed can be controlled by adding the `itemsBeforeCollapse` and `itemsAfterCollapse` properties.

import ItemsBeforeAfter from '@site/static/usage/v1/breadcrumbs/collapsing-items/items-before-after/index.md';

<ItemsBeforeAfter />

### Drop-down window

Collapsed items can also be displayed as a dropdown using the `collapsed-variant` property with the value `dropdown`.

import PopoverOnClick from '@site/static/usage/v1/breadcrumbs/collapsing-items/popover-on-click/index.md';

<PopoverOnClick />


## When to use

Use `wje-breadcrumbs` when users need to understand location, move between views, or traverse hierarchy.

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
