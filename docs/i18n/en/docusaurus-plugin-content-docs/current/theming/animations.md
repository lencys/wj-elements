---
title: Animation
---

<head>
  <title>Animations | Working with the wje-animation component</title>
  <meta
    name="description"
    content="The wje-animation component uses Animate.css and the Web Animations API to animate slotted content with minimal setup."
  />
</head>

The `<wje-animation>` component makes it easy to animate content without manually assembling keyframes or working directly with the Web Animations API. Internally it loads definitions from [Animate.css](https://animate.style/) and applies them to the first slotted element.

The most useful attributes are:

- `name` – the Animate.css animation name, for example `heartBeat`,
- `duration` – duration in milliseconds,
- `delay` – delay before the animation starts,
- `endDelay` – delay after the animation ends,
- `iterations` – how many times the animation should repeat,
- `direction`, `easing`, `fill` – fine-grained playback options.

:::note
Animation names are case-sensitive. The component’s default is `heartBeat`, so use Animate.css names exactly as defined.
:::

import Basic from '@site/static/usage/v1/animation/basic/index.md';

<Basic />

## Practical tips

- Place a single main element inside `<wje-animation>` that should be animated.
- If you need imperative control, use the `play()` and `cancel()` methods.
- If you want to let users pick an animation, use `getAnimationsArray()` to obtain the list of available animation names.

For the full list of attributes and methods, continue to the [Animation API page](../api/animation.md).
