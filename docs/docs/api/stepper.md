---
title: 'Stepper'
---

import Props from '@ionic-internal/component-api/v1-sk/stepper/props.md';
import Events from '@ionic-internal/component-api/v1-sk/stepper/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/stepper/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/stepper/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/stepper/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/stepper/slots.md';

<head>
  <title>Stepper | Tlačidlo záložkovej navigácie</title>
  <meta
    name="description"
    content="Komponent Stepper zobrazuje pokrok prostredníctvom očíslovaných krokov. Poskytuje workflow podobný sprievodcovi. Steppery zobrazujú pokrok prostredníctvom sekvencie očíslovaných krokov."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `Stepper` zobrazuje pokrok prostredníctvom očíslovaných krokov. Poskytuje workflow podobný sprievodcovi.
Steppery zobrazujú pokrok prostredníctvom sekvencie očíslovaných krokov.

## Základné použitie

Ukážka predstavuje stepper v jeho základnom flow s predvolenou navigáciou medzi krokmi.

import Basic from '@site/static/usage/v1/stepper/basic/index.md';

<Basic />

## Disabled (Deaktivované) kroky

Ukážka blokuje niektoré kroky steppera, takže je vidieť, ako komponent komunikuje nedostupnú navigáciu.

import Disabled from '@site/static/usage/v1/stepper/disabled/index.md';

<Disabled />

## Vlastné tlačidlá

Ukážka nahrádza predvolené ovládanie vlastnými tlačidlami, čo sa hodí pri zložitejších formulároch alebo wizard flow.

import Custom from '@site/static/usage/v1/stepper/custom/index.md';

<Custom />


## Kedy použiť

Použite `wje-stepper`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
