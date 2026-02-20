---
title: 'Toast'
---

import Props from '@ionic-internal/component-api/v1/toast/props.md';
import Events from '@ionic-internal/component-api/v1/toast/events.md';
import Methods from '@ionic-internal/component-api/v1/toast/methods.md';
import Parts from '@ionic-internal/component-api/v1/toast/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/toast/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/toast/slots.md';

<head>
  <title>Toast | An unobtrusive way to display short notifications</title>
  <meta
    name="description"
    content="The Toast component provides an unobtrusive way of displaying short notifications to the user. They are designed to appear and disappear seamlessly, ensuring that important information."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Toast component provides an unobtrusive way of displaying short notifications to the user. They are designed to appear and disappear seamlessly, ensuring that important information reaches users without being intrusive.


## When to use

Use `wje-toast` to communicate status, result of actions, or required next steps immediately.

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
