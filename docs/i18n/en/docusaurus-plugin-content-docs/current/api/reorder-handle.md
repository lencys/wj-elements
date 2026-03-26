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
    content="API documentation for wje-reorder-handle, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

The `ReorderHandle` is an element that adds drag-and-drop functionality to other elements, and serves as a handle for moving items in a group of elements.

## Basic use

This example shows the reorder handle in its simplest form, as the visual grip used to move an item.

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


## When to use

Use `wje-reorder-handle` when you need a consistent WebJET-based implementation for this UI concern.

## When not to use

Do not stretch the component beyond its responsibility; compose smaller primitives for edge cases.

## Accessibility

Validate keyboard behavior, focus states, contrast, and meaningful labels for interactive elements.

## Best Practices

- Prefer component APIs over direct DOM manipulation.
- Stick to design tokens and naming conventions.
- Test components with realistic data before production rollout.

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
