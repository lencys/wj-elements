---
title: 'Chip'
---

import Props from '@ionic-internal/component-api/v1/chip/props.md';
import Events from '@ionic-internal/component-api/v1/chip/events.md';
import Methods from '@ionic-internal/component-api/v1/chip/methods.md';
import Parts from '@ionic-internal/component-api/v1/chip/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/chip/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/chip/slots.md';

<head>
  <title>Chip | Malý univerzálny vizuálny blok</title>
  <meta
    name="description"
    content="Komponent Chip je univerzálny element, ktorý predstavuje malý vizuálny blok obsahujúci rôzne ďalšie elementy, ako napríklad avatary, text a ikony. Ponúka možnosti prispôsobenia farieb, stavov a ďalšie."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent Chip je univerzálny element, ktorý predstavuje malý vizuálny blok obsahujúci rôzne ďalšie elementy, ako napríklad avatary, text a ikony. Ponúka možnosti prispôsobenia farieb, stavov a ďalšie.

## Základné použitie

import Basic from '@site/static/usage/v1/chip/basic/index.md';

<Basic />

## Vkladanie ďalších prvkov

V elemente chip je možné zobraziť aj ďalšie elementy, napríklad elementy **avatar**, **label** a **icon**.

import SlotExample from '@site/static/usage/v1/chip/slots/index.md';

<SlotExample />

## Štýlovanie

### Farebné varianty

import Colors from '@site/static/usage/v1/chip/theming/colors/index.md';

<Colors />

### Štýlovanie pomocou CSS custom vlastností

import CSSProps from '@site/static/usage/v1/chip/theming/css-properties/index.md';

<CSSProps />

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
