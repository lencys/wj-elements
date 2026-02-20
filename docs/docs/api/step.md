---
title: 'Step'
---

import Props from '@ionic-internal/component-api/v1-sk/step/props.md';
import Events from '@ionic-internal/component-api/v1-sk/step/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/step/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/step/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/step/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/step/slots.md';

<head>
  <title>Step | Jeden krok v rámci komponentu Stepper</title>
  <meta
    name="description"
    content="Komponent Step zobrazuje jeden krok v rámci komponentu Stepper. Je to podriadený komponent, ktorý sa používa na definovanie jednotlivých krokov v rámci sekvencie."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `Step` zobrazuje jeden krok v rámci komponentu [Stepper](stepper.md). Je to podriadený komponent, ktorý sa používa na definovanie jednotlivých krokov v rámci sekvencie.

:::note
Pre príklady použitia komponentu `Step` prejdite na dokumentáciu [**Stepper**](stepper.md).
:::


## Kedy použiť

Použite `wje-step`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
