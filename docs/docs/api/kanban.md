---
title: 'Kanban'
---

import Props from '@ionic-internal/component-api/v1-sk/kanban/props.md';
import Events from '@ionic-internal/component-api/v1-sk/kanban/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/kanban/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/kanban/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/kanban/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/kanban/slots.md';

<head>
  <title>Kanban | Element zobrazujúci plnoohodnotnú Kanban tabuľu</title>
  <meta
    name="description"
    content="Komponent Kanban je element zobrazujúci plnoohodnotnú Kanban tabuľu. Tá umožňuje spravovať úlohy a projekty pomocou vizuálneho rozhrania."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `Kanban` je element zobrazujúci plnoohodnotnú Kanban tabuľu. Tá umožňuje spravovať úlohy a projekty pomocou vizuálneho rozhrania. 

Kanban tabuľa je rozdelená do stĺpcov, pričom každý stĺpec reprezentuje určitú fázu procesu alebo kategóriu úloh. 
Úlohy sú zobrazené ako karty, ktoré je možné presúvať medzi stĺpcami, čím je možné nastaviť a sledovať ich aktuálny stav.

## Základné použitie

Ukážka predstavuje kanban v jeho základnej štruktúre, teda so stĺpcami a kartami bez ďalších rozšírení.

import Basic from '@site/static/usage/v1/kanban/basic/index.md';

<Basic />


## Kedy použiť

Použite `wje-kanban`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
