---
title: 'Button'
---

import Props from '@ionic-internal/component-api/v1-sk/button/props.md';
import Events from '@ionic-internal/component-api/v1-sk/button/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/button/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/button/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/button/slots.md';

<head>
  <title>Button | Tlačidlo</title>
  <meta
    name="description"
    content="Tlačidlá sú klikateľný element, ktorý umožňuje zobraziť text, ikonu, prípadne oboje. Tlačidlá si je možné jednoducho prispôsobiť použitím rôznych atribútov a CSS vlastností."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tlačidlá sú klikateľný element, ktorý umožňuje zobraziť text, ikonu, prípadne oboje. Tlačidlá si je možné jednoducho prispôsobiť použitím rôznych atribútov a CSS vlastností.

## Základné použitie

Ak chcete použiť komponent Button, zahrňte ho do HTML s požadovanými atribútmi. Pridaním atribútu `disabled` sa tlačidlo stane neaktívnym a nie je možné naň kliknúť.

import Basic from '@site/static/usage/v1/button/basic/index.md';

<Basic />

## Tooltip

Vlastnosť `tooltip` umožňuje zobraziť textový popis tlačidla po prejdení myšou. Pre zobrazenie textu je potrebné pridať tlačidlu atribút `tooltip` s textovým obsahom.
Doplnením atribútu `tooltip-placement` je možné určiť pozíciu zobrazenia textu.

import Tooltip from '@site/static/usage/v1/button/tooltip/index.md';

<Tooltip />

## Toggle

Vlastnosť `toggle` umožňuje priradiť tlačidlu dva rôzne stavy a kliknutím medzi nimi prepínať. Nastavením hodnoty sa tlačidlu priradí predvolený stav. <br/>Pre nastavenie dostupných stavov je potrebné pridať tlačidlu dva podradené elementy so slotom s hodnotou `toggle`a tiež s vlastnosťou `state`, ktorá tlačidlu určí samotnú hodnotu stavu.

import Toggle from '@site/static/usage/v1/button/toggle/index.md';

<Toggle />

## Caret

Vlastnosť `caret` umožňuje zobraziť šípku na tlačidle. Pre zobrazenie šípky je potrebné pridať tlačidlu atribút `caret`.

import Caret from '@site/static/usage/v1/button/caret/index.md';

<Caret />

## Tvar tlačidla

Vlastnosť `round` umožňuje upraviť tvar tlačidla. V predvolenom nastavení sú tlačidlá obdĺžnikové s malým zaoblením okrajov. Pridaním tohto atribútu sa zaoblenie tlačidla zväčší.

import Shape from '@site/static/usage/v1/button/shape/index.md';

<Shape />

## Tlačidlo formulára

Vlastnosti `submit` a `reset` umožňujú použiť tlačidlo na odoslanie alebo resetovanie formulára. Tlačidlo s vlastnosťou `submit` odošle formulár, ktorý je s ním prepojený. Tlačidlo s vlastnosťou `reset` obnoví všetky hodnoty formulára.

import FormButton from '@site/static/usage/v1/button/form-button/index.md';

<FormButton />

## Výplň tlačidla

Vlastnosť `Fill` určuje výplň pozadia a okraja tlačidla. V predvolenom nastavení majú tlačidlá jednoliate pozadie `solid`. Ďalšie možnosti sú `link` a `outline`.

import Fill from '@site/static/usage/v1/button/fill/index.md';

<Fill />

## Veľkosť tlačidla

Vlastnosť `size` určuje veľkosť tlačidla. Nastavením tejto vlastnosti sa zmení vnútorné odsadenie tlačidla.

import Size from '@site/static/usage/v1/button/size/index.md';

<Size />

## Ikony tlačidla

V tlačidlách je možné zobraziť aj ikony vložením elementu `wje-icon`. Ich umiestnenie v rámci tlačidla upravíte pomocou atribútu slot a vlastnosti `start` alebo `end`. Ak tlačidlo neobsahuje žiaden text a skladá sa len z ikony, použite vlastnosť `icon-only`.

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

### CSS vlastné premenné

Ukážka sa sústreďuje na vizuálne ladenie. Vzhľad mení cez CSS premenné alebo vlastné štýly bez potreby meniť HTML štruktúru.

import Custom from '@site/static/usage/v1/button/theming/css-properties/index.md';

<Custom />


## Kedy použiť

Použite `wje-button`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

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
