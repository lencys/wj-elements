---
title: Button
---

import Props from '@ionic-internal/component-api/v1/button/props.md';
import Events from '@ionic-internal/component-api/v1/button/events.md';
import Methods from '@ionic-internal/component-api/v1/button/methods.md';
import Parts from '@ionic-internal/component-api/v1/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/button/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/button/slots.md';


  <title>Button | Button</title>
  <meta name="description" content="Tlačidlá sú klikateľný element, ktorý umožnuje zobraziť text, ikonu, prípadne oboje. Tlačidlá si je možné jednoducho prispôsobiť použitím rôznych atribútov a CSS vlastností." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Buttons are a clickable element that allows you to display text, an icon, or both. Buttons can be easily customized using various attributes and CSS properties.

## Basic usage

To use the Button component, include it in the HTML with the required attributes. Adding the `disabled` attribute makes the button inactive and unclickable.

import Basic from '@site/static/usage/v1/button/basic/index.md';

<Basic />

## Toggle

<!-- Vlastnosť `toggle` umožňuje priradiť tlačidlu dva rôzne stavy a kliknutím medzi nimi prepínať. Nastavením jej hodnoty sa tlačidlu priradí predvolený stav. <br/>Musí obsahovať dva podradené elementy so `slot` s hodnotou `toggle`a tiež vlastnosť `state`, ktorou tlačidlu určíte dostupné hodnoty stavu. -->

The `toggle` property allows you to assign two different states to a button and toggle between them with a click. Setting the value assigns a default state to the button. <br/>To set the available states, you need to add two child elements to the button with a `toggle` value slot and also with a `state` property, which determines the actual state value of the button.

import Toggle from '@site/static/usage/v1/button/toggle/index.md';

<Toggle />

## The shape of the button

The `round` property allows you to adjust the shape of the button. By default, the buttons are rectangular with slightly rounded edges. Adding this attribute will increase the roundness of the button.

import Shape from '@site/static/usage/v1/button/shape/index.md';

<Shape />

## Button filling

The `Fill` property specifies the background and border fill of the button. By default, the buttons have a `solid` background. Other options are `link` and `outline`.

import Fill from '@site/static/usage/v1/button/fill/index.md';

<Fill />

## Button size

The `size` property specifies the size of the button. Setting this property will change the internal offset of the button.

import Size from '@site/static/usage/v1/button/size/index.md';

<Size />

## Button icons

Icons can also be displayed in buttons by inserting the `wj-icon` element. You modify their location within the button using the slot attribute and the `start` or `end` property. If the button contains no text and consists of an icon only, use the `icon-only` property.

For more information about icons, see **[Icons](https://www.notion.so/Icon-d49ef040cef84b13b8dd3721d84d5397?pvs=21).**

import Icons from '@site/static/usage/v1/button/icons/index.md';

<Icons />

## Editing styles

### Button colours

The `color` property adjusts the background and border color of the button. Setting this value will change the button color to one of the colors in the preset color palette. By default, the buttons have a `primary` background.

import Colors from '@site/static/usage/v1/button/theming/colors/index.md';

<Colors />

### Colour of the button edges

The `color` property can be combined with the `fill` property.

import Outline from '@site/static/usage/v1/button/outline/index.md';

<Outline />

### CSS Custom Properties

import Custom from '@site/static/usage/v1/button/theming/css-properties/index.md';

<Custom />

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
