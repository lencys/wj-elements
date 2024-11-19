---
title: 'Checkbox'
---

import Props from '@ionic-internal/component-api/v1/checkbox/props.md';
import Events from '@ionic-internal/component-api/v1/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v1/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v1/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/checkbox/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/checkbox/slots.md';

<head>
  <title>Checkbox | WebJET Element pre vybratie viacerých možností</title>
  <meta
    name="description"
    content="Checkbox, alebo tiež začiarkavacie políčko, je element, ktorý umožňuje používateľom vybrať jednu alebo viac možností z množiny. Kliknutím na checkbox zmeníte jeho stav na `true` alebo `false`."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Checkbox, alebo tiež začiarkavacie políčko, je element, ktorý umožňuje používateľom vybrať jednu alebo viac možností z množiny. Kliknutím na checkbox zmeníte jeho stav na `true` alebo `false`.

## Základné použitie

import Basic from '@site/static/usage/v1/checkbox/basic/index.md';

<Basic />

## Indeterminate checkbox

Po pridaní atribútu `indeterminate` sa zobrazí checkbox, ktorého predvolený stav je neutrálny, tzn. ani `true` ani `false`.

import Indeterminate from '@site/static/usage/v1/checkbox/indeterminate/index.md';

<Indeterminate />

## Variant

Pridaní atribútu `variant` s hodnotou `circle` zobrazíte checkbox v okrúhlom tvare.

import Variant from '@site/static/usage/v1/checkbox/variant/index.md';

<Variant />

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
