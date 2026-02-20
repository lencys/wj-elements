---
title: 'Options'
---

import Props from '@ionic-internal/component-api/v1-sk/options/props.md';
import Events from '@ionic-internal/component-api/v1-sk/options/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/options/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/options/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/options/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/options/slots.md';

<head>
  <title>Options | jednotlivé voliteľné možnosti v rámci komponentu Select</title>
  <meta
    name="description"
    content="Element Options je určený na použitie vo vnútri elementu Select a slúži na zobrazovanie dynamicky generovaného zoznamu možností, ktorý sa asynchrónne načíta zo zadanej URL adresy."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Options je určený na použitie vo vnútri elementu [Select](./select) a slúži na zobrazovanie dynamicky generovaného zoznamu možností, ktorý sa asynchrónne načíta zo zadanej URL adresy.

:::note
Pre viac informácií o použití Options sa presuňte do dokumentácie elementu [**Select**](./select)
:::


## Kedy použiť

Použite `wje-select-options`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
