---
title: SplitView
---

import Props from '@ionic-internal/component-api/v1/split-view/props.md';
import Events from '@ionic-internal/component-api/v1/split-view/events.md';
import Methods from '@ionic-internal/component-api/v1/split-view/methods.md';
import Parts from '@ionic-internal/component-api/v1/split-view/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/split-view/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/split-view/slots.md';

<head>
  <title>SplitView | individual options within the Select component</title>
  <meta
    name="description"
    content="Element Option predstavuje jednotlivé voliteľné možnosti v rámci komponentu Select. Je obdobný štandardnému elementu HTML select a umožňuje používateľom vykonať jeden alebo viacero výberov na základe konfigurácie komponentu Select."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Split view element is a versatile component that allows you to create a split view with two or more sections. Provides a divider slider that allows you to dynamically resize sections. Two orientations are supported - vertical and horizontal, and nesting another SplitView to create more complex views.

## Basic usage

import Basic from '@site/static/usage/v1/split-view/basic/index.md';

<Basic />

## Vertical SplitView

Two orientations are supported. Add the `vertical` attribute to display a vertical SplitView.

import Vertical from '@site/static/usage/v1/split-view/vertical/index.md';

<Vertical />

## Min/Max

Adding the `min` and `max` properties with values `"0"` to `"100"` will limit the range of motion of the separator.

import MinMax from '@site/static/usage/v1/split-view/min-max/index.md';

<MinMax />

## Disabled

Adding the `disabled` attribute disables the ability to scroll the separator.

import Disabled from '@site/static/usage/v1/split-view/disabled/index.md';

<Disabled />

## Nested SplitView

By nesting another SplitView, more complex views can be created.

import Split from '@site/static/usage/v1/split-view/split/index.md';

<Split />

## Editing styles

import Custom from '@site/static/usage/v1/split-view/custom/index.md';

<Custom />

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
