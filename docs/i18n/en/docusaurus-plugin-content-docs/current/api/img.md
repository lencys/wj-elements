---
title: 'Image'
---

import Props from '@ionic-internal/component-api/v1/image/props.md';
import Events from '@ionic-internal/component-api/v1/image/events.md';
import Methods from '@ionic-internal/component-api/v1/image/methods.md';
import Parts from '@ionic-internal/component-api/v1/image/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/image/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/image/slots.md';

<head>
  <title>Image Element | Image Display Element</title>
  <meta
    name="description"
    content="Element Image pridáva obrázkom funkciu lazyload a počas načítavania zobrazuje zástupnú ikonu (placeholder) v podobe animovaného obrázka."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Image element is used to display images. Adds lazyload function to images and displays a placeholder icon (loader) in the form of an animated image during loading.

It uses the Intersection Observer API, so it only loads images when they are visible in the browser window. This reduces network load and improves site performance.

## Basic Usage

import Basic from '@site/static/usage/v1/img/basic/index.md';

<Basic />

## Fallout

The `Fallout` attribute specifies the action to be taken in the event of an error when loading the image. Možné hodnoty sú `delete` (odstráni sa obrázok) alebo `log` (vypíše chybu do konzoly).

### Fallout - Delete (delete)

The `fallout` attribute with the value `"delete"` causes the element to be removed if an error occurred while loading the image.

import FalloutDelete from '@site/static/usage/v1/img/fallout-delete/index.md';

<FalloutDelete />

### Fallout - Log

The `fallout` attribute with value `"log"` causes the element to be removed if an error occurred while loading the image.

import FalloutLog from '@site/static/usage/v1/img/fallout-log/index.md';

<FalloutLog />

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
