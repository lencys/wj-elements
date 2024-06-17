---
title: Menu
---

import Props from '@ionic-internal/component-api/v1/menu/props.md';
import Events from '@ionic-internal/component-api/v1/menu/events.md';
import Methods from '@ionic-internal/component-api/v1/menu/methods.md';
import Parts from '@ionic-internal/component-api/v1/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/menu/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/menu/slots.md';

<head>
  <title>Menu | Element to display the menu</title>
  <meta name="description" content="Menu element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a zobrazí sa pridaním atribútu `active` napríklad po kliknutí na tlačidlo." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The menu element is used to display the navigation. It is hidden by default and is displayed by adding the `active` attribute, for example, when a button is clicked. It consists of [MenuItem.](../menu-item) elements.

## Basic usage

import BasicUsage from '@site/static/usage/v1/menu/basic/index.md';

<div className="xxxlarge">

<BasicUsage />

</div>

## Inset

import Inset from '@site/static/usage/v1/menu/inset/index.md';

<div className="xxxlarge">

<Inset />

</div>

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
