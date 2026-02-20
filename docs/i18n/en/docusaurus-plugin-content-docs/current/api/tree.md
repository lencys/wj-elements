---
title: 'Tree'
---

import Props from '@ionic-internal/component-api/v1/tree/props.md';
import Events from '@ionic-internal/component-api/v1/tree/events.md';
import Methods from '@ionic-internal/component-api/v1/tree/methods.md';
import Parts from '@ionic-internal/component-api/v1/tree/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/tree/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/tree/slots.md';

<head>
  <title>Accordion: view content in drop-down sections</title>
  <meta
    name="description"
    content="API documentation for wje-tree, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `Tree` element allows hierarchical display of data in a tree structure. It is used to visualize categories, file systems or navigation structures. Tree contains wje-tree as the main container and wje-tree-item as the individual tree entries. Items can contain children, creating a nested hierarchy.

## Basic use

import Basic from '@site/static/usage/v1/tree/basic/index.md';

<Basic />

## Slots

import StartEndSlots from '@site/static/usage/v1/tree/slots/index.md';

<StartEndSlots />

## Multiple

import Multiple from '@site/static/usage/v1/tree/multiple/index.md';

<Multiple />

## Nested indentation

For deeper nesting levels (for example `Deciduous` -> `Maple` -> `Field maple`), indentation is applied continuously to each opened branch. This keeps level 3 and deeper items visually separated from their parent level.

import Indent from '@site/static/usage/v1/tree/indent/index.md';

<Indent />

## TO DO complete tree and tree item docs


## When to use

Use `wje-tree` when users need to understand location, move between views, or traverse hierarchy.

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
