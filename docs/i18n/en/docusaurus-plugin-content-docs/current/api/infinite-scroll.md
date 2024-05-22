---
title: Infinite-scroll
---

import Props from '@ionic-internal/component-api/v1/infinite-scroll/props.md';
import Events from '@ionic-internal/component-api/v1/infinite-scroll/events.md';
import Methods from '@ionic-internal/component-api/v1/infinite-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v1/infinite-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/infinite-scroll/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/infinite-scroll/slots.md';

<head>
  <title>Infinite Scroll | Infinite Scroll Component</title>
  <meta name="description" content="Infinite Scroll umožňuje implementovať dynamické načítavanie dát, keď používatelia prechádzajú väčším množstvom obsahu. Element umožňuje zobraziť akýkoľvek obsah zo zvoleného koncového bodu (endpointu) bez toho, aby bola potrebná ďalšia interakcia, napríklad kliknutie na tlačidlo “Načítať viac” alebo na odkaz na ďalšiu stránku." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Infinite Scroll allows you to implement dynamic data loading as users scroll through more content. The element allows you to view any content from a selected endpoint without requiring further interaction, such as clicking the "Load more" button or a link to the next page. The component also displays a loader indicator to inform users when new content is being loaded.

import Basic from '@site/static/usage/v1/infinite-scroll/basic/index.md';

<Basic />

## Number of items loaded (size)

The `size` attribute defines the number of items each time new content is loaded.

import Size from '@site/static/usage/v1/infinite-scroll/size/index.md';

<Size />

## Custom content

The Infinite scroll element can be used in combination with any Elements element. For example `Card`.

import Custom from '@site/static/usage/v1/infinite-scroll/custom/index.md';

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
