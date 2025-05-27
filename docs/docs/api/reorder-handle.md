---
title: Reorder Handle
---

import Props from '@ionic-internal/component-api/v1/reorder-handle/props.md';
import Events from '@ionic-internal/component-api/v1/reorder-handle/events.md';
import Methods from '@ionic-internal/component-api/v1/reorder-handle/methods.md';
import Parts from '@ionic-internal/component-api/v1/reorder-handle/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/reorder-handle/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/reorder-handle/slots.md';

<head>
  <title>Reorder Handle</title>
  <meta
    name="description"
    content="Reorder Handle je komponent, ktorý slúži ako rukoväť na presúvanie položiek vo Reorder komponente."
  ></meta>
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`ReorderHandle` je element, ktorý pridáva iným elementom funkcionalitu drag-and-drop, a slúži ako rukoväť na presúvanie položiek v skupine elementov.

## Základné použitie

import Basic from '@site/static/usage/v1/reorder-handle/basic/index.md';

<Basic />

## Zamykanie rukoväte

Pridaním atribútu `lock` na element `ReorderHandle`, môžete zablokovať možnosť ťahania položky, čím sa zabráni používateľom v zmene poradia položiek.

import Parent from '@site/static/usage/v1/reorder-handle/parent/index.md';

<Parent />

## Bez dropzóny (Pre použitie v menu)

Prvky môžu byť presúvané v rámci ich rodičovského kontajnera bez potreby explicitne definovať dropzone atribút, čím sa zjednodušuje implementácia funkcionality drag-and-drop.

import Menu from '@site/static/usage/v1/reorder-handle/menu-usage/index.md';

<Menu />

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
