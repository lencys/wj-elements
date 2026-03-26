---
title: 'Animation'
---

import Props from '@ionic-internal/component-api/v1/animation/props.md';
import Events from '@ionic-internal/component-api/v1/animation/events.md';
import Methods from '@ionic-internal/component-api/v1/animation/methods.md';
import Parts from '@ionic-internal/component-api/v1/animation/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/animation/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/animation/slots.md';

<head>
  <title>Animation: animating the first slotted element with Animate.css</title>
  <meta
    name="description"
    content="The wje-animation component wraps one main element, loads keyframes from Animate.css, and plays them through the Web Animations API with optional imperative control."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-animation` is a lightweight wrapper for playing Animate.css animations around slotted content. It loads keyframes, applies them to the first element in the default slot, and plays them through the Web Animations API.

## Basic usage

The example below wraps a `wje-avatar` in `wje-animation` and shows both basic animation setup through the `name` attribute and imperative control through `play()` and `cancel()`.

import Basic from '@site/static/usage/v1/animation/basic/index.md';

<Basic />

## Things to keep in mind

- The animation is applied to the first assigned element from the default slot, so it works best with one main wrapper.
- The default animation name is `heartBeat`.
- The current implementation uses `endDelay` and `iterationStart` as camelCase attribute names.
- The host itself is not interactive; it sets `role="presentation"`.
- Use `getAnimationsArray()` when you need to surface the available animation names in your own UI.

## When to use

Use `wje-animation` when you want to add focused motion to one specific element such as an avatar, badge, notification, or status indicator.

## When not to use

Do not use it for complex multi-element timelines or when motion adds no information to the UI.

## Accessibility

- Animation should support meaning, not replace it.
- In important flows, consider reduced-motion behavior.
- If the animated content is interactive, accessibility is handled by the slotted child.

## Best Practices

- Use `play()` and `cancel()` for repeated control.
- If you change `name` at runtime, verify that the component refreshes correctly in your specific use case.
- For long-running or infinite animations, evaluate both distraction and performance, especially inside lists.

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
