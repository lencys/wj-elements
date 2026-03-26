---
title: 'List'
---

import Props from '@ionic-internal/component-api/v1/list/props.md';
import Events from '@ionic-internal/component-api/v1/list/events.md';
import Methods from '@ionic-internal/component-api/v1/list/methods.md';
import Parts from '@ionic-internal/component-api/v1/list/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/list/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/list/slots.md';

<head>
  <title>List | List of items display component</title>
  <meta
    name="description"
    content="API documentation for wje-list, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `List` component is composed of multiple [Item](./item) elements and can contain text, buttons, toggles, icons, thumbnails, and other supporting UI. It works best when related content needs a shared visual structure and spacing.

## Basic usage

This example presents the list as a basic container for multiple items with consistent rhythm and spacing.

import Basic from '@site/static/usage/v1/list/basic/index.md';

<Basic />

## Inset

Setting the value of the inset property to true adds a margin to the element's surroundings to create a nested list.

import Inset from '@site/static/usage/v1/list/inset/index.md';

<Inset />

## Line separation

The `lines` property controls the separators between list items. Setting it to `none` removes the borders between list entries.

import Lines from '@site/static/usage/v1/list/lines/index.md';

<Lines />

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
