---
title: "Breadcrumbs"
---
import Props from '@ionic-internal/component-api/v1/breadcrumbs/props.md';
import Events from '@ionic-internal/component-api/v1/breadcrumbs/events.md';
import Methods from '@ionic-internal/component-api/v1/breadcrumbs/methods.md';
import Parts from '@ionic-internal/component-api/v1/breadcrumbs/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/breadcrumbs/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/breadcrumbs/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Breadcrumbs are navigation items that are used to indicate where a user is on an app or site. They should be used for large sites and apps with hierarchically arranged pages. Breadcrumbs can be collapsed based on the maximum number that can show, and the collapsed indicator can be clicked on to present a popover with more information or expand the collapsed breadcrumbs.

## Basic Usage

import Basic from '@site/static/usage/v1/breadcrumbs/basic/index.md';

<Basic />

## Using Icons

### Icons on Items

import IconsOnItems from '@site/static/usage/v1/breadcrumbs/icons/icons-on-items/index.md';

<IconsOnItems />

### Custom Separators

import CustomSeparators from '@site/static/usage/v1/breadcrumbs/icons/custom-separators/index.md';

<CustomSeparators />

## Collapsing Items

### Max Items

If there are more items than the value of `maxItems`, the breadcrumbs will be collapsed. By default, only the first and last items will be shown.

import MaxItems from '@site/static/usage/v1/breadcrumbs/collapsing-items/max-items/index.md';

<MaxItems />

### Items Before or After Collapse

Once the items are collapsed, the number of items to show can be controlled by the `itemsBeforeCollapse` and `itemsAfterCollapse` properties.

import ItemsBeforeAfter from '@site/static/usage/v1/breadcrumbs/collapsing-items/items-before-after/index.md';

<ItemsBeforeAfter />

### Collapsed Indicator Click -- Expand Breadcrumbs

Clicking the collapsed indicator will fire the `ionCollapsedClick` event. This can be used to, for example, expand the breadcrumbs.

import ExpandOnClick from '@site/static/usage/v1/breadcrumbs/collapsing-items/expand-on-click/index.md';

<ExpandOnClick />

### Collapsed Indicator Click -- Present Popover

The `ionCollapsedClick` event can also be used to present an overlay (in this case, an `ion-popover`) showing the hidden breadcrumbs.

import PopoverOnClick from '@site/static/usage/v1/breadcrumbs/collapsing-items/popover-on-click/index.md';

<PopoverOnClick />

## Theming

### Colors

import Colors from '@site/static/usage/v1/breadcrumbs/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v1/breadcrumbs/theming/css-properties/index.md';

<CSSProps />


## Properties
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