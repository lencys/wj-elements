---
title: 'Label'
---

import Props from '@ionic-internal/component-api/v1-sk/label/props.md';
import Events from '@ionic-internal/component-api/v1-sk/label/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/label/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/label/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/label/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/label/slots.md';

<head>
  <title>Label | Element pre pridávanie popisného textového obsahu do komponentov</title>
  <meta
    name="description"
    content="**Label** je element, ktorý sa používa na pridávanie textového obsahu do komponentov. Label sa môže použiť napríklad vo vnútri elementov Item, Card alebo tiež v elemente Badge a ďalších."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

**Label** je element, ktorý sa používa na pridávanie textového obsahu do komponentov. Label sa môže použiť napríklad vo vnútri elementov [Item](./item), [Card](./card) alebo tiež v elemente [Badge](./badge) a ďalších.

Pozícia štítku vo vnútri prvku môže byť inline, pevná, naskladaná alebo plávajúca.


## Kedy použiť

Použite `wje-label`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
