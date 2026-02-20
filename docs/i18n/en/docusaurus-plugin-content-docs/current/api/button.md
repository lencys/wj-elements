---
title: 'Button'
---

import Props from '@ionic-internal/component-api/v1/button/props.md';
import Events from '@ionic-internal/component-api/v1/button/events.md';
import Methods from '@ionic-internal/component-api/v1/button/methods.md';
import Parts from '@ionic-internal/component-api/v1/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/button/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/button/slots.md';

<head>
  <title>Button | Button</title>
  <meta
    name="description"
    content="API documentation for wje-button, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Buttons are a clickable element that allows you to display text, an icon, or both. Buttons can be easily customized using various attributes and CSS properties.

## Basic usage

To use the Button component, include it in the HTML with the required attributes. Adding the `disabled` attribute makes the button inactive and unclickable.

import Basic from '@site/static/usage/v1/button/basic/index.md';

<Basic />

## Tooltip

The `tooltip` property allows you to display a text description of the button when the mouse is moved over it. To display the text, you need to add a `tooltip` attribute to the button with the text content.
By adding the `tooltip-placement` attribute it is possible to specify the position of the text display.

import Tooltip from '@site/static/usage/v1/button/tooltip/index.md';

<Tooltip />

## Toggle

The `toggle` property allows you to assign two different states to a button and toggle between them with a click. Setting the value assigns a default state to the button. <br/>To set the available states, you need to add two child elements to the button with a `toggle` value slot and also with a `state` property, which determines the actual state value of the button.

import Toggle from '@site/static/usage/v1/button/toggle/index.md';

<Toggle />

## Caret

The `caret` property allows you to display an arrow on the button. To display the arrow, you need to add the `caret` attribute to the button.

import Caret from '@site/static/usage/v1/button/caret/index.md';

<Caret />

## Button Shape

The `round` property allows you to adjust the shape of the button. By default, the buttons are rectangular with slightly rounded edges. Adding this attribute will increase the roundness of the button.

import Shape from '@site/static/usage/v1/button/shape/index.md';

<Shape />

## Form button

The `submit` and `reset` properties allow you to use the button to submit or reset the form. A button with the `submit` property sends the form that is linked to it. A button with the `reset` property will reset all form values.

import FormButton from '@site/static/usage/v1/button/form-button/index.md';

<FormButton />

## Button Fill

The `Fill` property specifies the background and border fill of the button. By default, the buttons have a `solid` background. Other options are `link` and `outline`.

import Fill from '@site/static/usage/v1/button/fill/index.md';

<Fill />

## Button size

The `size` property specifies the size of the button. Setting this property will change the internal offset of the button.

import Size from '@site/static/usage/v1/button/size/index.md';

<Size />

## Button icons

Icons can also be displayed in buttons by inserting the `wje-icon` element. You modify their location within the button using the slot attribute and the `start` or `end` property. If the button contains no text and consists of an icon only, use the `icon-only` property.

For more information about icons, see **[Icons](https://www.notion.so/Icon-d49ef040cef84b13b8dd3721d84d5397?pvs=21).**

import Icons from '@site/static/usage/v1/button/icons/index.md';

<Icons />

## Styling

### Button colors

The `color` property adjusts the background and border color of the button. Setting this value will change the button color to one of the colors in the preset color palette. By default, the buttons have a `primary` background.

import Colors from '@site/static/usage/v1/button/theming/colors/index.md';

<Colors />

### Button edge color

The `color` property can be combined with the `fill` property.

import Outline from '@site/static/usage/v1/button/outline/index.md';

<Outline />

### CSS Custom Properties

import Custom from '@site/static/usage/v1/button/theming/css-properties/index.md';

<Custom />


## When to use

Use `wje-button` when you need a consistent WebJET-based implementation for this UI concern.

## When not to use

Do not stretch the component beyond its responsibility; compose smaller primitives for edge cases.

## Accessibility

Validate keyboard behavior, focus states, contrast, and meaningful labels for interactive elements.

## Best Practices

- Prefer component APIs over direct DOM manipulation.
- Stick to design tokens and naming conventions.
- Test components with realistic data before production rollout.

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
