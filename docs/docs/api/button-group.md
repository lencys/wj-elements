---
title: 'ButtonGroup'
---

import Props from '@ionic-internal/component-api/v1-sk/button-group/props.md';
import Events from '@ionic-internal/component-api/v1-sk/button-group/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/button-group/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/button-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/button-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/button-group/slots.md';

<head>
  <title>ButtonGroup: Element pre zoskupovanie tlačidiel</title>
  <meta
    name="description"
    content="ButtonGroup slúži na zoskupovanie elementov Button a Dropdown do funkčnejších celkov, ktoré budú po vložení do vnútra elementu automaticky naštýlované a usporiadané."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

ButtonGroup slúži na zoskupovanie elementov [Button](./button) a [Dropdown](./dropdown) do funkčnejších celkov, ktoré budú po vložení do vnútra elementu automaticky naštýlované a usporiadané.

## Základné použitie

Pridajte element `wje-button-group` do HTML s požadovanými atribútmi a do jeho vnútra zahrniete želané Button alebo Dropdown elementy.

import Basic from '@site/static/usage/v1/button-group/basic/index.md';

<Basic />

## Tvar ButtonGroup

Ukážka porovnáva, ako sa v skupine správajú tlačidlá s rôznym tvarom. Dôležité je, že group stále drží jeden súvislý vizuálny celok.

import Shape from '@site/static/usage/v1/button-group/shape/index.md';

<Shape />

## ButtonGroup s Dropdownom

Ukážka kombinuje klasické tlačidlo a dropdown v jednej skupine. Hodí sa pre primárnu akciu s doplnkovými sekundárnymi voľbami.

import Dropdown from '@site/static/usage/v1/button-group/dropdown/index.md';

<div className="large">

<Dropdown />

</div>

## Ikony v ButtonGroup

Ukážka sa sústreďuje na prácu s ikonami v skupine tlačidiel, aby bolo jasné, ako držať rovnakú výšku, rytmus a zarovnanie.

import Icons from '@site/static/usage/v1/button-group/icons/index.md';

<Icons />

## Delené tlačidlá

ButtonGroup umožňuje zobraziť aj delené tlačidlo s viacerými funkciami.

import SplitButtons from '@site/static/usage/v1/button-group/split-buttons/index.md';

<div className="large">

<SplitButtons />

</div>

## Úprava štýlov

### Farby ButtonGroup

Ukážka porovnáva farebné varianty celej skupiny tlačidiel, aby bolo jasné, ako sa group správa pri významových stavoch.

import Colors from '@site/static/usage/v1/button-group/colors/index.md';

<Colors />

### Farba okrajov v ButtonGroup

Ukážka ukazuje outline farebné varianty v button group. Hodí sa tam, kde chcete jemnejší vizuál, ale stále zachovať významové odlíšenie.

import ColorsOutline from '@site/static/usage/v1/button-group/colors-outline/index.md';

<ColorsOutline />


## Kedy použiť

Použite `wje-button-group`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
