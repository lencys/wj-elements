---
title: TabGroup
---

import Props from '@ionic-internal/component-api/v1/tab-group/props.md';
import Events from '@ionic-internal/component-api/v1/tab-group/events.md';
import Methods from '@ionic-internal/component-api/v1/tab-group/methods.md';
import Parts from '@ionic-internal/component-api/v1/tab-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/tab-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/tab-group/slots.md';


  <title>TabGroup | Tab-based navigation</title>
  <meta name="description" content="TabGroup zobrazuje navigáciu založenú na záložkách, ktorá umožňuje používateľom prepínať sa a zobrazovať rôzne časti obsahu aplikácie bez potreby prechádzať na inú stránku." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

TabGroup displays a tab-based navigation that allows users to switch between and view different parts of the application's content without having to navigate to another page. It consists of individual tabs [Tab](tab.md) and [Panels](tab-panel.md), which when clicked display the contents of the tab.
The TabGroup element supports multiple appearance variants using the `variant` attribute.

## Basic use

The `Card` element has been used only for the purpose of this demonstration.

import Basic from '@site/static/usage/v1/tab-group/basic/index.md';

<Basic />

## Variants of tab placement

By adding the `variant` property it is possible to change the location of the tabs. Supported values are `start`, `end` and `bottom`.

### Start

import Start from '@site/static/usage/v1/tab-group/start/index.md';

<Start />

### End

import End from '@site/static/usage/v1/tab-group/end/index.md';

<End />

### Bottom

import Bottom from '@site/static/usage/v1/tab-group/bottom/index.md';

<Bottom />

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
