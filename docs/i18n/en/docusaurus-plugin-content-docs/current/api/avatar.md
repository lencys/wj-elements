---
title: 'Avatar'
---

import Props from '@ionic-internal/component-api/v1/avatar/props.md';
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

`wje-avatar` is designed for fast visual identification of a person, team, brand, or other entity. It can render an image or other slotted content, fallback initials derived from `label`, and supporting icon, status, or secondary content.

## Basic usage

This example places the three most important modes next to each other: an avatar with an image, initials, and an icon. It quickly shows that `wje-avatar` is not limited to profile pictures.

import Basic from '@site/static/usage/v1/avatar/basic/index.md';

<Basic />

## Avatar size

This example demonstrates that the `size` attribute changes the dimensions of the outer avatar shell. The same image or slotted content can therefore scale without changing the inner markup.

import Size from '@site/static/usage/v1/avatar/size/index.md';

<Size />

## Avatar size with initials

The same size variants also work in initials mode. When the boolean `initials` attribute is present, the component prefers generated initials over the default slotted content.

import SizeInitials from '@site/static/usage/v1/avatar/size-initials/index.md';

<SizeInitials />

## Avatar with icon

If you want the avatar to act more like a compact status or action marker than a profile image, place an icon into the `icon` slot.

import Icon from '@site/static/usage/v1/avatar/icon/index.md';

<Icon />

## Avatar with initials

This is the most common fallback scenario. The component takes text from `label`, derives initials, and automatically computes contrasting background and text colors.

import Initials from '@site/static/usage/v1/avatar/initials/index.md';

<Initials />

## Avatar with status

In this example, `wje-status` is placed into the `status` slot so it appears on one of the four avatar corners according to `status-placement`. This works well for online state, verification, or similar compact indicators.

import Status from '@site/static/usage/v1/avatar/status/index.md';

<Status />

## Avatar as a dropdown trigger

There is an important composition detail here: `wje-avatar` is placed into the `trigger` slot of `wje-dropdown`. The `placement`, `trigger`, and `offset` attributes therefore belong to the dropdown, not the avatar.

import Dropdown from '@site/static/usage/v1/avatar/dropdown/index.md';

<Dropdown />


## Avatar with tooltip

This example is also based on composition with another component. The tooltip is not built into the avatar; you get it by using the avatar as the `wje-tooltip` target content.

import Tooltip from '@site/static/usage/v1/avatar/tooltip/index.md';

<Tooltip />

## Group of avatars

This example shows the boundary between what the component does and what surrounding layout CSS does. `wje-avatar` does not provide a built-in group wrapper or group API; overlapping avatars are achieved through an external container and custom CSS.

import Group from '@site/static/usage/v1/avatar/group/index.md';

<Group />

## Things To Keep In Mind

- `label` together with `initials` is the most practical non-image fallback.
- `status-placement` controls where the `status` slot is rendered on the avatar edge.
- The default slot holds the main content, while `icon`, `status`, and `secondary` cover supporting use cases.
- The helper method `isImage()` checks whether the avatar currently contains `wje-img`.
- Click, hover, or menu-open behavior is usually owned by a parent component such as `wje-dropdown` or `wje-tooltip`.

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

## Methods

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
