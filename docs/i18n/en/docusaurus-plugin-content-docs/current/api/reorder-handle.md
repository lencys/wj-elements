---
title: Reorder Handle
---

import Props from '@ionic-internal/component-api/v1/reorder-handle/props.md';
import Events from '@ionic-internal/component-api/v1/reorder-handle/events.md';
import Methods from '@ionic-internal/component-api/v1/reorder-handle/methods.md';
import Parts from '@ionic-internal/component-api/v1/reorder-handle/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/reorder-handle/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/reorder-handle/slots.md';

<head>
  <title>Reorder Handle</title>
  <meta
    name="description"
    content="Reorder Handle je komponent, ktorý slúži ako rukoväť na presúvanie položiek vo Reorder komponente."
  ></meta>
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `ReorderHandle` is an element that adds drag-and-drop functionality to other elements, and serves as a handle for moving items in a group of elements.

## Basic use

import Basic from '@site/static/usage/v1/reorder-handle/basic/index.md';

<Basic />

## Locking handle

By adding the `lock` attribute to the `ReorderHandle` element, you can block the ability to drag and drop items, preventing users from reordering items.

import Parent from '@site/static/usage/v1/reorder-handle/parent/index.md';

<Parent />

## Without dropzone (For use in menus)

Elements can be moved within their parent container without the need to explicitly define a dropzone attribute, simplifying the implementation of drag-and-drop functionality.

import Menu from '@site/static/usage/v1/reorder-handle/menu-usage/index.md';

<Menu />

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
