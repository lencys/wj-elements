---
title: "Radio"
---
import Props from '@ionic-internal/component-api/v1/radio/props.md';
import Events from '@ionic-internal/component-api/v1/radio/events.md';
import Methods from '@ionic-internal/component-api/v1/radio/methods.md';
import Parts from '@ionic-internal/component-api/v1/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/radio/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/radio/slots.md';

<head>
  <title>Radio komponent | Vylepšená verzia štandardného HTML radio elementu</title>
  <meta name="description" content="Radio element je upravená verzia štandardného HTML radio elementu, rozšírená o štýly pre dosiahnutie vizuálne konzistentnejšieho používateľského rozhrania." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Radio element je upravená verzia štandardného HTML radio elementu, rozšírená o štýly pre dosiahnutie vizuálne konzistentnejšieho používateľského rozhrania naprieč rôznymi zariadeniami. Funguje podobne ako štandardné rádio tlačidlo a umožňuje používateľom vybrať jednu z množiny možností. Používa sa vo vnútri elementu [radio group](./radio-group), ktorý im pridáva zarovnanie a zoskupuje ich do jedného celku.

## Základné použitie

import Basic from '@site/static/usage/v1/radio/basic/index.md';

<Basic />

## Inline

Pridaním vlastnosti `inline` sa elementy usporiadajú v horizontálnom rozložení.

import Inline from '@site/static/usage/v1/radio/inline/index.md';

<Inline />


## Úprava štýlov

### color

Pomocou vlastnosti `color` je možné zmeniť farbu radio elementu.

import Color from '@site/static/usage/v1/radio/color/index.md';

<Color />

## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />