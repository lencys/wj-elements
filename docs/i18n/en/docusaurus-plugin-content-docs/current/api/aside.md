---
title: 'Aside'
---

import Props from '@ionic-internal/component-api/v1/aside/props.md';
import CustomProps from '@ionic-internal/component-api/v1/aside/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/aside/slots.md';

<head>
  <title>Aside: a secondary side panel in page layouts</title>
  <meta
    name="description"
    content="The wje-aside component provides a secondary layout column for navigation, filters, summaries, or other supporting content next to wje-main."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-aside` is a layout primitive for supporting content next to `wje-main`. It is typically used for secondary navigation, filters, summaries, state panels, or helper actions.

## Example usage in a layout

The example below shows several common layout combinations with `wje-container`, `wje-header`, `wje-main`, and `wje-footer`. Pay special attention to the `width` attribute, which controls the side-column width in each layout.

import LayoutBasic from '@site/static/usage/v1/layout/basic/index.md';

<LayoutBasic />

## Things To Keep In Mind

- Content is projected through the default slot.
- The `width` attribute populates `--wje-aside-width`, which controls the resulting panel width.
- When `fixed` is present, the component uses `position: fixed` on desktop breakpoints.
- `top` works together with `fixed` and sets the top offset through `--wje-aside-top`.
- On smaller viewports the aside is hidden by default. The `top-start` variant and `open` class affect layout, not built-in state management.

## Accessibility

- Use it where secondary content genuinely belongs beside `main`, not instead of it.
- Preserve a logical document structure and focus order.
- If the panel becomes a mobile overlay controlled by parent logic, make sure focus management is handled at that higher level.

## Best Practices

- Choose width intentionally based on the content type; navigation often works best with a stable fixed width, while richer supporting content may benefit from token-based sizing.
- If you use `fixed`, also think about `top` so the aside does not overlap a fixed header.
- Test mobile behavior separately; a good desktop layout does not automatically translate into good small-screen UX.
- Keep the side panel for supporting content, not for the one piece of information users absolutely need to finish the main task.

## Attributes and Properties

<Props />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
