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
  <title>Animation: integrating animations into web applications</title>
  <meta
    name="description"
    content="Element Animation makes it easy to integrate animations into web applications, contributing to the creation of engaging and interactive user interfaces."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Animation makes it easy to integrate animations into web applications, contributing to the creation of engaging and interactive user interfaces. It offers a wide range of customization options, including setting the delay, duration and number of animation repeats.

## Basic usage

import Basic from '@site/static/usage/v1/animation/basic/index.md';

<Basic />


## When to use

Use `wje-animation` when you need a consistent WebJET-based implementation for this UI concern.

## When not to use

Do not stretch the component beyond its responsibility; compose smaller primitives for edge cases.

## Accessibility

Validate keyboard behavior, focus states, contrast, and meaningful labels for interactive elements.

## Best Practices

- Prefer component APIs over direct DOM manipulation.
- Stick to design tokens and naming conventions.
- Test components with realistic data before production rollout.

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
