---
title: 'TabGroup'
---

import Props from '@ionic-internal/component-api/v1/tab-group/props.md';
import Events from '@ionic-internal/component-api/v1/tab-group/events.md';
import Methods from '@ionic-internal/component-api/v1/tab-group/methods.md';
import Parts from '@ionic-internal/component-api/v1/tab-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/tab-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/tab-group/slots.md';

<head>
  <title>TabGroup | Tab-based navigation</title>
  <meta
    name="description"
    content="TabGroup displays a tab-based navigation that allows users to switch between and view different parts of the application's content without having to navigate to another page."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

TabGroup displays a tab-based navigation that allows users to switch between and view different parts of the application's content without having to navigate to another page. It consists of individual tabs [Tab](tab.md) and [Panels](tab-panel.md), which when clicked display the contents of the tab.
The TabGroup element supports multiple appearance variants using the `variant` attribute.

## Basic usage

The `Card` element has been used only for the purpose of this demonstration.

import Basic from '@site/static/usage/v1/tab-group/basic/index.md';

<Basic />

## Variants of tab placement

By adding the `variant` property it is possible to change the location of the tabs. Supported values are `start`, `end` and `bottom`.

### Start

This example aligns tabs to the start, which is useful for shorter tab sets and conventional desktop layouts.

import Start from '@site/static/usage/v1/tab-group/start/index.md';

<Start />

### End

This example aligns tabs to the end of the container so you can compare the visual rhythm with the default placement.

import End from '@site/static/usage/v1/tab-group/end/index.md';

<End />

### Bottom

This example moves tab navigation to the bottom edge, which can work well in mobile or app-like patterns.

import Bottom from '@site/static/usage/v1/tab-group/bottom/index.md';

<Bottom />


## When to use

Use `wje-tab-group` when users need to understand location, move between views, or traverse hierarchy.

## When not to use

Do not combine multiple competing navigation patterns for the same user flow.

## Accessibility

Ensure visible active/selected states, predictable tab order, and clear control naming.

## Best Practices

- Keep URL state and UI navigation state synchronized.
- Use consistent labels across menu, breadcrumbs, and tabs.
- Add context for deep structures (breadcrumbs, headings, icon cues).

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
