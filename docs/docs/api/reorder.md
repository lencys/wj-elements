---
title: 'Reorder'
---

import Props from '@ionic-internal/component-api/v1/reorder/props.md';
import Events from '@ionic-internal/component-api/v1/reorder/events.md';
import Methods from '@ionic-internal/component-api/v1/reorder/methods.md';
import Parts from '@ionic-internal/component-api/v1/reorder/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/reorder/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/reorder/slots.md';

<head>
  <title>Reorder</title>
  <meta
    name="description"
    content="Reorder je komponent, ktorý umožňuje ťahaním položky zmeniť jej poradie v rámci skupiny položiek. Musí sa použiť v rámci skupiny na zmenu poradia, aby sa zabezpečilo vizuálne rozhranie drag and drop."
  ></meta>
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`Reorder` je komponent, ktorý umožňuje pomocou funkcionality Drag&Drop, zmeniť poradie položky `ReorderItem` v skupine.

## Základné použitie

import Basic from '@site/static/usage/v1/reorder/basic/index.md';

<Basic />

## Atribút Disabled

Atribút `disabled` sa používa na zakázanie možnosti preusporiadania položiek v rámci `Reorder`. Keď je tento atribút nastavený, používateľ nebude môcť ťahať položky na zmenu ich poradia.

import Disabled from '@site/static/usage/v1/reorder/disabled/index.md';

<Disabled />

## Rukoväť pre ťahanie

Pridaním elementu do slotu `handle` položky [**ReorderItem**](../reorder-item), môžete definovať špecifickú oblasť, ktorá bude slúžiť ako rukoväť pre ťahanie a preusporiadanie položiek. Toto umožňuje používateľom intuitívnejšie interakcie pri zmene poradia položiek.

import Handle from '@site/static/usage/v1/reorder/handle/index.md';

<Handle />

## Atribút Reverse - Opačné poradie

Atribút `reverse` sa používa na zmenu smeru preusporiadania položiek v rámci `Reorder`.

import Reverse from '@site/static/usage/v1/reorder/reverse/index.md';

<Reverse />

## Drop Zóny

DropZone je komponent, ktorý predstavuje zónu určenú pre preusporiadanie obsahu.

import DropZones from '@site/static/usage/v1/reorder/drop-zones/index.md';

<DropZones />

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
