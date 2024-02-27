---
title: SplitView
---

import Props from '@ionic-internal/component-api/v1/split-view/props.md';
import Events from '@ionic-internal/component-api/v1/split-view/events.md';
import Methods from '@ionic-internal/component-api/v1/split-view/methods.md';
import Parts from '@ionic-internal/component-api/v1/split-view/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/split-view/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/split-view/slots.md';


  <title>SplitView | jednotlivé voliteľné možnosti v rámci komponentu Select</title>
  <meta name="description" content="Element Option predstavuje jednotlivé voliteľné možnosti v rámci komponentu Select. Je obdobný štandardnému elementu HTML select a umožňuje používateľom vykonať jeden alebo viacero výberov na základe konfigurácie komponentu Select." />


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
