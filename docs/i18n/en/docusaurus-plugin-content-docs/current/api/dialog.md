---
title: 'Dialog'
---

import Props from '@ionic-internal/component-api/v1/dialog/props.md';
import Events from '@ionic-internal/component-api/v1/dialog/events.md';
import Methods from '@ionic-internal/component-api/v1/dialog/methods.md';
import Parts from '@ionic-internal/component-api/v1/dialog/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/dialog/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/dialog/slots.md';

<head>
  <title>Dialog | Dialog with customizable content</title>
  <meta
    name="description"
    content="Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo zrušenie ním vykonanej akcie."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Dialog element displays a dialog box with customizable content. It can be used, for example, to simply display information to the user or to request confirmation or cancellation of an action taken by the user. It is located above the application content and must be manually dismissed by the user in order to continue interacting with the application. The dialog can be displayed in different screen sizes and positions.

## Basic usage

One way to display the 'Dialog' component is to use the 'Button' component with the 'dialog' attribute.
For more information about the 'Button' component, go to [Button](button.md).

import Basic from '@site/static/usage/v1/dialog/basic/index.md';

<Basic />

## Basic use with JavaScript

It is also possible to display the Dialog component using JavaScript. The `onOpen()` method, which is called on the `wje-dialog` element, is used to create a dialog box. This method displays a dialog box and returns its instance. To close a dialog box, you need to call the `onClose()` method on its instance.

import BasicJS from '@site/static/usage/v1/dialog/basicjs/index.md';

<BasicJS />

## Placement

The `placement` property specifies the placement of the dialog box on the screen. The default is slide-up. Other options are `"stick-up"`, `"fill-in"`, `"slide-left"`, `"slide-right"`.

import Placement from '@site/static/usage/v1/dialog/placement/index.md';

<Placement />

## Size

The `size` property adjusts the size of the dialog box on the screen. The default size is `"small"`. Other options are `"medium"`, `"large"` and `"ex-large"`.

import Size from '@site/static/usage/v1/dialog/size/index.md';

<Size />

## Dynamic content change

The content of the Dialog element can be easily changed by using a custom event and one of the `beforeShow`, `afterShow`, `beforeHide` or `afterHide` methods.

import ContentChange from '@site/static/usage/v1/dialog/content-change/index.md';

<ContentChange />

## Registering a Blocking Event

The content of the Dialog element can be easily changed by using a custom event and one of the `beforeShow`, `afterShow`, `beforeHide` or `afterHide` methods.

import BlockingEvent from '@site/static/usage/v1/dialog/blocking-event/index.md';

<BlockingEvent />

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
