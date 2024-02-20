---
title: "Progress bar"
---
import Props from '@ionic-internal/component-api/v1/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v1/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v1/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v1/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/progress-bar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/progress-bar/slots.md';

<head>
  <title>Progress Bar | Horizontal App Progress Bar for Loading Indicator</title>
  <meta name="description" content="ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes—such as submitting a form or saving updates." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Progress Bar element je komponent navrhnutý na vizualizáciu priebehu. Ponúka možnosť vytvárať prispôsobiteľné kruhové alebo rovné ukazovatele s rôznymi možnosťami konfigurácie. 

## Základné použitie

Pre použitie komponentu Progress Bar, ho zahrňte do HTML s požadovanými atribútmi. Atribút progress nastaví percentuálnu hodnotu priebehu v progress bare.

import Basic from '@site/static/usage/v1/progress-bar/basic/index.md';

<Basic />

## Type

Podporované sú dva typy progress barov. Pridaním vlastnosti `type` s hodnotou `“circle”` zobrazíte progress bar s okrúhlym dizajnom. 


import Type from '@site/static/usage/v1/progress-bar/type/index.md';

<Type />

## Label

Pre zobrazenie popisiek pri progress bare je potrebné vložiť do jeho vnútra `Label` element a definovať  mu pozíciu pridaním atribútu `slot` s hodnotou `"start"` alebo `"end"`. 

import Label from '@site/static/usage/v1/progress-bar/label/index.md';

<Label />


## Linecap

Pridaním vlastnosti `linecap` s hodnotou `“round”` zobrazíte ukazovateľ priebehu so zaobleným koncom.

import Linecap from '@site/static/usage/v1/progress-bar/linecap/index.md';

<Linecap />


## Radius

Atribút radius určí priemer okrúhleho progress baru.

import Radius from '@site/static/usage/v1/progress-bar/radius/index.md';

<Radius />


## Stroke

Atribút stroke definuje šírku progress baru v pixeloch.


import Stroke from '@site/static/usage/v1/progress-bar/stroke/index.md';

<Stroke />


## Progress bar s obrázkom

Pre zobrazenie obrázku vo vnútri elementu, je potrebné obrázok zaobaliť do progress bar elementu.

import Image from '@site/static/usage/v1/progress-bar/image/index.md';

<Image />


## Farebné varianty progress baru

Vlastnosť `color` upravuje farbu elementu. V predvolenom nastavení má element farbu `dark`. Nastavením tejto hodnoty sa farba elementu zmení na jednu z farieb prednastavenej farebnej palety.


import Colors from '@site/static/usage/v1/progress-bar/theming/colors/index.md';

<Colors />


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