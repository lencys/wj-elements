---
title: 'Level Indicator'
---

import Props from '@ionic-internal/component-api/v1/level-indicator/props.md';
import Events from '@ionic-internal/component-api/v1/level-indicator/events.md';
import Methods from '@ionic-internal/component-api/v1/level-indicator/methods.md';
import Parts from '@ionic-internal/component-api/v1/level-indicator/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/level-indicator/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/level-indicator/slots.md';

<head>
  <title>Level Indicator | Element zobrazujúci úroveň alebo pokrok v procese.</title>
  <meta
    name="description"
    content="Komponent `Level Indicator` je element umožňujúci zobraziť úroveň alebo pokrok v procese. Môže byť použitý na zobrazenie úrovne nabitia batérie, pokroku používateľa alebo iných podobných úloh.
"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `Level Indicator` je element umožňujúci zobraziť úroveň alebo pokrok v procese. Môže byť použitý na zobrazenie úrovne nabitia batérie, pokroku používateľa alebo iných podobných úloh.

## Základné použitie

import Basic from '@site/static/usage/v1/level-indicator/basic/index.md';

<Basic />

## Colorize

Pridaním atribútu `colorize` sa pruhy indikátora sfarbia podľa úrovne (nízka, stredná, vysoká).

import Color from '@site/static/usage/v1/level-indicator/color/index.md';

<Color />

## Sírka pruhov indikátora

Nastavením CSS premennej `--wje-level-indicator-width` na ľubovoľnú hodnotu je možné nastaviť šírku pruhov indikátora.

import Bars from '@site/static/usage/v1/level-indicator/bars/index.md';

<Bars />

## Reverse

Pridaním atribútu `reverse` sa pruhy indikátora zobrazia v opačnom poradí.

import Reverse from '@site/static/usage/v1/level-indicator/reverse/index.md';

<Reverse />

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
