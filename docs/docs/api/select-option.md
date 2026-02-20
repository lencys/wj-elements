---
title: 'Option'
---

import Props from '@ionic-internal/component-api/v1-sk/option/props.md';
import Events from '@ionic-internal/component-api/v1-sk/option/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/option/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/option/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/option/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/option/slots.md';

<head>
  <title>Option | jednotlivé voliteľné možnosti v rámci komponentu Select</title>
  <meta
    name="description"
    content="Element Option predstavuje jednotlivé voliteľné možnosti v rámci komponentu Select. Je obdobný štandardnému elementu HTML select a umožňuje používateľom vykonať jeden alebo viacero výberov."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Option predstavuje jednotlivé voliteľné možnosti v rámci komponentu [Select](./select). Je obdobný štandardnému elementu HTML select a umožňuje používateľom vykonať jeden alebo viacero výberov na základe konfigurácie komponentu `select`. Tieto elementy sa môžu dynamicky napĺňať a sú navrhnuté tak, aby bezproblémovo spolupracovali s vlastnou logikou komponentu wje-select vrátane funkcií, ako je viacnásobný výber a vlastné štylizovanie.

Pre informácie o použití Option sa presuňte do dokumentácie elementu [Select.](./select)


## Kedy použiť

Použite `wje-select-option`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
