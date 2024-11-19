---
title: Select
---

import Props from '@ionic-internal/component-api/v1/select/props.md';
import Events from '@ionic-internal/component-api/v1/select/events.md';
import Methods from '@ionic-internal/component-api/v1/select/methods.md';
import Parts from '@ionic-internal/component-api/v1/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/select/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/select/slots.md';
import { Icon } from '@iconify/react';

<head>
  <title>Select | Element extends the capabilities of the standard HTML select element.</title>
  <meta
    name="description"
    content="Select element rozširuje možnosti štandardného HTML select elementu. Podporuje jeden alebo viacero výberov pridaním atribútu `multiple`.Okrem toho ponúka funkcie, ako sú vymazateľné výbery a vlastný zastupný text (placeholder)."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The **Select** element extends the capabilities of the standard HTML select element. Supports single or multiple selections by adding the `multiple` attribute.
In addition, it offers features such as deletable selections and custom placeholder text. Visually, the component can display the selected options as chips and includes an input field and a drop-down list of options.

## Basic usage

By default, the selection allows the user to select only one option. Including the `Icon` element will also display the selected icon next to the option.

import SingleSelectionExample from '@site/static/usage/v1/select/basic/single-selection/index.md';

<SingleSelectionExample />

## Selecting multiple items

Adding the `multiple` attribute allows the user to select multiple options.

import MultipleSelectionExample from '@site/static/usage/v1/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## Clearable

Adding the `clearable` attribute allows the user to remove all selected options by clicking on the <Icon icon="radix-icons:cross-2" height="14" /> icon.

import Clearable from '@site/static/usage/v1/select/clearable/index.md';

<Clearable />

## Disabled

Adding the `disabled` attribute prevents the user from interacting with Select.

import Disabled from '@site/static/usage/v1/select/disabled/index.md';

<Disabled />

## Dynamic list of options

Using the Options component, a dynamically generated list of options is also supported, which is asynchronously retrieved from the specified URL.

import Options from '@site/static/usage/v1/select/options/index.md';

<Options />

## Standard

Adding the `standard` attribute will display the Select in the style of a standard HTML Select.

import Standard from '@site/static/usage/v1/select/standard/index.md';

<Standard />

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
