---
title: 'Accordion Item'
---

import Props from '@ionic-internal/component-api/v1/accordion-item/props.md';
import Events from '@ionic-internal/component-api/v1/accordion-item/events.md';
import Methods from '@ionic-internal/component-api/v1/accordion-item/methods.md';
import Parts from '@ionic-internal/component-api/v1/accordion-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/accordion-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/accordion-item/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>Accordion Item: one expandable section with headline and content</title>
  <meta
    name="description"
    content="The wje-accordion-item component represents one interactive accordion section with headline, description, toggle, and content slots, plus public expand/collapse methods and custom events."
  />
</head>

<EncapsulationPill type="shadow" />

`wje-accordion-item` is the actual interactive section inside `wje-accordion`. This is the component that handles headline clicks, switches between `collapsed` and `expanded`, wires ARIA relationships between the headline and content panel, provides a fallback toggle icon, and emits events when the item opens or closes. The simplest way to remember the split of responsibilities is this: `wje-accordion` coordinates the group, while `wje-accordion-item` is what the user actually opens and closes.

## Basic usage inside a group

The example below uses a single item inside `wje-accordion` so you can clearly see where the `headline`, `description`, and `content` slots belong. The headline also contains a `wje-dropdown`, which is a useful reminder that the header can include more than plain text.

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## How the item works

- The `headline` slot becomes the clickable header. After rendering, the component assigns `role="button"`, `tabindex="0"`, `aria-controls`, and `aria-expanded`.
- The `description` slot is supporting text inside the header and works well for short context, status, or helper copy.
- The `content` slot contains the expandable body.
- The `toggle` slot is optional. If you do not provide custom content for it, the component renders a fallback `wje-icon` chevron.
- State is controlled through the `collapsed` and `expanded` CSS classes. If the item is not initialized with `expanded`, the component automatically adds `collapsed`.

## Events and methods that matter

`wje-accordion-item` dispatches two custom events during interaction:

- `wje-accordion-item:open`
- `wje-accordion-item:close`

Both bubble, so you can listen on the item itself or on the parent `wje-accordion`. The event detail includes at least a reference to the current component in `detail.context`, which is what the wrapper uses when coordinating sibling items.

The component also exposes two practical public methods:

- `expand()` opens the item programmatically,
- `collapse()` closes it programmatically.

That is useful in onboarding flows, wizard steps, or whenever an external control needs to drive the item state.

## Colors, parts, and CSS variables

The item supports color variants through the `color` attribute. The current stylesheets define `primary`, `complete`, `success`, `danger`, `warning`, and `info`.

For detailed styling, the most important shadow parts are:

- `native` – the overall item wrapper,
- `headline` – the clickable header area,
- `description` – the supporting description slot,
- `toggle` – the icon or custom toggle area,
- `content` – the expandable content panel.

The component also relies on CSS custom properties such as `--wje-accordion-background`, `--wje-accordion-border`, `--wje-accordion-background-hover`, `--wje-accordion-border-hover`, `--wje-accordion-background-expanded`, `--wje-accordion-border-expanded`, `--wje-accordion-headline-color`, `--wje-accordion-content-color`, and `--wje-accordion-marker-rotate`. These are especially useful when you need visual customization without changing the markup structure.

## When to use

Use `wje-accordion-item` when you need one compact section with a dedicated header and expandable body, while remaining compatible with grouping inside `wje-accordion`. Typical examples include FAQ entries, setting sections with extra explanation, order-detail panels, or secondary information blocks in admin interfaces.

## When not to use

Do not use it as a generic container when no expand/collapse behavior is needed. It is also not a good fit when all content must remain visible at all times or when interaction is driven by a completely different control than the headline.

## Accessibility

- The headline is keyboard-operable with `Enter` and `Space`.
- The content panel uses `role="region"` and is linked back to the headline through `aria-labelledby`.
- If you embed multiple interactive controls in the headline, verify that their behavior does not conflict with clicking the whole header.

## Best Practices

- Keep the `headline` slot focused on a clear section title rather than a long paragraph.
- Keep `description` concise; longer explanatory content belongs in `content`.
- If you replace the default toggle via the `toggle` slot, preserve a clear affordance that the item expands and collapses.
- When opening or closing items programmatically, keep the parent `wje-accordion` state and event flow in mind.

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

If the autogenerated table below does not capture every useful token, the current implementation is especially worth pairing with `--wje-accordion-background`, `--wje-accordion-border`, `--wje-accordion-background-hover`, `--wje-accordion-border-hover`, `--wje-accordion-background-expanded`, `--wje-accordion-border-expanded`, `--wje-accordion-headline-color`, `--wje-accordion-content-color`, and `--wje-accordion-marker-rotate`.

<CustomProps />

## Slots

<Slots />
