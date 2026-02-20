---
title: 'Tooltip'
---

import Props from '@ionic-internal/component-api/v1/tooltip/props.md';
import Events from '@ionic-internal/component-api/v1/tooltip/events.md';
import Methods from '@ionic-internal/component-api/v1/tooltip/methods.md';
import Parts from '@ionic-internal/component-api/v1/tooltip/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/tooltip/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/tooltip/slots.md';

<head>
  <title>Tooltip | Mouseover popup tooltip</title>
  <meta
    name="description"
    content="API documentation for wje-tooltip, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `Tooltip` element is used to display a popup tooltip on mouseover and can be attached to various elements of a web page. It is easily customizable with attributes for content and location. The tooltip appears when the user hovers the mouse over the target element, and disappears when the mouse leaves the element.

## Basic Usage

import Basic from '@site/static/usage/v1/tooltip/basic/index.md';

<Basic />


## When to use

Use `wje-tooltip` to communicate status, result of actions, or required next steps immediately.

## When not to use

Do not show multiple feedback channels for the same event unless there is a strong reason.

## Accessibility

Announce status updates with suitable ARIA live regions and manage focus for modal interactions.

## Best Practices

- Match message severity (info/success/warning/error) to actual user impact.
- Use confirmations only for destructive or hard-to-reverse actions.
- Keep timeouts consistent so users have enough time to read messages.

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
