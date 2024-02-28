---
title: Slider
---

import Props from '@ionic-internal/component-api/v1/slider/props.md';
import Events from '@ionic-internal/component-api/v1/slider/events.md';
import Methods from '@ionic-internal/component-api/v1/slider/methods.md';
import Parts from '@ionic-internal/component-api/v1/slider/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/slider/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/slider/slots.md';


  <title>Slider | Element extends the capabilities of the standard HTML select element.</title>
  <meta name="description" content="Slider je interaktívny komponent posuvníka, ktorý umožňuje používateľom praktickým spôsobom vybrať hodnotu z rozsahu hodnôt." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Slider is an interactive slider component that allows users to select a value from a range of values in a convenient way. It features a handle that can be moved, making it ideal for those scenarios that require the user to provide numeric input or adjust some setting such as volume.

## Basic Usage

By default, the selection allows the user to select only one option. Including the `Icon` element will also display the selected icon next to the option.

import Basic from '@site/static/usage/v1/slider/basic/index.md';

<Basic />

## Bubble

Adding the bubble attribute will display a bubble above the slider with a number representing the current value of the slider.

import Bubble from '@site/static/usage/v1/slider/bubble/index.md';

<Bubble />

## Label

import Label from '@site/static/usage/v1/slider/label/index.md';

<Label />

## Icons

import Icons from '@site/static/usage/v1/slider/icons/index.md';

<Icons />

## Color

import Colors from '@site/static/usage/v1/slider/colors/index.md';

<Colors />

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
