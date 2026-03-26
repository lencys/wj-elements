---
title: 'TabGroup'
---

import Props from '@ionic-internal/component-api/v1-sk/tab-group/props.md';
import Events from '@ionic-internal/component-api/v1-sk/tab-group/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/tab-group/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/tab-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/tab-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/tab-group/slots.md';

<head>
  <title>TabGroup | Navigácia založená na záložkách</title>
  <meta
    name="description"
    content="TabGroup zobrazuje navigáciu založenú na záložkách, ktorá umožňuje používateľom prepínať sa a zobrazovať rôzne časti obsahu aplikácie bez potreby prechádzať na inú stránku."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

TabGroup zobrazuje navigáciu založenú na záložkách, ktorá umožňuje používateľom prepínať sa a zobrazovať rôzne časti obsahu aplikácie bez potreby prechádzať na inú stránku. Skladá sa z jednotlivých záložiek [Tab](tab.md) a [Panelov](tab-panel.md), ktoré po kliknutí na záložku zobrazia jej obsah.
TabGroup element podporuje viacero variantov vzhľadu pomocou atribútu `variant`.

## Základné použitie

Element `Card` bol použitý len za účelom tejto ukážky.

import Basic from '@site/static/usage/v1/tab-group/basic/index.md';

<Basic />

## Varianty umiestnenia tabov

Pridaním vlastnosti `variant` je možné zmeniť umiestnenie tabov. Podporované sú hodnoty `start`, `end` a `bottom`.

### Start

Ukážka zarovnáva taby na začiatok, čo je vhodné pri kratšom počte záložiek a klasickom desktopovom layoute.

import Start from '@site/static/usage/v1/tab-group/start/index.md';

<Start />

### End

Ukážka zarovnáva taby na koniec kontajnera, takže je vidieť, ako sa mení rytmus a vizuál celej navigácie.

import End from '@site/static/usage/v1/tab-group/end/index.md';

<End />

### Bottom

Ukážka presúva tab navigation na spodnú hranu, čo sa hodí napríklad pre mobilné alebo aplikáciové vzory.

import Bottom from '@site/static/usage/v1/tab-group/bottom/index.md';

<Bottom />


## Kedy použiť

Použite `wje-tab-group`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

## Kedy nepoužiť

Nepoužívajte viac paralelných navigačných vzorov, ktoré si navzájom konkurujú.

## Prístupnosť

Zabezpečte jasné active/selected stavy, predvídateľné poradie tabulátora a pomenovanie ovládacích prvkov.

## Odporúčané postupy

- Držte URL a UI stav v synchronizácii, aby bola navigácia reprodukovateľná.
- Používajte konzistentné názvoslovie položiek naprieč menu, breadcrumbom a tabmi.
- Pri hlbokých štruktúrach pridajte pomocný kontext (breadcrumb, nadpis, ikony).

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
