---
title: 'Aside'
---

import Props from '@ionic-internal/component-api/v1/aside/props.md';
import Events from '@ionic-internal/component-api/v1/aside/events.md';
import Methods from '@ionic-internal/component-api/v1/aside/methods.md';
import Parts from '@ionic-internal/component-api/v1/aside/parts.md';
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

`wje-aside` is a layout primitive for supporting content next to `wje-main`. In practice it is most useful for secondary navigation, filters, summaries, state panels, contextual tools, or auxiliary actions. Unlike overlay components, it does not manage complex interaction or application state by itself—its role is to provide a stable space within the page layout.

## Example usage in a layout

The example below is not just a single isolated aside. It shows multiple common layout combinations with `wje-container`, `wje-header`, `wje-main`, and `wje-footer`. When reading the example, focus especially on the `width` attribute on `wje-aside`, which controls the side-column width in the given layout.

import LayoutBasic from '@site/static/usage/v1/layout/basic/index.md';

<LayoutBasic />

## How `wje-aside` works in practice

The most important implementation details are these:

- content is projected through the default slot,
- the `width` attribute is used to populate the `--wje-aside-width` CSS variable and therefore the practical width of the side panel,
- when the `fixed` attribute is present, the component uses `position: fixed` on desktop breakpoints,
- the `top` attribute works together with `fixed` and sets the top offset through `--wje-aside-top`.

That makes `wje-aside` intentionally simple but flexible. Most of the final behavior depends on the layout structure around it and the CSS variables or width values you provide.

## Important note about mobile behavior

In the current stylesheets, `wje-aside` is hidden by default on smaller viewports. The styles also include a mobile-oriented `variant="top-start"` mode together with an `open` class that can be used to show the panel as an overlay-style layer. Since the component does not expose dedicated methods or events for toggling that state, treat this as a layout-level detail that needs to be controlled by the parent application or another component.

## When to use

Use `wje-aside` when you need a stable secondary panel next to the main content. Good fits include section navigation, catalog filters, table-of-contents blocks, status or summary panels, admin helper actions, or multi-column work layouts.

## When not to use

Do not use it as a replacement for a modal, a drawer with its own behavior, or a component that needs to manage open/close interaction by itself. If you need complex mobile overlay behavior, focus trapping, or open/close events, a dedicated overlay component is usually a better choice.

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

## Events

`wje-aside` does not currently emit custom events.

<Events />

## Methods

The component does not currently expose dedicated public methods; behavior is primarily configured through attributes, layout composition, and CSS.

<Methods />

## CSS Shadow Parts

`wje-aside` does not currently expose shadow parts.

<Parts />

## CSS Custom Properties

In real-world usage, the most important variables are `--wje-aside-width`, `--wje-aside-top`, `--wje-aside-border-color`, `--wje-aside-border-width`, and `--wje-aside-border-style`.

<CustomProps />

## Slots

The component uses the default slot for any side-panel content.

<Slots />
