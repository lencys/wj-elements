---
title: 'Dropdown'
---

import Props from '@ionic-internal/component-api/v1/dropdown/props.md';
import Events from '@ionic-internal/component-api/v1/dropdown/events.md';
import Methods from '@ionic-internal/component-api/v1/dropdown/methods.md';
import Parts from '@ionic-internal/component-api/v1/dropdown/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/dropdown/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/dropdown/slots.md';

<head>
  <title>Dropdown | WebJET Element to display the context menu</title>
  <meta
    name="description"
    content="Dropdown element is used to display the context menu after clicking the button. Allows the user to select one of the predefined options."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Dropdown element is used to display the context menu after clicking the button. Allows the user to select one of the predefined options. It contains a [Button](./button) element that acts as an activator and a [Menu](./menu) element with content in the form of individual [MenuItem.](./menu-item) items.

## Basic usage

This example shows a basic dropdown with a trigger and menu content. It is a good starting point for common action or navigation menus.

import Basic from '@site/static/usage/v1/dropdown/basic/index.md';

<Basic />

## Dropdown with dialogue

This example uses a dropdown item to trigger a follow-up action, specifically opening a dialog.

import OpenDialog from '@site/static/usage/v1/dropdown/open-dialog/index.md';

<OpenDialog />

## Display on hover

This example switches the dropdown from click-based opening to hover so the behavior difference is easy to compare.

import Hover from '@site/static/usage/v1/dropdown/hover/index.md';

<Hover />

## Dropdown with tooltip

This example shows how the `wje-dropdown` component can work together with a tooltip for additional context.

import Tooltip from '@site/static/usage/v1/dropdown/tooltip/index.md';

<Tooltip />

## Dropdown with avatar

This example uses an avatar as the dropdown trigger, which is a common pattern for profile menus and user actions.

import Avatar from '@site/static/usage/v1/dropdown/inner-avatar/index.md';

<Avatar />


## When to use

Use `wje-dropdown` to communicate status, result of actions, or required next steps immediately.

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
