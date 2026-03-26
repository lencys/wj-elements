---
title: 'Menu'
---

import Props from '@ionic-internal/component-api/v1/menu/props.md';
import Events from '@ionic-internal/component-api/v1/menu/events.md';
import Methods from '@ionic-internal/component-api/v1/menu/methods.md';
import Parts from '@ionic-internal/component-api/v1/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/menu/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/menu/slots.md';

<head>
  <title>Menu | Element to display the menu</title>
  <meta
    name="description"
    content="API documentation for wje-menu, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The menu element is used to display navigation. It is hidden by default and is shown by adding the `active` attribute, for example after a trigger click. The [MenuItem](./menu-item) and [MenuLabel](./menu-label) components are designed specifically for composing menu content.

## Basic usage

This example shows a basic menu with the most common item hierarchy and default spacing.

import Basic from '@site/static/usage/v1/menu/basic/index.md';

<Basic />

## Inset

This example adds inner padding to the menu so it does not feel attached directly to the container edges.

import Inset from '@site/static/usage/v1/menu/inset/index.md';

<Inset />

## Variant: Megamenu

This example switches the menu to a megamenu variant suited to wider navigation structures and denser content.

import Megamenu from '@site/static/usage/v1/menu/megamenu/index.md';

<Megamenu />

## Variant: Nav

This example uses the navigation-oriented menu variant, which is a better fit for moving between sections of an app or site.

import Nav from '@site/static/usage/v1/menu/nav/index.md';

<Nav />

## Collapse

The `collapse` attribute displays the menu in collapsed state. In this state, the menu is collapsed and only the icon is displayed.

import Collapse from '@site/static/usage/v1/menu/collapse/index.md';

<Collapse />

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
