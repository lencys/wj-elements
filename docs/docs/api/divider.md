---
title: 'Divider'
---

import Props from '@ionic-internal/component-api/v1-sk/divider/props.md';
import Events from '@ionic-internal/component-api/v1-sk/divider/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/divider/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/divider/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/divider/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/divider/slots.md';

<head>
  <title>Divider | WebJET Element pre zobrazenie oddeľovača</title>
  <meta
    name="description"
    content="Divider element slúži na zobrazenie oddeľovača medzi jednotlivými sekciami. Môže byť použitý aj ako oddeľovač medzi položkami v menu."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Divider element slúži na zobrazenie oddeľovača medzi jednotlivými sekciami. Môže byť použitý aj ako oddeľovač medzi položkami v menu.

## Základné použitie

Ukážka ukazuje divider v jeho najjednoduchšej roli, teda ako vizuálne oddelenie dvoch blokov obsahu bez ďalších úprav.

import Basic from '@site/static/usage/v1/divider/basic/index.md';

<Basic />


## Kedy použiť

Použite `wje-divider`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
