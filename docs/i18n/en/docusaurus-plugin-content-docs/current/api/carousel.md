---
title: Carousel
---

import Props from '@ionic-internal/component-api/v1/carousel/props.md';

import Events from '@ionic-internal/component-api/v1/carousel/events.md';

import Methods from '@ionic-internal/component-api/v1/carousel/methods.md';

import Parts from '@ionic-internal/component-api/v1/carousel/parts.md';

<!-- import CustomProps from '@ionic-internal/component-api/v1/carousel/custom-props.md'; -->

import Slots from '@ionic-internal/component-api/v1/carousel/slots.md';


  <title>Card | Card format container</title>
  <meta name="description" content="Element Card je flexibilný a rozšíriteľný kontajner formátu karty. Umožňuje zobraziť širokú škálu obsahu a skladá sa z hlavičky Card Header, hlavnej časti Card Content a pätičky CardFooter." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The **Card** element is a flexible and expandable card format container. It allows you to display a wide range of content and consists of a header [CardHeader](../card-header) and a main section [CardContent](../card-content).

## Basic use

import Basic from '@site/static/usage/v1/carousel/basic/index.md';

<Basic />

## Paginaton

The separator property is used to display a horizontal separator in the Card Header element.

import Pagination from '@site/static/usage/v1/carousel/pagination/index.md';

<Pagination />

## Card with picture

import Thumbnail from '@site/static/usage/v1/carousel/thumbnail/index.md';

<Thumbnail />

## Card with list

import Spacing from '@site/static/usage/v1/carousel/spacing/index.md';

<Spacing />

## Editing styles

### Preset colour variants of the element Card

The `color` property adjusts the background and border color of the card. Setting this value will change the button color to one of the colors in the preset color palette.  By default, the element has a `primary` background.

import Split from '@site/static/usage/v1/carousel/split/index.md';

<Split />

### CSS Custom Properties

import CssProperties from '@site/static/usage/v1/card/theming/css-properties/index.md';

<CssProperties />

```html
<wj-card id="custom">
  <wj-card-header>
    <wj-card-subtitle>Subtitle</wj-card-subtitle>
    <wj-card-title>Title</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </wj-card-content>
</wj-card>
<style>
  #custom {
    --wj-card-margin-top: 1rem;
    --wj-card-margin-bottom: 1rem;
    --wj-card-margin-inline: 1rem;
    --wj-color-contrast: #f0f;
    --wj-card-border-color: #000;
    --wj-border-size: 2px;
    --background-color: #000!important;
    --wj-font-size: .8rem;
    --wj-border-radius: 0;
  }
</style>
```

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<!-- <CustomProps /> -->

## Slots

<Slots />
