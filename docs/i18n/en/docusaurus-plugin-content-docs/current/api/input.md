---
title: 'Input'
---

import Props from '@ionic-internal/component-api/v1/input/props.md';
import Events from '@ionic-internal/component-api/v1/input/events.md';
import Methods from '@ionic-internal/component-api/v1/input/methods.md';
import Parts from '@ionic-internal/component-api/v1/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/input/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/input/slots.md';

<head>
  <title>Input: extension of the standard Input element</title>
  <meta
    name="description"
    content="Input element extends the capabilities of standard HTML input with advanced features and customization options."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Input element extends the capabilities of standard HTML input with advanced features and customization options.

## Basic usage

import Basic from '@site/static/usage/v1/input/basic/index.md';

<div className="xxlarge">

{' '} <Basic />

</div>

## Use in the form

import Form from '@site/static/usage/v1/input/form/index.md';

<Form />

## Variant: standard

Input also supports the visual of standard HTML input by adding the `variant` property with the value `standard`.

import Standard from '@site/static/usage/v1/input/standard/index.md';

<Standard />

## Standard in the form

import StandardForm from '@site/static/usage/v1/input/standard-form/index.md';

<StandardForm />

## Search

In combination with the `Button` elementorm, it creates a full-featured search box.

import Search from '@site/static/usage/v1/input/search/index.md';

<div className="small">

<Search />

</div>

## Pickers

In combination with the `Button` elementorm, it creates a full-featured search box.

import Pickers from '@site/static/usage/v1/input/pickers/index.md';

<Pickers />

## Clearable

In combination with the `Button` elementorm, it creates a full-featured search box.

import Clearable from '@site/static/usage/v1/input/clearable/index.md';

<Clearable />


## When to use

Use `wje-input` when users need to enter values, choose options, or trigger form-related actions.

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
