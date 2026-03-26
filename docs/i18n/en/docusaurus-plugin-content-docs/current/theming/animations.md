---
title: Animation
---

<head>
  <title>Animations | Working with the wje-animation component</title>
  <meta
    name="description"
    content="The wje-animation component uses Animate.css and the Web Animations API to animate the first slotted element without manually building keyframes."
  />
</head>

The `<wje-animation>` component makes it easy to animate a single slotted element without manually assembling keyframes. Internally it loads definitions from [Animate.css](https://animate.style/) and plays them through the Web Animations API.

The most useful attributes are:

- `name` – the Animate.css animation name, for example `heartBeat`,
- `duration` – duration in milliseconds,
- `delay` – delay before the animation starts,
- `endDelay` – delay after the animation ends,
- `iterations` – how many times the animation should repeat,
- `direction`, `easing`, `fill`, `iterationStart` – more detailed playback control.

:::note
Animation names are case-sensitive. The current implementation defaults to `heartBeat`, so use Animate.css names exactly as defined. Also note that `endDelay` and `iterationStart` are currently written as camelCase attribute names.
:::

## Basic example

The example below combines declarative setup through attributes with imperative control through `play()`, `cancel()`, and loading the available animation names through `getAnimationsArray()`.

import Basic from '@site/static/usage/v1/animation/basic/index.md';

<Basic />

## Practical tips

- Place one primary element inside `<wje-animation>`.
- If you need imperative control, use the `play()` and `cancel()` methods.
- If you want users to choose an animation, call `getAnimationsArray()` and surface the names through your own UI.
- For long-running or infinite animations, evaluate both distraction and performance, especially in lists and dashboards.

For the full list of attributes and methods, continue to the [Animation API page](../api/animation.md).
