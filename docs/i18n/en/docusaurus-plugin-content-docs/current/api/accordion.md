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
  <title>Accordion: view content in drop-down sections</title>
  <meta
    name="description"
    content="API documentation for wje-accordion, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `Accordion` element allows you to view the contents in drop-down sections. Each section can be expanded or collapsed with a click, allowing users to quickly find and view the information they want. The component supports multiple selection, which means that multiple sections can be expanded at once. In addition, it allows you to set the initial index of the expanded section, which provides flexibility when initializing a component with default expanded content.

## Basic use

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## Colours

import Colors from '@site/static/usage/v1/accordion/colors/index.md';

<Colors />

## Multiple

import Multiple from '@site/static/usage/v1/accordion/multiple/index.md';

<Multiple />


## When to use

Use `wje-accordion` when you need a consistent WebJET-based implementation for this UI concern.

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
