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
    content="ButtonGroup slúži na zoskupovanie elementov Button, ktoré budú po vložení do vnútra elementu automaticky naštýlované a usporiadané."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

ButtonGroup is used to group [Button](../button) and [Dropdown](../dropdown) elements into more functional units, which will be automatically styled and arranged when inserted inside the element.

## Basic usage

Add a `wj-button-group` element to the HTML with the desired attributes and include the desired Button or Dropdown elements inside it.

import Basic from '@site/static/usage/v1/button-group/basic/index.md';

<Basic />

## ButtonGroup shape

import Shape from '@site/static/usage/v1/button-group/shape/index.md';

<Shape />

## ButtonGroup with Dropdown

import Dropdown from '@site/static/usage/v1/button-group/dropdown/index.md';

<div className="large">

<Dropdown />

</div>

## Icons in ButtonGroup

import Icons from '@site/static/usage/v1/button-group/icons/index.md';

<Icons />

## Split buttons

ButtonGroup also allows you to display a split button with multiple functions.

import SplitButtons from '@site/static/usage/v1/button-group/split-buttons/index.md';

<div className="large">

<SplitButtons />

</div>

## Editing styles

### ButtonGroup colors

import Colors from '@site/static/usage/v1/button-group/colors/index.md';

<Colors />

### Border color in ButtonGroup

import ColorsOutline from '@site/static/usage/v1/button-group/colors-outline/index.md';

<ColorsOutline />

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
