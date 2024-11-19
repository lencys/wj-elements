---
title: Avatar
---

import Props from '@ionic-internal/component-api/v1/avatar/props.md';
import Events from '@ionic-internal/component-api/v1/avatar/events.md';
import Methods from '@ionic-internal/component-api/v1/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v1/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/avatar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/avatar/slots.md';

<head>
  <title>Avatar: Avatar Component</title>
  <meta
    name="description"
    content="Element avatar slúži na vizuálnu prezentáciu používateľa alebo subjektu. Používa sa zvyčajne ako obaľovač a poskytuje praktický spôsob zobrazovania profilových obrázkov, ikon, alebo, ak tie nie sú posktytné, iniciálok.  Podporuje rôzne konfigurácie vrátane veľkosti, zoskupenia viacerých avatarov alebo zobrazenie dropdownu po kliknutí či tooltipu pri ukázaní myšou."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The avatar element is used to visually represent a user or entity. It is usually used as a wrapper and provides a convenient way to display profile pictures, icons, or, if these are not provided, initials. It supports a variety of configurations including size, grouping multiple avatars, or displaying a dropdown when clicked or a tooltip when pointed to with the mouse.

## Basic usage

import Basic from '@site/static/usage/v1/avatar/basic/index.md';

<Basic />

## Avatar size

The `size` property determines the size of the avatar. Setting this property will change the internal offset of the button.

import Size from '@site/static/usage/v1/avatar/size/index.md';

<Size />

## Avatar with icon

Nesting the `wj-icon` element will display the selected icon inside the avatar.

import Icon from '@site/static/usage/v1/avatar/icon/index.md';

<Icon />

## Avatar with initials

By adding the `initials` and `label` properties, the avatar displays the initials of the selected value of the `label` property.

import Initials from '@site/static/usage/v1/avatar/initials/index.md';

<Initials />

## Avatar with dropdown

Adding the `wj-dropdown` element will display a menu when the avatar is clicked. In this case, you need to add a `trigger` slot with value `hover` to the avatar element.

import Dropdown from '@site/static/usage/v1/avatar/dropdown/index.md';

<div className="xlarge">

<Dropdown />

</div>

## Avatar with tooltip

Adding the `wj-dropdown` element will display a menu when the avatar is clicked.

import Tooltip from '@site/static/usage/v1/avatar/tooltip/index.md';

<Tooltip />

## Group of avatars

import Group from '@site/static/usage/v1/avatar/group/index.md';

<Group />

<!-- ## CSS Custom Properties

import CSSProps from '@site/static/usage/v1/avatar/theming/css-properties/index.md';

<CSSProps /> -->

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
