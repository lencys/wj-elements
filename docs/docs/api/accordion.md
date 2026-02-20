---
title: 'Accordion'
---

import Props from '@ionic-internal/component-api/v1-sk/accordion/props.md';
import Events from '@ionic-internal/component-api/v1-sk/accordion/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/accordion/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/accordion/slots.md';

<head>
  <title>Accordion: Zobrazenie obsahu v rozbaľovacích sekciách</title>
  <meta
    name="description"
    content="Element Accordion umožňuje zobraziť obsah v rozbaľovacích sekciách. Každá sekcia môže byť rozbalená alebo zbalená kliknutím, čo umožňuje používateľom rýchlo nájsť a zobraziť požadované."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element `Accordion` umožňuje zobraziť obsah v rozbaľovacích sekciách. Každá sekcia môže byť rozbalená alebo zbalená kliknutím, čo umožňuje používateľom rýchlo nájsť a zobraziť požadované informácie. Komponent podporuje viacnásobný výber, čo znamená, že môže byť naraz rozbalených viacero sekcií. Okrem toho umožňuje nastaviť počiatočný index rozbalenej sekcie, čo poskytuje flexibilitu pri inicializácii komponentu s predvoleným rozbaleným obsahom.

## Základné použitie

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## Farby

import Colors from '@site/static/usage/v1/accordion/colors/index.md';

<Colors />

## Multiple

import Multiple from '@site/static/usage/v1/accordion/multiple/index.md';

<Multiple />


## Kedy použiť

Použite `wje-accordion`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

## Kedy nepoužiť

Nepoužívajte komponent mimo jeho zodpovednosti; pri netypickom prípade radšej zložte viac menších prvkov.

## Prístupnosť

Skontrolujte klávesnicové ovládanie, focus stavy, kontrast a zrozumiteľné pomenovanie interaktívnych prvkov.

## Odporúčané postupy

- Preferujte API komponentu pred ručnými DOM zásahmi.
- Držte sa dizajnových tokenov a konzistentných konvencií pomenovania.
- Pred nasadením otestujte komponent v reálnych dátových scenároch.

## Atribúty a vlastnosti

<Props />

## Udalosti

<Events />

## Metódy

<Methods />

## CSS tieňové časti

<Parts />

## CSS vlastné premenné

<CustomProps />

## Sloty

<Slots />
