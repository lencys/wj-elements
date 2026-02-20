---
title: 'Input File'
---

import Props from '@ionic-internal/component-api/v1/input-file/props.md';
import Events from '@ionic-internal/component-api/v1/input-file/events.md';
import Methods from '@ionic-internal/component-api/v1/input-file/methods.md';
import Parts from '@ionic-internal/component-api/v1/input-file/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/input-file/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/input-file/slots.md';

<head>
  <title>Input File: Extension of the standard Input element</title>
  <meta
    name="description"
    content="API documentation for wje-input-file, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

The `Input File` element extends the `Input` element with the ability to upload files.

## Basic use

import Basic from '@site/static/usage/v1/input-file/basic/index.md';

<Basic />


## When to use

Use `wje-input-file` when users need to enter values, choose options, or trigger form-related actions.

## When not to use

Do not use it as a decorative element without interaction. Prefer presentational components in that case.

## Accessibility

Always provide a label (`label`/`aria-label`), keep keyboard support, and surface clear validation feedback.

## Best Practices

- Keep validation rules and error behavior consistent across the entire form.
- Show loading or disabled states during async operations.
- Split complex forms into smaller sections with immediate feedback.

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
