---
title: 'ButtonGroup'
---

import Props from '@ionic-internal/component-api/v1/button-group/props.md';
import Events from '@ionic-internal/component-api/v1/button-group/events.md';
import Methods from '@ionic-internal/component-api/v1/button-group/methods.md';
import Parts from '@ionic-internal/component-api/v1/button-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/button-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/button-group/slots.md';

<head>
  <title>ButtonGroup: element for grouping buttons</title>
  <meta
    name="description"
    content="ButtonGroup is used to group Button and Dropdown elements into more functional units, which will be automatically styled and arranged when inserted inside the element."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

ButtonGroup is used to group [Button](./button) and [Dropdown](./dropdown) elements into more functional units, which will be automatically styled and arranged when inserted inside the element.

## Basic usage

Add a `wje-button-group` element to the HTML with the desired attributes and include the desired Button or Dropdown elements inside it.

import Basic from '@site/static/usage/v1/button-group/basic/index.md';

<Basic />

## ButtonGroup shape

This example compares how grouped buttons behave with different shapes while still reading as one connected control.

import Shape from '@site/static/usage/v1/button-group/shape/index.md';

<Shape />

## ButtonGroup with Dropdown

This example combines a standard button and a dropdown inside one group. It is a common pattern for a primary action with secondary options.

import Dropdown from '@site/static/usage/v1/button-group/dropdown/index.md';

<div className="large">

<Dropdown />

</div>

## Icons in ButtonGroup

This example focuses on icon usage inside a button group so you can check height, rhythm, and alignment across grouped controls.

import Icons from '@site/static/usage/v1/button-group/icons/index.md';

<Icons />

## Split buttons

ButtonGroup also allows you to display a split button with multiple functions.

import SplitButtons from '@site/static/usage/v1/button-group/split-buttons/index.md';

<div className="large">

<SplitButtons />

</div>

## Styling

### ButtonGroup colors

This example compares semantic color variants across the whole button group so it is easier to judge how grouped actions read in different states.

import Colors from '@site/static/usage/v1/button-group/colors/index.md';

<Colors />

### Border color in ButtonGroup

This example shows outline color variants in a button group. It is useful when you want a lighter visual treatment without losing semantic meaning.

import ColorsOutline from '@site/static/usage/v1/button-group/colors-outline/index.md';

<ColorsOutline />


## When to use

Use `wje-button-group` when you need a consistent WebJET-based implementation for this UI concern.

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
