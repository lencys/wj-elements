---
title: 'Animation'
---

import Props from '@ionic-internal/component-api/v1-sk/animation/props.md';
import Events from '@ionic-internal/component-api/v1-sk/animation/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/animation/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/animation/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/animation/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/animation/slots.md';

<head>
  <title>Animation: Integrácia animácií do webových aplikácií</title>
  <meta
    name="description"
    content="Element Animation umožňuje jednoduchú integráciu animácií do webových aplikácií, čím prispieva k tvorbe pútavých a interaktívnych používateľských rozhraní."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Animation umožňuje jednoduchú integráciu animácií do webových aplikácií, čím prispieva k tvorbe pútavých a interaktívnych používateľských rozhraní. Ponúka široké možnosti prispôsobenia, vrátane nastavenia oneskorenia, trvania a počtu opakovaní animácií.

## Základné použitie

import Basic from '@site/static/usage/v1/animation/basic/index.md';

<Basic />


## Kedy použiť

Použite `wje-animation`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
