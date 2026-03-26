---
title: 'Reorder'
---

import Props from '@ionic-internal/component-api/v1-sk/reorder/props.md';
import Events from '@ionic-internal/component-api/v1-sk/reorder/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/reorder/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/reorder/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/reorder/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/reorder/slots.md';

<head>
  <title>Reorder</title>
  <meta
    name="description"
    content="API dokumentácia pre wje-reorder vrátane odporúčaného použitia, atribútov, udalostí, metód, možností štýlovania a slotov."
  />
</head>

`Reorder` je komponent, ktorý umožňuje pomocou funkcionality Drag&Drop, zmeniť poradie položky `ReorderItem` v skupine.

## Základné použitie

Ukážka predstavuje základné presúvanie položiek v jednom zozname bez ďalších obmedzení alebo drop zón.

import Basic from '@site/static/usage/v1/reorder/basic/index.md';

<Basic />

## Atribút Disabled

Atribút `disabled` sa používa na zakázanie možnosti preusporiadania položiek v rámci `Reorder`. Keď je tento atribút nastavený, používateľ nebude môcť ťahať položky na zmenu ich poradia.

import Disabled from '@site/static/usage/v1/reorder/disabled/index.md';

<Disabled />

## Rukoväť pre ťahanie

Pridaním elementu do slotu `handle` položky [**ReorderItem**](./reorder-item), môžete definovať špecifickú oblasť, ktorá bude slúžiť ako rukoväť pre ťahanie a preusporiadanie položiek. Toto umožňuje používateľom intuitívnejšie interakcie pri zmene poradia položiek.

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


## Kedy použiť

Použite `wje-reorder`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
