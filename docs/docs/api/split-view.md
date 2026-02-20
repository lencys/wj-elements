---
title: 'SplitView'
---

import Props from '@ionic-internal/component-api/v1-sk/split-view/props.md';
import Events from '@ionic-internal/component-api/v1-sk/split-view/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/split-view/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/split-view/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/split-view/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/split-view/slots.md';

<head>
  <title>SplitView | jednotlivé voliteľné možnosti v rámci komponentu Select</title>
  <meta
    name="description"
    content="Element Split view je všestranný komponent, ktorý umožňuje vytvoriť delené zobrazenie s dvoma alebo viacerými sekciami."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Split view je všestranný komponent, ktorý umožňuje vytvoriť delené zobrazenie s dvoma alebo viacerými sekciami. Poskytuje deliaci posuvník, ktorý umožňuje dynamicky meniť veľkosť sekcií. Podporované sú dve orientácie – vertikálna a horizontálna a vnorením ďalšieho SplitView vytvoriť zložitejšie zobrazenia.

## Základné použitie

import Basic from '@site/static/usage/v1/split-view/basic/index.md';

<Basic />

## Vertikálny SplitView

Podporované sú dve orientácie. Pridaním atribútu `vertical` zobrazíte vertikálny SplitView.

import Vertical from '@site/static/usage/v1/split-view/vertical/index.md';

<Vertical />

## Min/Max

Pridaním vlastnosti `min` a `max` s hodnotami `“0”` až `“100”` obmedzíte škálu pohybu oddeľovača.

import MinMax from '@site/static/usage/v1/split-view/min-max/index.md';

<MinMax />

## Disabled

Pridaním atribút `disabled` deaktivuje možnosť posúvania oddeľovača.

import Disabled from '@site/static/usage/v1/split-view/disabled/index.md';

<Disabled />

## Vnorený SplitView

Vnorením ďalšieho SplitView je možné vytvoriť zložitejšie zobrazenia.

import Split from '@site/static/usage/v1/split-view/split/index.md';

<Split />

## Úprava štýlov

import Custom from '@site/static/usage/v1/split-view/custom/index.md';

<Custom />


## Kedy použiť

Použite `wje-split-view` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.

## Kedy nepoužiť

Nepoužívajte ho na riešenie biznis logiky ani na stavovú orchestráciu komponentov.

## Prístupnosť

Zachovajte semantiku dokumentu (`header`, `main`, `aside`, `footer`) a logické poradie fokusovateľných prvkov.

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
