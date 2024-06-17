---
title: Grid
---

import Props from '@ionic-internal/component-api/v1/grid/props.md';
import Events from '@ionic-internal/component-api/v1/grid/events.md';
import Methods from '@ionic-internal/component-api/v1/grid/methods.md';
import Parts from '@ionic-internal/component-api/v1/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/grid/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/grid/slots.md';

<head>
  <title>Grid | Flexible way to create responsive layouts</title>
  <meta name="description" content="Systém Grid je flexibilný spôsob vytvárania responzívnych rozvrhnutí(layoutov) rozdelením obrazovky na mriežku riadkov (rows) a stĺpcov (columns). Grid je založený na rozložení s 12 stĺpcami, podobne ako mnohé iné populárne grid systémy." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Grid system is a flexible way to create responsive layouts by dividing the screen into a grid of rows [Rows](../row) and columns [Cols](../col). Grid is based on flexbox with layout divided into 12 columns with 5 responsive breakpoints.

## Overview of functions

**Responsive**: Grid allows you to create responsive layouts that adapt to different screen sizes and orientations.

**Nesting** : Developers can nest multiple wj-grid elements inside each other to create more complex layouts. This allows for greater flexibility in the arrangement of content.

**Breakpoints**: The Grid Grid system supports different breakpoints for different screen sizes such as phones, tablets and desktops.

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

## Alignment

### Vertical Alignment

Columns can be aligned vertically using css classes `wj-align-items-start`, `wj-align-items-center`, `wj-align-items-end`.

import VerticalAlignment from '@site/static/usage/v1/grid/vertical-alignment/index.md';

<div className="xlarge">

<VerticalAlignment />

</div>

### Horizontal Alignment

Columns can be aligned horizontally using the css classes `wj-justify-content-start`, `wj-justify-content-center`, `wj-justify-content-end`, `wj-justify-content-between`, `wj-justify-content-around`.

import HorizontalAlignment from '@site/static/usage/v1/grid/horizontal-alignment/index.md';

<div className="large">

<HorizontalAlignment />

</div>

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
