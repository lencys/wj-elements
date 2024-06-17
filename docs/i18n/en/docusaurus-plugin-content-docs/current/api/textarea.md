---
title: Textarea
---

import Props from '@ionic-internal/component-api/v1/textarea/props.md';
import Events from '@ionic-internal/component-api/v1/textarea/events.md';
import Methods from '@ionic-internal/component-api/v1/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v1/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/textarea/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/textarea/slots.md';

<head>
  <title>Textarea | Textarea element extended with new functions</title>
  <meta name="description" content="Textarea rozširuje možnosti štandardného HTML textarea elementu. Pridáva štýly pre dosiahnutie vizuálne konzistentného používateľského rozhrania a ponúka nové funkcie." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Textarea extends the capabilities of the standard HTML `textarea` element. It adds styles to achieve a visually consistent user interface and offers features such as auto-height - adjusting the height of an element to the inserted text, or also a counter for inserted characters.

## Basic usage

import BasicPlayground from '@site/static/usage/v1/textarea/basic/index.md';

<BasicPlayground />

## Standard

Adding the `standard` attribute will display a textarea in the style of the standard HTML textarea element.

import Standard from '@site/static/usage/v1/textarea/standard/index.md';

<Standard />

## Counter

Adding the `counter` attribute will display a counter below the textarea showing the number of characters inserted and the maximum number of characters allowed. It is to be used in combination with the `max-length` property. Otherwise, the maximum number allowed will be set to `1000`.

import Counter from '@site/static/usage/v1/textarea/counter/index.md';

<Counter />

## Resize (none)

The `resize` property specifies the behavior of element resizing. If set to `none`, the field size remains fixed.

import Resize from '@site/static/usage/v1/textarea/resize/index.md';

<Resize />

## Resize (auto)

If the `resize` property is set to `auto`, the size of the element is automatically adjusted to the inserted content.

import AutoHeight from '@site/static/usage/v1/textarea/auto-height/index.md';

<AutoHeight />

## Disabled

When the `disabled` attribute is inserted into the textarea element, it will not be possible to write.

import Disabled from '@site/static/usage/v1/textarea/disabled/index.md';

<Disabled />

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
