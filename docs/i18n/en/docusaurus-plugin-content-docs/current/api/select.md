---
title: 'Select'
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
    content="API documentation for wje-select, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The **Select** element extends the capabilities of the standard HTML select element to provide an enhanced user experience.
It supports both single and multiple option selection using the multiple attribute.
It offers advanced features such as clearable content with the `clearable` attribute, searching through options with `find`, and lazy loading to optimize performance with the `lazy` attribute.
When multiple options are selected, the selected items are displayed as chips with a configurable maximum number of items displayed.
The component also supports dynamic loading of options from external sources via the [**Options**](./select-options) element.

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

## Lazy loading

Adding the `lazy` attribute will load options only when needed. This can be useful for large amounts of options or when loading from external sources.

import Lazy from '@site/static/usage/v1/select/lazy/index.md';

<Lazy />

## Find

Adding the `find` attribute displays an input field that allows the user to search for options in the list. The user can enter text and the list is automatically filtered according to the text entered.

import Find from '@site/static/usage/v1/select/find/index.md';

<Find />

## Lazy search

By combining the `lazy` and `find` attributes, options are only loaded when the user starts typing in the input field. This can be useful for large amounts of options or when loading from external sources.

import Autocomplete from '@site/static/usage/v1/select/lazy-search/index.md';

<Autocomplete />


## When to use

Use `wje-select` when users need to enter values, choose options, or trigger form-related actions.

## When not to use

Do not use it as a decorative element without interaction. Prefer presentational components in that case.

## Accessibility

Always provide a label (`label`/`aria-label`), keep keyboard support, and surface clear validation feedback.

## Best Practices

- Keep validation rules and error behavior consistent across the entire form.
- Show loading or disabled states during async operations.
- Split complex forms into smaller sections with immediate feedback.

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
