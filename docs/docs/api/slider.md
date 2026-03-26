---
title: 'Slider'
---

import Props from '@ionic-internal/component-api/v1-sk/slider/props.md';
import Events from '@ionic-internal/component-api/v1-sk/slider/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/slider/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/slider/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/slider/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/slider/slots.md';

<head>
  <title>Slider | Element rozširuje možnosti štandardného HTML select elementu.</title>
  <meta
    name="description"
    content="Element Slider je interaktívny komponent posuvníka, ktorý umožňuje používateľom praktickým spôsobom vybrať hodnotu z rozsahu hodnôt."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Slider je interaktívny komponent posuvníka, ktorý umožňuje používateľom praktickým spôsobom vybrať hodnotu z rozsahu hodnôt. Ponúka handle (rukoväť), ktorou možno pohybovať, takže je ideálny pri tých scenároch, ktoré od používateľa vyžadujú číselný vstup alebo úpravu nejakého nastavenia, napríklad hlasitosti.

## Základné použitie

V predvolenom nastavení výber umožňuje používateľovi vybrať len jednu možnosť. Zahrnutím elementu `Icon` sa pri možnosti zobrazí aj zvolená ikona.

import Basic from '@site/static/usage/v1/slider/basic/index.md';

<Basic />

## Bubble

Pridaním atribútu bubble sa nad sliderom zobrazí bublina s číslom vyjadrujúcim aktuálnu hodnotu posuvníka.

import Bubble from '@site/static/usage/v1/slider/bubble/index.md';

<Bubble />

## Label

Ukážka dopĺňa slider o label, aby bolo jasné, ako používateľovi pomenovať význam hodnoty alebo rozsahu.

import Label from '@site/static/usage/v1/slider/label/index.md';

<Label />

## Icons

Ukážka pridáva k slideru ikony, ktoré pomáhajú vizuálne označiť začiatok a koniec rozsahu.

import Icons from '@site/static/usage/v1/slider/icons/index.md';

<Icons />

## Color

Ukážka porovnáva farebné varianty slidera a ich čitateľnosť v rôznych významových stavoch.

import Colors from '@site/static/usage/v1/slider/colors/index.md';

<Colors />


## Kedy použiť

Použite `wje-slider`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
