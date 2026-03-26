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

`wje-accordion-item` is the actual interactive section inside `wje-accordion`. It handles headline clicks, state switching, ARIA wiring between the headline and content panel, the fallback toggle icon, and the open or close events.

## Basic usage inside a group

The example below uses a single item inside `wje-accordion` so it is clear where the `headline`, `description`, and `content` slots belong. The headline can contain more than plain text, including supporting or action components.

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## Things To Keep In Mind

- The `headline` slot becomes the clickable header. After rendering, the component assigns `role="button"`, `tabindex="0"`, `aria-controls`, and `aria-expanded`.
- The `description` slot adds supporting text in the header and `content` holds the expandable panel body.
- The `toggle` slot is optional. If you do not provide one, the component renders a fallback `wje-icon` chevron.
- `wje-accordion-item:open` and `wje-accordion-item:close` bubble to the parent `wje-accordion`.
- Programmatic open and close behavior is exposed through `expand()` and `collapse()`.
- Color variants are applied through the `color` attribute, while detailed styling is handled through shadow parts and CSS custom properties.

## Accessibility

- The headline is keyboard-operable with `Enter` and `Space`.
- The content panel uses `role="region"` and is linked back to the headline through `aria-labelledby`.
- If you embed multiple interactive controls in the headline, verify that their behavior does not conflict with clicking the whole header.

## Best Practices

- Keep the `headline` slot focused on a clear section title rather than a long paragraph.
- Keep `description` concise; longer explanatory content belongs in `content`.
- If you replace the default toggle via the `toggle` slot, preserve a clear affordance that the item expands and collapses.
- When opening or closing items programmatically, keep the parent `wje-accordion` state in mind.

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
