---
title: Dialogue
---

import Props from '@ionic-internal/component-api/v1/dialog/props.md';
import Events from '@ionic-internal/component-api/v1/dialog/events.md';
import Methods from '@ionic-internal/component-api/v1/dialog/methods.md';
import Parts from '@ionic-internal/component-api/v1/dialog/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/dialog/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/dialog/slots.md';


  <title>Dialog | Dialog with customizable content</title>
  <meta name="description" content="Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo zrušenie ním vykonanej akcie." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Dialog element displays a dialog box with customizable content. It can be used, for example, to simply display information to the user or to request confirmation or cancellation of an action taken by the user. It is located above the application content and must be manually dismissed by the user in order to continue interacting with the application. The dialog can be displayed in different screen sizes and positions.

## Basic use

The Button component with the dialog attribute is used to display the Dialog component.
For more information, go to [Button](./button.md).

import Basic from '@site/static/usage/v1/dialog/basic/index.md';

<Basic />

### Placement

The `placement` property specifies the placement of the dialog box on the screen. The default is slide-up. Other options are `"stick-up"`, `"fill-in"`, `"slide-left"`, `"slide-right"`.

import Placement from '@site/static/usage/v1/dialog/placement/index.md';

<Placement />

### Size

The `size` property adjusts the size of the dialog box on the screen. The default size is `"small"`. Other options are `"medium"`, `"large"` and `"ex-large"`.

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
