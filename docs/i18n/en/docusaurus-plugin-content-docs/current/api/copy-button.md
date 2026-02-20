---
title: 'Copy button'
---

import Props from '@ionic-internal/component-api/v1/copy-button/props.md';
import Events from '@ionic-internal/component-api/v1/copy-button/events.md';
import Methods from '@ionic-internal/component-api/v1/copy-button/methods.md';
import Parts from '@ionic-internal/component-api/v1/copy-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/copy-button/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/copy-button/slots.md';

<head>
  <title>Copy button | Copy to clipboard in one click</title>
  <meta
    name="description"
    content="API documentation for wje-copy-button, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Copy button allows you to copy the desired content to the clipboard with one click. Supported elements are `input`, `textarea`, `wje-input`, `wje-label` and `a` element.

## Basic usage

import Basic from '@site/static/usage/v1/copy-button/basic/index.md';

<Basic />

## Custom label

Adding the `label` and `label-success` properties will change the tooltip text after copying the value.

import CustomLabel from '@site/static/usage/v1/copy-button/custom-label/index.md';

<CustomLabel />

## Element

import Element from '@site/static/usage/v1/copy-button/element/index.md';

<Element />

## Input

import Input from '@site/static/usage/v1/copy-button/input/index.md';

<Input />

## WJE-Input

import WJInput from '@site/static/usage/v1/copy-button/wj-input/index.md';

<WJInput />

## Hyperlink

import Hyperlink from '@site/static/usage/v1/copy-button/hyperlink/index.md';

<Hyperlink />


## When to use

Use `wje-copy-button` when users need to enter values, choose options, or trigger form-related actions.

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
