---
title: 'Popup'
---

import Props from '@ionic-internal/component-api/v1/popup/props.md';
import Events from '@ionic-internal/component-api/v1/popup/events.md';
import Methods from '@ionic-internal/component-api/v1/popup/methods.md';
import Parts from '@ionic-internal/component-api/v1/popup/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/popup/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/popup/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `wje-popup` page was auto-generated to keep API documentation coverage in sync with the current component set.
Detailed usage and best-practice guidance will be expanded in the next content phase.


## When to use

Use `wje-popup` to communicate status, result of actions, or required next steps immediately.

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
