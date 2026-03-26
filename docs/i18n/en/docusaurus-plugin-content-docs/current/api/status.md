---
title: 'Status'
---

import Props from '@ionic-internal/component-api/v1/status/props.md';
import Events from '@ionic-internal/component-api/v1/status/events.md';
import Methods from '@ionic-internal/component-api/v1/status/methods.md';
import Parts from '@ionic-internal/component-api/v1/status/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/status/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/status/slots.md';

<head>
  <title>Status | Display status or indicator</title>
  <meta
    name="description"
    content="The Status component is used to display a status or indicator that can be used to visually indicate different states in the application."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `Status` component is used to display a status or indicator that can be used to visually indicate different states in the application. For example, user login status, network connection status, or other indicators that are important to the user interface.

It can also be customized by setting different sizes or types to suit the needs of the application design.

## Basic use

This example shows the status component in its simplest form, as a short state indicator without additional supporting content.

import Basic from '@site/static/usage/v1/status/basic/index.md';

<Basic />

## Slots

This example shows how to add extra content to status through slots, such as an icon or supporting text.

import Slot from '@site/static/usage/v1/status/slots/index.md';

<Slot />

## Size

This example shows how changing size affects the layout and visual hierarchy of the `wje-status` component.

import Size from '@site/static/usage/v1/status/size/index.md';

<Size />

## Status types

This example shows how to display a status indicator or supporting status content with the `wje-status` component.

import Types from '@site/static/usage/v1/status/types/index.md';

<Types />


## When to use

Use `wje-status` to communicate status, result of actions, or required next steps immediately.

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
