---
title: 'Grid'
---

import Props from '@ionic-internal/component-api/v1-sk/grid/props.md';
import Events from '@ionic-internal/component-api/v1-sk/grid/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/grid/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/grid/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/grid/slots.md';

<head>
  <title>Grid | Flexibilný spôsob vytvárania responzívnych layoutov</title>
  <meta
    name="description"
    content="Systém Grid je flexibilný spôsob vytvárania responzívnych rozvrhnutí(layoutov) rozdelením obrazovky na mriežku riadkov Rows a stĺpcov Cols."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Systém Grid je flexibilný spôsob vytvárania responzívnych rozvrhnutí rozdelením obrazovky na mriežku riadkov [Rows](./row) a stĺpcov [Cols](./col). Grid je založený na flexboxe, používa 12 stĺpcov a podporuje 6 breakpointov: `xs`, `sm`, `md`, `lg`, `xl` a `xxl`.

## Prehľad funkcií

**Responzivita**: Grid umožňuje vytvárať responzívne rozvrhnutia (layouty), ktoré sa prispôsobujú rôznym veľkostiam a orientáciám obrazovky.

**Nesting** : Vývojári môžu vkladať viacero elementov wje-grid do seba a vytvárať tak zložitejšie rozvrhnutia. To umožňuje väčšiu flexibilitu pri usporiadaní obsahu.

**Breakpointy**: Grid podporuje breakpointy pre telefóny, tablety aj desktop vrátane väčších obrazoviek cez `xxl`.

**Odsadené stĺpce (Offset)**: Vývojári môžu stĺpce odsadiť a vytvoriť tak vizuálne rozdiely v rozložení. To je užitočné pri vytváraní návrhov s rozloženým alebo asymetrickým usporiadaním.

**Automatické rozloženie**: Grid poskytuje možnosti automatického prispôsobenia veľkosti stĺpcov na základe obsahu alebo dostupného priestoru. To môže pomôcť optimalizovať rozloženie pre rôzne scenáre.

## Predvolené Breakpointy

V tabuľke nižšie nájdete predvolené breakpointy gridu.

## Základné použitie

Predvolene majú stĺpce v rámci jedného riadku rovnakú šírku na všetkých zariadeniach.

import Basic from '@site/static/usage/v1/grid/basic/index.md';

<Basic />

## Veľkosť stĺpcov: auto

Nastavením `size` na `auto` sa stĺpec prispôsobuje šírke svojho obsahu a susedné stĺpce automaticky upravia svoju šírku tak, aby vyplnili zostávajúce miesto v riadku.

import SizeAuto from '@site/static/usage/v1/grid/size-auto/index.md';

<SizeAuto />

## Špecifická veľkosť stĺpcov

Nastavením `size` na špecifickú veľkosť stĺpec zaberie určený počet stĺpcov riadku. Susedné stĺpce automaticky upravia svoju šírku tak, aby vyplnili zostávajúce miesto v riadku.

import Size from '@site/static/usage/v1/grid/size/index.md';

<Size />

## Responzívna veľkosť stĺpcov

Atribút `size` je možné nastaviť aj špecifickým breakpointom pridaním jeho prefixu. V tomto prípade sa veľkosť stĺpca upraví až po dosiahnutí nastaveného breakpointu.

import SizeResponsive from '@site/static/usage/v1/grid/size-responsive/index.md';

<div className="large">

<SizeResponsive />

</div>

## Offset

**Offset** umožňuje vytvoriť prázdny priestor v layoute tým, že posunie daný stĺpec doprava. Atribút offset prevezme číselnú hodnotu, ktorá predstavuje počet stĺpcov, o ktoré sa má cieľový stĺpec posunúť.

import Offset from '@site/static/usage/v1/grid/offset/index.md';

<Offset />

## Responzívny Offset

Pridaním breakpointu do offsetu sa posun stĺpca upraví až po dosiahnutí zvoleného breakpointu.

import OffsetResponsive from '@site/static/usage/v1/grid/offset-responsive/index.md';

<OffsetResponsive />

## Order

Poradie stĺpcov je možné upravovať pridaním atribútu `order` a nastavením jeho hodnoty na pozíciu v mriežke, na ktorú má byť umiestnený.

import Order from '@site/static/usage/v1/grid/order/index.md';

<Order />

## Zarovnanie

### Vertikálne Zarovnanie

Stĺpce je možné zarovnať vertikálne pomocou CSS tried `wje-align-items-start`, `wje-align-items-center`, `wje-align-items-end`.

import VerticalAlignment from '@site/static/usage/v1/grid/vertical-alignment/index.md';

<div className="xlarge">

<VerticalAlignment />

</div>

### Horizontálne Zarovnanie

Stĺpce je možné zarovnať horizontálne pomocou CSS tried `wje-justify-content-start`, `wje-justify-content-center`, `wje-justify-content-end`, `wje-justify-content-between`, `wje-justify-content-around`.

import HorizontalAlignment from '@site/static/usage/v1/grid/horizontal-alignment/index.md';

<div className="large">

<HorizontalAlignment />

</div>


## Kedy použiť

Použite `wje-grid`, keď potrebujete responzívne rozloženie obsahu v rámci sekcie alebo stránky.

## Kedy nepoužiť

Grid nepoužívajte na riešenie biznis logiky ani na orchestráciu stavu. Slúži výhradne na layout.

## Prístupnosť

Dbajte na to, aby vizuálne poradie stĺpcov neporušilo logické poradie obsahu pre klávesnicu a čítačky obrazovky.

## Odporúčané postupy

- Najprv definujte desktop/mobile breakpoints a až potom dolaďujte detaily.
- Preferujte konzistentné spacing tokeny pred ad-hoc margin/padding hodnotami.
- Pri layoutoch s overflow vždy otestujte klávesnicovú navigáciu a čítačky.

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
