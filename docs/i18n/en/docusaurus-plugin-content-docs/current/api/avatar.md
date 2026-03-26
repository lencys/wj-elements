---
title: 'Avatar'
---

import Props from '@ionic-internal/component-api/v1/avatar/props.md';
import Events from '@ionic-internal/component-api/v1/avatar/events.md';
import Methods from '@ionic-internal/component-api/v1/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v1/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/avatar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/avatar/slots.md';

<head>
  <title>Avatar: visual identity for a person, team, or object</title>
  <meta
    name="description"
    content="The wje-avatar component displays a profile image, initials, or an icon and supports additional slots for status and secondary content."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-avatar` is designed for compact visual identification of a person, team, brand, or other entity. In practice it is most commonly used in user lists, profile menus, comments, cards, tables, notifications, and application headers. The component can render an image or other slotted content through the default slot, generated initials from the `label` attribute, and supporting content through dedicated icon, status, and secondary slots.

## Basic usage

This example places the three most important modes next to each other: an avatar with an image, an avatar with initials, and an avatar with an icon. It is a useful quick overview showing that `wje-avatar` is not limited to “user profile pictures”—it is a general-purpose shell for a small identity marker.

import Basic from '@site/static/usage/v1/avatar/basic/index.md';

<Basic />

## Avatar size

This example demonstrates that the `size` attribute changes the dimensions of the avatar container itself. That means the same image or slotted content can scale with the component without changing the inner markup. The current implementation supports `small`, `medium`, `normal`, `large`, `x-large`, `2x-large`, `3x-large`, `4x-large`, and `5x-large`.

import Size from '@site/static/usage/v1/avatar/size/index.md';

<Size />

## Avatar size with initials

This example uses the same size variants but lets the component render initials derived from `label` instead of an image. One important implementation detail is that when the boolean `initials` attribute is present, the component prefers rendering initials over the default slotted content.

import SizeInitials from '@site/static/usage/v1/avatar/size-initials/index.md';

<SizeInitials />

## Avatar with icon

If you want to use the avatar more like a compact status or action marker than a profile image, place an icon into the `icon` slot. This keeps the same size and shape shell while changing the inner content to `wje-icon`.

import Icon from '@site/static/usage/v1/avatar/icon/index.md';

<Icon />

## Avatar with initials

This is the most common fallback scenario. The component takes text from `label`, derives initials, and automatically computes contrasting background and text colors. It is useful when no profile image is available or when you do not want to depend on image loading in long lists.

import Initials from '@site/static/usage/v1/avatar/initials/index.md';

<Initials />

## Avatar with status

In this example, `wje-status` is placed into the `status` slot so it appears on one of the four avatar corners according to the `status-placement` attribute. In real products, this works well for online/offline state, verification, sync state, or internal role markers.

The current implementation supports these `status-placement` values:

- `top-start`
- `top-end`
- `bottom-start`
- `bottom-end`

For more information about the indicator itself, see the [Status](../status) component documentation.

import Status from '@site/static/usage/v1/avatar/status/index.md';

<Status />

## Avatar as a dropdown trigger

There is an important composition detail here: the avatar is not wrapping the dropdown. Instead, `wje-avatar` is placed into the `trigger` slot of `wje-dropdown`. So the example demonstrates how to use an avatar as the entry point for a profile menu or contextual panel.

The `placement`, `trigger`, and `offset` attributes belong to `wje-dropdown`, not to the avatar itself.

import Dropdown from '@site/static/usage/v1/avatar/dropdown/index.md';

<Dropdown />


## Avatar with tooltip

This example is also based on composition with another component: `wje-avatar` is wrapped by `wje-tooltip`. The tooltip is not built into the avatar; you get it by using the avatar as the tooltip target content.

import Tooltip from '@site/static/usage/v1/avatar/tooltip/index.md';

<Tooltip />

## Group of avatars

This example is useful because it shows the boundary between what the component does and what surrounding layout CSS does. `wje-avatar` does not provide a built-in group wrapper or a dedicated group API. Overlapping multiple avatars is achieved through an external container and custom CSS.

In other words, the component supports grouping indirectly because it works well with external CSS and `::part(native)`, but it does not own the grouping logic itself.

import Group from '@site/static/usage/v1/avatar/group/index.md';

<Group />

## How the API works in practice

The most important public capabilities of `wje-avatar` are:

- the `label`, `initials`, and `size` attributes and properties,
- the `status-placement` attribute for positioning the `status` slot content,
- the default slot for the main image or other content,
- the `icon`, `status`, and `secondary` slots,
- the `native`, `status`, and `secondary` shadow parts,
- the public helper method `isImage()`, which checks whether the avatar contains `wje-img`.

The component does not currently emit its own custom events. If you need click, hover, or menu-open behavior, that is usually handled by the parent component around the avatar, such as `wje-dropdown` or `wje-tooltip`.

## When to use

Use `wje-avatar` when you need fast visual identification of an entity in a small space. It is most valuable where it helps users immediately recognize who or what is associated with the current action—for example in comments, accounts, notifications, assigned tasks, or a user-menu header.

## When not to use

Do not use it as the only carrier of important information. If a person or object identity is critical, the avatar should complement text, not replace the name, title, or description. It is also not a good substitute for a fully-fledged button without clear surrounding interaction context.

## Accessibility

- If you render an image, provide meaningful alternative text on the slotted `img` or `wje-img`.
- If you render initials, set `label`; the component also uses it for the host `aria-label`.
- When the avatar is used as a dropdown or tooltip trigger, accessibility is largely handled by the parent component because the interaction lives there.

## Best Practices

- For non-image fallback, use `label` together with `initials`.
- If the avatar triggers an action or a menu, do not leave users without nearby textual context.
- For grouped avatars, handle overlap and ring styling through external CSS rather than expecting a built-in group API.
- Use the `secondary` slot only when its position and meaning are clear in your layout; the component does not provide elaborate layout logic for it.

## Attributes and Properties

<Props />

## Events

The component does not emit custom events of its own.

<Events />

## Methods

If the autogenerated table below appears minimal, the method worth noting is `isImage()`, which returns whether a `wje-img` is present inside the avatar.

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

Beyond the tables below, it is helpful to know that initials mode sets `--wje-avatar-background-color` and `--wje-avatar-color` automatically, while sizing and shape can be fine-tuned with variables such as `--wje-avatar-size`, `--wje-avatar-font-size`, and `--wje-avatar-border-radius`.

<CustomProps />

## Slots

<Slots />
