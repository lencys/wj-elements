---
title: 'Tree'
---

import Props from '@ionic-internal/component-api/v1/accordion/props.md';
import Events from '@ionic-internal/component-api/v1/accordion/events.md';
import Methods from '@ionic-internal/component-api/v1/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v1/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/accordion/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/accordion/slots.md';

<head>
  <title>Accordion: Zobrazenie obsahu v rozbaľovacích sekciách</title>
  <meta
    name="description"
    content="Element Accordion umožňuje zobraziť obsah v rozbaľovacích sekciách. Každá sekcia môže byť rozbalená alebo zbalená kliknutím, čo umožňuje používateľom rýchlo nájsť a zobraziť požadované informácie. Element podporuje viacnásobný výber, čo znamená, že môže byť naraz rozbalených viacero sekcií. Okrem toho umožňuje nastaviť počiatočný index rozbalenej sekcie, čo poskytuje flexibilitu pri inicializácii komponentu s predvoleným rozbaleným obsahom.
"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element `Tree` umožňuje hierarchické zobrazovanie dát v stromovej štruktúre. Používa sa na vizualizáciu kategórií, súborových systémov alebo navigačných štruktúr. Tree obsahuje wje-tree ako hlavný kontajner a wje-tree-item ako jednotlivé položky stromu. Položky môžu obsahovať deti, čím vytvárajú vnorenú hierarchiu.

## Základné použitie

import Basic from '@site/static/usage/v1/tree/basic/index.md';

<Basic />

## Multiple
import Multiple from '@site/static/usage/v1/tree/multiple/index.md';

<Multiple />

## TO DO complete tree and tree item docs

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
