---
title: Reorder Handle
---

import Props from '@ionic-internal/component-api/v1-sk/reorder-handle/props.md';
import Events from '@ionic-internal/component-api/v1-sk/reorder-handle/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/reorder-handle/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/reorder-handle/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/reorder-handle/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/reorder-handle/slots.md';

<head>
  <title>Reorder Handle</title>
  <meta
    name="description"
    content="API dokumentácia pre wje-reorder-handle vrátane odporúčaného použitia, atribútov, udalostí, metód, možností štýlovania a slotov."
  />
</head>

`ReorderHandle` je element, ktorý pridáva iným elementom funkcionalitu drag-and-drop, a slúži ako rukoväť na presúvanie položiek v skupine elementov.

## Základné použitie

Ukážka zobrazuje reorder handle v najjednoduchšej podobe, teda ako vizuálny úchop pre presúvanie položky.

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


## Kedy použiť

Použite `wje-reorder-handle`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
