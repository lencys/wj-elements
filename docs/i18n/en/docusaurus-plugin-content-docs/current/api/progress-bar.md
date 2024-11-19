---
title: Progress bar
---

import Props from '@ionic-internal/component-api/v1/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v1/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v1/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v1/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/progress-bar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/progress-bar/slots.md';

<head>
  <title>Progress Bar | Progress visualization component</title>
  <meta
    name="description"
    content="Progress Bar element je komponent navrhnutý na vizualizáciu priebehu. Ponúka možnosť vytvárať prispôsobiteľné kruhové alebo rovné ukazovatele s rôznymi možnosťami konfigurácie."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Progress Bar element is a component designed to visualize progress. It offers the ability to create customizable circular or straight indicators with different configuration options.

## Basic usage

To use the Progress Bar component, include it in the HTML with the required attributes. The progress attribute sets the percentage value of the progress in the progress bar.

import Basic from '@site/static/usage/v1/progress-bar/basic/index.md';

<Basic />

## Type

Two types of progress bars are supported. Add the `type` property with the value `"circle"` to display a progress bar with a circular design.

import Type from '@site/static/usage/v1/progress-bar/type/index.md';

<Type />

## Label

To display labels at the progress bar, it is necessary to insert a `Label` element inside it and define its position by adding the `slot` attribute with the value `"start"` or `"end"`.

import Label from '@site/static/usage/v1/progress-bar/label/index.md';

<Label />

## Linecap

Add the `linecap` property with the value `"round"` to display a progress bar with a rounded end.

import Linecap from '@site/static/usage/v1/progress-bar/linecap/index.md';

<Linecap />

## Radius

The radius attribute determines the diameter of the round progress bar.

import Radius from '@site/static/usage/v1/progress-bar/radius/index.md';

<Radius />

## Stroke

The stroke attribute defines the width of the progress bar in pixels.

import Stroke from '@site/static/usage/v1/progress-bar/stroke/index.md';

<Stroke />

## Progress bar with picture

To display an image inside an element, you need to wrap the image in the progress bar of the element.

import Images from '@site/static/usage/v1/progress-bar/image/index.md';

<Images />

## Color variants of the progress bar

The `color` property modifies the color of the element. By default, the element has the color `dark`. Setting this value changes the element color to one of the colors of the preset color palette.

import Colors from '@site/static/usage/v1/progress-bar/colors/index.md';

<Colors />

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
