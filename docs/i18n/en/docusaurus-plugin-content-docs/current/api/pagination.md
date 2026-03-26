---
title: 'Pagination'
---

import Props from '@ionic-internal/component-api/v1/pagination/props.md';
import Events from '@ionic-internal/component-api/v1/pagination/events.md';
import Methods from '@ionic-internal/component-api/v1/pagination/methods.md';
import Parts from '@ionic-internal/component-api/v1/pagination/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/pagination/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/pagination/slots.md';

<head>
  <title>Pagination | Pagination component in applications</title>
  <meta
    name="description"
    content="API documentation for wje-pagination, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

The `Pagination` component is used to display pagination in applications. It allows users to navigate between different pages of content, improving the user experience when browsing large amounts of data.

## Basic use

This example presents the simplest pagination with default controls and page display.

import Basic from '@site/static/usage/v1/pagination/basic/index.md';

<Basic />

## Max pages

This example limits how many page links stay visible at once, making it easier to see how long paginations are condensed.

import MaxPages from '@site/static/usage/v1/pagination/max-pages/index.md';

<MaxPages />

## Round

This example changes the shape of pagination controls to a round variant, which alters the overall visual tone.

import Round from '@site/static/usage/v1/pagination/round/index.md';

<Round />

## First, Last Buttons

This example focuses on the button-style pagination pattern where previous and next actions are visually dominant.

import Buttons from '@site/static/usage/v1/pagination/buttons/index.md';

<Buttons />

## Show info

This example adds textual pagination state, such as the current page or result range, next to the controls.

import Info from '@site/static/usage/v1/pagination/info/index.md';

<Info />


## When to use

Use `wje-pagination` when users need to enter values, choose options, or trigger form-related actions.

## When not to use

Do not use it as a decorative element without interaction. Prefer presentational components in that case.

## Accessibility

Always provide a label (`label`/`aria-label`), keep keyboard support, and surface clear validation feedback.

## Best Practices

- Keep validation rules and error behavior consistent across the entire form.
- Show loading or disabled states during async operations.
- Split complex forms into smaller sections with immediate feedback.

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
