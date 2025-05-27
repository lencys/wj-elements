---
title: Reorder
---

import Props from '@ionic-internal/component-api/v1/reorder/props.md';
import Events from '@ionic-internal/component-api/v1/reorder/events.md';
import Methods from '@ionic-internal/component-api/v1/reorder/methods.md';
import Parts from '@ionic-internal/component-api/v1/reorder/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/reorder/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/reorder/slots.md';

<head>
  <title>Reorder</title>
  <meta
    name="description"
    content="Reorder je komponent, ktorý umožňuje ťahaním položky zmeniť jej poradie v rámci skupiny položiek. Musí sa použiť v rámci skupiny na zmenu poradia, aby sa zabezpečilo vizuálne rozhranie drag and drop."
  ></meta>
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`Reorder` is a component that allows you to use the Drag&Drop functionality to reorder the `ReorderItem` items in a group.

## Basic usage

import Basic from '@site/static/usage/v1/reorder/basic/index.md';

<Basic />

## Attribute Disabled

The `disabled` attribute is used to disable the ability to reorder items within a `Reorder`. When this attribute is set, the user will not be able to drag items to change their order.

import Disabled from '@site/static/usage/v1/reorder/disabled/index.md';

<Disabled />

## Handle for pulling

By adding an item to the `handle` slot of the [**ReorderItem**](../reorder-item) item, you can define a specific area that will serve as a handle for dragging and rearranging items. This allows users to interact more intuitively when changing the order of items.

import Handle from '@site/static/usage/v1/reorder/handle/index.md';

<Handle />

## Attribute Reverse - Reverse order

The `reverse` attribute is used to change the direction of reordering items within a `Reorder`.

import Reverse from '@site/static/usage/v1/reorder/reverse/index.md';

<Reverse />

## Drop Zones

DropZone is a component that represents a zone intended for rearranging content.

import DropZones from '@site/static/usage/v1/reorder/drop-zones/index.md';

<DropZones />

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
