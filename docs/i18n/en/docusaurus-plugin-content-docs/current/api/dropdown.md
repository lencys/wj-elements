---
title: 'Dropdown'
---

import Props from '@ionic-internal/component-api/v1/dropdown/props.md';
import Events from '@ionic-internal/component-api/v1/dropdown/events.md';
import Methods from '@ionic-internal/component-api/v1/dropdown/methods.md';
import Parts from '@ionic-internal/component-api/v1/dropdown/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/dropdown/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/dropdown/slots.md';

<head>
  <title>Dropdown | WebJET Element to display the context menu</title>
  <meta
    name="description"
    content="Dropdown element slúži na zobrazenie kontextového menu po kliknutí. Menu möže obsahovať aj ikony."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Dropdown element is used to display the context menu after clicking the button. Allows the user to select one of the predefined options. It contains a [Button](../button) element that acts as an activator and a [Menu](../menu) element with content in the form of individual [MenuItem.](../menu-item) items.

## Basic usage

import Basic from '@site/static/usage/v1/dropdown/basic/index.md';

<Basic />

## Dropdown with dialogue

import OpenDialog from '@site/static/usage/v1/dropdown/open-dialog/index.md';

<OpenDialog />

## Display on hover

import Hover from '@site/static/usage/v1/dropdown/hover/index.md';

<Hover />

## Dropdown with tooltip

import Tooltip from '@site/static/usage/v1/dropdown/tooltip/index.md';

<Tooltip />

## Dropdown with avatar

import Avatar from '@site/static/usage/v1/dropdown/inner-avatar/index.md';

<Avatar />

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
