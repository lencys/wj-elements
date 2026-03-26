---
title: 'Grid'
---

import Props from '@ionic-internal/component-api/v1/grid/props.md';
import Events from '@ionic-internal/component-api/v1/grid/events.md';
import Methods from '@ionic-internal/component-api/v1/grid/methods.md';
import Parts from '@ionic-internal/component-api/v1/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/grid/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/grid/slots.md';

<head>
  <title>Grid | Flexible way to create responsive layouts</title>
  <meta
    name="description"
    content="API documentation for wje-grid, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Grid system is a flexible way to create responsive layouts by dividing the screen into rows [Rows](./row) and columns [Cols](./col). It is based on flexbox, uses a 12-column layout, and supports 6 breakpoints: `xs`, `sm`, `md`, `lg`, `xl`, and `xxl`.

## Overview of functions

**Responsive**: Grid allows you to create responsive layouts that adapt to different screen sizes and orientations.

**Nesting** : Developers can nest multiple wje-grid elements inside each other to create more complex layouts. This allows for greater flexibility in the arrangement of content.

**Breakpoints**: The Grid system supports breakpoints for phones, tablets, desktop screens, and larger layouts through `xxl`.

**Offset columns**: Developers can offset columns to create visual differences in layout. This is useful when creating designs with staggered or asymmetrical layouts.

**Automatic Layout**: Grid provides options to automatically adjust column sizes based on content or available space. This can help optimize the layout for different scenarios.

## Default Breakpoints

The table below shows the default grid breakpoints.

## Basic usage

By default, columns will take up equal width inside of a row for all devices and screen sizes.

import Basic from '@site/static/usage/v1/grid/basic/index.md';

<Basic />

## Column size: auto

Setting `size` to `auto` adjusts the column to the width of its contents, and adjacent columns automatically adjust their width to fill the remaining space in the row.

import SizeAuto from '@site/static/usage/v1/grid/size-auto/index.md';

<SizeAuto />

## Specific column size

Setting `size` to a specific column size will occupy the specified number of columns of the row. Adjacent columns automatically adjust their width to fill the remaining space in the row.

import Size from '@site/static/usage/v1/grid/size/index.md';

<Size />

## Responsive column size

The `size` attribute can also be set with a specific breakpoint by adding its prefix. In this case, the column size is adjusted only after the set breakpoint is reached.

import SizeResponsive from '@site/static/usage/v1/grid/size-responsive/index.md';

<div className="large">

<SizeResponsive />

</div>

## Offset

**Offset** allows you to create an empty space in the layout by shifting a given column to the right. The offset attribute takes a numeric value that represents the number of columns by which to offset the target column.

import Offset from '@site/static/usage/v1/grid/offset/index.md';

<Offset />

## Responsive Offset

By adding a breakpoint to the offset, the column offset is adjusted only after the selected breakpoint is reached.

import OffsetResponsive from '@site/static/usage/v1/grid/offset-responsive/index.md';

<OffsetResponsive />

## Order

The order of the columns can be modified by adding the `order` attribute and setting its value to the position in the grid where it should be placed.

import Order from '@site/static/usage/v1/grid/order/index.md';

<Order />

## Responsive order

When `order` is combined with breakpoints or different column sizes, make sure the visual order still matches user expectations on each device size.

import OrderResponsive from '@site/static/usage/v1/grid/order-responsive/index.md';

<OrderResponsive />

## Alignment

### Vertical Alignment

Columns can be aligned vertically using CSS classes `wje-align-items-start`, `wje-align-items-center`, `wje-align-items-end`.

import VerticalAlignment from '@site/static/usage/v1/grid/vertical-alignment/index.md';

<div className="xlarge">

<VerticalAlignment />

</div>

### Horizontal Alignment

Columns can be aligned horizontally using the CSS classes `wje-justify-content-start`, `wje-justify-content-center`, `wje-justify-content-end`, `wje-justify-content-between`, `wje-justify-content-around`.

import HorizontalAlignment from '@site/static/usage/v1/grid/horizontal-alignment/index.md';

<div className="large">

<HorizontalAlignment />

</div>


## When to use

Use `wje-grid` when you need responsive content layout inside a section or page.

## When not to use

Do not use the grid to handle business logic or application state orchestration. It is a layout tool only.

## Accessibility

Make sure visual reordering does not break the logical reading and tab order for keyboard and screen-reader users.

## Best Practices

- Define mobile/desktop breakpoints first, then refine visual details.
- Prefer spacing tokens over ad-hoc margin/padding overrides.
- Test keyboard and screen reader behavior for overflow scenarios.

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
