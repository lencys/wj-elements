---
title: 'Slider'
---

import Props from '@ionic-internal/component-api/v1/slider/props.md';
import Events from '@ionic-internal/component-api/v1/slider/events.md';
import Methods from '@ionic-internal/component-api/v1/slider/methods.md';
import Parts from '@ionic-internal/component-api/v1/slider/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/slider/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/slider/slots.md';

<head>
  <title>Slider | Element rozširuje možnosti štandardného HTML select elementu.</title>
  <meta
    name="description"
    content="Slider je interaktívny komponent posuvníka, ktorý umožňuje používateľom praktickým spôsobom vybrať hodnotu z rozsahu hodnôt."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Slider je interaktívny komponent posuvníka, ktorý umožňuje používateľom praktickým spôsobom vybrať hodnotu z rozsahu hodnôt. Ponúka handle (rukoväť), ktorou možno pohybovať, takže je ideálny pri tých scenároch, ktoré od používateľa vyžadujú číselný vstup alebo úpravu nejakého nastavenia, napríklad hlasitosti.

## Základné použitie

V predvolenom nastavení výber umožňuje používateľovi vybrať len jednu možnosť. Zahrnutím elementu `Icon` sa pri možnosti zobrazí aj zvolená ikona.

import Basic from '@site/static/usage/v1/slider/basic/index.md';

<Basic />

## Bubble

Pridaním atribútu bubble sa nad sliderom zobrazí bublina s číslom vyjadrujúcim aktuálnu hodnotu posuvníka.

import Bubble from '@site/static/usage/v1/slider/bubble/index.md';

<Bubble />

## Label

import Label from '@site/static/usage/v1/slider/label/index.md';

<Label />

## Icons

import Icons from '@site/static/usage/v1/slider/icons/index.md';

<Icons />

## Color

import Colors from '@site/static/usage/v1/slider/colors/index.md';

<Colors />

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
