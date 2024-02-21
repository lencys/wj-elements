---
title: Button
---

import Props from '@ionic-internal/component-api/v1/button/props.md';
import Events from '@ionic-internal/component-api/v1/button/events.md';
import Methods from '@ionic-internal/component-api/v1/button/methods.md';
import Parts from '@ionic-internal/component-api/v1/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/button/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/button/slots.md';


  <title>Button | Tlačidlo</title>
  <meta name="description" content="Tlačidlá sú klikateľný element, ktorý umožnuje zobraziť text, ikonu, prípadne oboje. Tlačidlá si je možné jednoducho prispôsobiť použitím rôznych atribútov a CSS vlastností." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tlačidlá sú klikateľný element, ktorý umožňuje zobraziť text, ikonu, prípadne oboje. Tlačidlá si je možné jednoducho prispôsobiť použitím rôznych atribútov a CSS vlastností.

## Základné použitie

Ak chcete použiť komponent Button, zahrňte ho do HTML s požadovanými atribútmi. Pridaním atribútu `disabled` sa tlačidlo stane neaktívnym a nie je možné naň kliknúť.

import Basic from '@site/static/usage/v1/button/basic/index.md';

<Basic />

## Toggle

<!-- Vlastnosť `toggle` umožňuje priradiť tlačidlu dva rôzne stavy a kliknutím medzi nimi prepínať. Nastavením jej hodnoty sa tlačidlu priradí predvolený stav. <br/>Musí obsahovať dva podradené elementy so `slot` s hodnotou `toggle`a tiež vlastnosť `state`, ktorou tlačidlu určíte dostupné hodnoty stavu. -->

Vlastnosť `toggle` umožňuje priradiť tlačidlu dva rôzne stavy a kliknutím medzi nimi prepínať. Nastavením hodnoty sa tlačidlu priradí predvolený stav. <br/>Pre nastavenie dostupných stavov je potrebné pridať tlačidlu dva podradené elementy so slotom s hodnotou `toggle`a tiež s vlastnosťou `state`, ktorá tlačidlu určí samotnú hodnotu stavu.

import Toggle from '@site/static/usage/v1/button/toggle/index.md';

<Toggle />

## Tvar tlačidla

Vlastnosť `round` umožňuje upraviť tvar tlačidla. V predvolenom nastavení sú tlačidlá obdĺžnikové s malým zaoblením okrajov. Pridaním tohto atribútu sa zaoblenie tlačidla zväčší.

import Shape from '@site/static/usage/v1/button/shape/index.md';

<Shape />

## Výplň tlačidla

Vlastnosť `Fill` určuje výplň pozadia a okraja tlačidla. V predvolenom nastavení majú tlačidlá jednoliate pozadie `solid`. Ďalšie možnosti sú `link` a `outline`.

import Fill from '@site/static/usage/v1/button/fill/index.md';

<Fill />

## Veľkosť tlačidla

Vlastnosť `size` určuje veľkosť tlačidla. Nastavením tejto vlastnosti sa zmení vnútorné odsadenie tlačidla.

import Size from '@site/static/usage/v1/button/size/index.md';

<Size />

## Ikony tlačidla

V tlačidlách je možné zobraziť aj ikony vložením elementu `wj-icon`. Ich umiestnenie v rámci tlačidla upravíte pomocou atribútu slot a vlastnosti `start` alebo `end`. Ak tlačidlo neobsahuje žiaden text a skladá sa len z ikony, použite vlastnosť `icon-only`.

Viac informácií o ikonách nájdete na stránke **[Ikony](https://www.notion.so/Icon-d49ef040cef84b13b8dd3721d84d5397?pvs=21).**

import Icons from '@site/static/usage/v1/button/icons/index.md';

<Icons />

## Úprava štýlov

### Farby tlačidla

Vlastnosť `color` upravuje farbu pozadia a okraja tlačidla. Nastavením tejto hodnoty sa farba tlačidla zmení na jednu z farieb prednastavenej farebnej palety. V predvolenom nastavení majú tlačidlá pozadie `primary`.

import Colors from '@site/static/usage/v1/button/theming/colors/index.md';

<Colors />

### Farba okrajov tlačidla

Vlastnosť `color` je možné kombinovať spolu s vlastnosťou `fill`.

import Outline from '@site/static/usage/v1/button/outline/index.md';

<Outline />

### CSS Custom Vlastnosti

import Custom from '@site/static/usage/v1/button/theming/css-properties/index.md';

<Custom />

## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />
