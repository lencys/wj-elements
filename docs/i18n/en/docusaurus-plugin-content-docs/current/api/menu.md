---
title: Menu
---

import Props from '@ionic-internal/component-api/v1/menu/props.md';
import Events from '@ionic-internal/component-api/v1/menu/events.md';
import Methods from '@ionic-internal/component-api/v1/menu/methods.md';
import Parts from '@ionic-internal/component-api/v1/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/menu/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/menu/slots.md';

<head>
  <title>Menu | Element to display the menu</title>
  <meta
    name="description"
    content="Menu element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a zobrazí sa pridaním atribútu `active` napríklad po kliknutí na tlačidlo."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The menu element is used to display the navigation. It is hidden by default and is displayed by adding the `active` attribute, for example, when a button is clicked. Špeciálne pre použitie v Menu sú navrhnuté elementy [MenuItem](../menu-item) a [MenuLabel](../menu-label).

## Basic usage

import Basic from '@site/static/usage/v1/menu/basic/index.md';

<Basic />

## Inset

import Inset from '@site/static/usage/v1/menu/inset/index.md';

<Inset />

## Variant: Megamenu

import Megamenu from '@site/static/usage/v1/menu/megamenu/index.md';

<Megamenu />

## Variant: Nav

import Nav from '@site/static/usage/v1/menu/nav/index.md';

<Nav />

## Collapse

The `collapse` attribute displays the menu in collapsed state. In this state, the menu is collapsed and only the icon is displayed.

import Collapse from '@site/static/usage/v1/menu/collapse/index.md';

<Collapse />

## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />
