---
title: "Grid"
---

<head>
  <title>Grid: flexibilný spôsob vytvárania responzívnych layoutov</title>
  <meta name="description" content="Systém Grid je flexibilný spôsob vytvárania responzívnych rozvrhnutí(layoutov) rozdelením obrazovky na mriežku riadkov (rows) a stĺpcov (columns). Grid je založený na rozložení s 12 stĺpcami, podobne ako mnohé iné populárne grid systémy." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Systém Grid je flexibilný spôsob vytvárania responzívnych rozvrhnutí(layoutov) rozdelením obrazovky na mriežku riadkov [Rows](./row) a stĺpcov [Cols](./col). Grid je založený na flexboxe s rozložením rozdeleným na 12 stĺpcov s 5 responzívnymi breakpointami.

## Prehľad funkcií

**Responzivita**: Grid umožňuje vytvárať responzívne rozvrhnutia (layouty), ktoré sa prispôsobujú rôznym veľkostiam a orientáciám obrazovky.

**Nesting** : Vývojári môžu vkladať viacero elementov wj-grid do seba a vytvárať tak zložitejšie rozvrhnutia. To umožňuje väčšiu flexibilitu pri usporiadaní obsahu.

**Breakpointy**: Systém mriežky Grid podporuje rôzne body zlomu pre rôzne veľkosti obrazoviek, ako sú telefóny, tablety a stolové počítače. 

**Odsadené stĺpce (Offset)**: Vývojári môžu stĺpce odsadiť a vytvoriť tak vizuálne rozdiely v rozložení. To je užitočné pri vytváraní návrhov s rozloženým alebo asymetrickým usporiadaním.

**Automatické rozloženie**: Grid poskytuje možnosti automatického prispôsobenia veľkosti stĺpcov na základe obsahu alebo dostupného priestoru. To môže pomôcť optimalizovať rozloženie pre rôzne scenáre.

## Predvolené Breakpointy

V tabuľke nižšie nájdete predvolené breakpointy gridu.

| Breakpoint prefix | Minimálna šírka | CSS |
| --- | --- | --- |
| xs | 0px | @media (min-width: 0px) { ... } |
| sm | 576px | @media (min-width: 576px) { ... } |
| md | 768px | @media (min-width: 768px) { ... } |
| lg | 992px | @media (min-width: 992px) { ... } |
| xl | 1200px | @media (min-width: 1200px) { ... } |


## Základné použitie

By default, columns will take up equal width inside of a row for all devices and screen sizes.

import Basic from '@site/static/usage/v1/grid/basic/index.md';

<Basic />

## Veľkosť stĺpcov: auto

Nastavením `size` na `auto` sa  stĺpec prispôsobuje šírke svojho obsahu a susedné stĺpce automaticky upravia svoju šírku tak, aby vyplnili zostávajúce miesto v riadku.

import SizeAuto from '@site/static/usage/v1/grid/size-auto/index.md';

<SizeAuto />


## Špecifická veľkosť stĺpcov

Nastavením `size` na špecifickú veľkosť stĺpec zaberie určený počet stĺpcov riadku. Susedné stĺpce automaticky upravia svoju šírku tak, aby vyplnili zostávajúce miesto v riadku.

import Size from '@site/static/usage/v1/grid/size/index.md';

<Size />

## Responzívna veľkosť stĺpcov

Atribút `size` je možné nastaviť aj špecifickým breakpointom pridaním jeho prefixu. V tomto prípade sa veľkosť stĺpca upraví až po dosiahnutí nastaveného breakpointu.


import SizeResponsive from '@site/static/usage/v1/grid/size-responsive/index.md';

<div class="large">

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

Stĺpce je možné zarovnať vertikálne pomocou css tried `wj-align-items-start`, `wj-align-items-center`, `wj-align-items-end`.

import VerticalAlignment from '@site/static/usage/v1/grid/vertical-alignment/index.md';

<div class="xlarge">

<VerticalAlignment />

</div>

### Horizontálne Zarovnanie

Stĺpce je možné zarovnať horizontálne pomocou css tried `wj-justify-content-start`, `wj-justify-content-center`, `wj-justify-content-end`, `wj-justify-content-between`, `wj-justify-content-around`.

import HorizontalAlignment from '@site/static/usage/v1/grid/horizontal-alignment/index.md';

<div class="large">

<HorizontalAlignment />

</div>

## Atribúty a Vlastnosti

Pre tento komponent nie sú k dispozícii žiadne atribúty a vlastnosti.

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

Pre tento komponent nie sú k dispozícií žiadne CSS custom vlastnosti.

## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.