---
title: 'Card'
---

import Props from '@ionic-internal/component-api/v1/card/props.md';
import Events from '@ionic-internal/component-api/v1/card/events.md';
import Methods from '@ionic-internal/component-api/v1/card/methods.md';
import Parts from '@ionic-internal/component-api/v1/card/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/card/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/card/slots.md';

<head>
  <title>Card | Card format container</title>
  <meta
    name="description"
    content="API documentation for wje-card, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The **Card** element is a flexible and expandable card format container. It allows you to display a wide range of content and consists of a [CardHeader](./card-header) and a [CardContent](./card-content) header.

## Basic usage

import Basic from '@site/static/usage/v1/card/basic/index.md';

<Basic />

## Separator

The separator property is used to display a horizontal separator in the Card Header element.

import Separator from '@site/static/usage/v1/card/separator/index.md';

<Separator />

## Card with picture

import Media from '@site/static/usage/v1/card/media/index.md';

<Media />

## Card with list

import List from '@site/static/usage/v1/card/list/index.md';

<List />

## Styling

### Preset color variants of the element Card

The `color` property adjusts the background and border color of the card. Setting this value will change the button color to one of the colors in the preset color palette. By default, the element has a `primary` background.

import Colors from '@site/static/usage/v1/card/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CssProperties from '@site/static/usage/v1/card/theming/css-properties/index.md';

<CssProperties />

```html
<wje-card id="custom">
  <wje-card-header>
    <wje-card-subtitle>Subtitle</wje-card-subtitle>
    <wje-card-title>Title</wje-card-title>
  </wje-card-header>
  <wje-card-content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </wje-card-content>
</wje-card>
<style>
  #custom {
    --wje-card-margin-top: 1rem;
    --wje-card-margin-bottom: 1rem;
    --wje-card-margin-inline: 1rem;
    --wj-color-contrast: #f0f;
    --wje-card-border-color: #000;
    --wj-border-size: 2px;
    --background-color: #000 !important;
    --wj-font-size: 0.8rem;
    --wj-border-radius: 0;
  }
</style>
```


## When to use

Use `wje-card` to improve readability, scannability, and contextual understanding of content.

## When not to use

Do not replace structured interactive data with media-only presentation when precision is needed.

## Accessibility

Provide alt text, maintain readable contrast, and include text equivalents for icon-only controls.

## Best Practices

- Compress media and use lazy loading in larger collections.
- Keep information priority consistent across cards/lists.
- Avoid duplicating the same meaning in icon and text without added value.

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
