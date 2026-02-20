---
title: 'Select'
---

import Props from '@ionic-internal/component-api/v1-sk/select/props.md';
import Events from '@ionic-internal/component-api/v1-sk/select/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/select/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/select/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/select/slots.md';
import { Icon } from '@iconify/react';

<head>
  <title>Select | Element rozširuje možnosti štandardného HTML select elementu.</title>
  <meta
    name="description"
    content="**Select** element rozširuje možnosti štandardného HTML select elementu poskytujúc vylepšenú používateľskú skúsenosť."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

**Select** element rozširuje možnosti štandardného HTML select elementu poskytujúc vylepšenú používateľskú skúsenosť. 
Podporuje jednoduchý aj viacnásobný výber možností pomocou atribútu multiple. 
Ponúka rozšírené funkcie ako vymazateľný obsah pomocou atribútu `clearable`, vyhľadávanie v možnostiach pomocou `find` a lenivé načítavanie pre optimalizáciu výkonu s atribútom `lazy`. 
Pri viacnásobnom výbere možností sa vybrané položky zobrazujú ako chipy s konfigurovateľným maximálnym počtom zobrazených položiek. 
Komponent tiež podporuje dynamické načítanie možností z externých zdrojov prostredníctvom elementu [**Options**](./select-options).

## Základné použitie

V predvolenom nastavení výber umožňuje používateľovi vybrať len jednu možnosť. Zahrnutím elementu `Icon` sa pri možnosti zobrazí aj zvolená ikona.

import SingleSelectionExample from '@site/static/usage/v1/select/basic/single-selection/index.md';

<SingleSelectionExample />

## Výber viacerých položiek

Pridaním atribútu `multiple` umožníte používateľovi vybrať viacero možností.

import MultipleSelectionExample from '@site/static/usage/v1/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## Clearable

Pridaním atribútu `clearable` umožníte používateľovi odstrániť všetky zvolené možnosti kliknutím na ikonu <Icon icon="radix-icons:cross-2" height="14" />.

import Clearable from '@site/static/usage/v1/select/clearable/index.md';

<Clearable />

## Disabled

Pridaním atribútu `disabled` zabránite používateľovi interagovať so Selectom.

import Disabled from '@site/static/usage/v1/select/disabled/index.md';

<Disabled />

## Dynamický zoznam možností

Použitím komponentu Options je podporovaný aj dynamicky generovaný zoznam možností, ktorý sa asynchrónne načíta zo zadanej URL adresy.

import Options from '@site/static/usage/v1/select/options/index.md';

<Options />

## Standard

Pridaním atribútu `standard` sa zobrazí Select v štýle štandardného HTML selectu.

import Standard from '@site/static/usage/v1/select/standard/index.md';

<Standard />

## Lazy načítavanie

Pridaním atribútu `lazy` sa načítajú možnosti len vtedy, keď je to potrebné. To môže byť užitočné pri veľkých množstvách možností alebo pri načítavaní z externých zdrojov.

import Lazy from '@site/static/usage/v1/select/lazy/index.md';

<Lazy />

## Find

Pridaním atribútu `find` sa zobrazí vstupné pole, ktoré umožňuje používateľovi vyhľadávať možnosti v zozname. Používateľ môže zadať text a zoznam sa automaticky filtruje podľa zadaného textu.

import Find from '@site/static/usage/v1/select/find/index.md';

<Find />

## Lazy search

Skombinovaním atribútov `lazy` a `find` sa načítajú možnosti len vtedy, keď používateľ začne písať do vstupného poľa. To môže byť užitočné pri veľkých množstvách možností alebo pri načítavaní z externých zdrojov.

import Autocomplete from '@site/static/usage/v1/select/lazy-search/index.md';

<Autocomplete />


## Kedy použiť

Použite `wje-select`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

## Kedy nepoužiť

Nepoužívajte ho len ako vizuálny dekoratívny prvok bez interakcie. V takom prípade uprednostnite prezentačné komponenty.

## Prístupnosť

Vždy prepojte komponent s popisom (`label`/`aria-label`), zachovajte ovládanie klávesnicou a pri validačných chybách zobrazte zrozumiteľnú správu.

## Odporúčané postupy

- Majte jednotné validačné pravidlá a error stavy naprieč celým formulárom.
- Pri asynchrónnych operáciách zobrazte stav načítania alebo disabled stav.
- Pri zložitých formulároch preferujte menšie sekcie a okamžitú spätnú väzbu.

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
