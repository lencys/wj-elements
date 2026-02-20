---
title: 'RadioGroup'
---

import Props from '@ionic-internal/component-api/v1-sk/radio-group/props.md';
import Events from '@ionic-internal/component-api/v1-sk/radio-group/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/radio-group/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/radio-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/radio-group/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/radio-group/slots.md';

<head>
  <title>RadioGroup | Kontajner pre rádiové tlačidlá</title>
  <meta
    name="description"
    content="RadioGroup slúži ako kontajner pre skupinu radio tlačidiel. Umožňuje používateľom vybrať jednu možnosť zo súboru možností, pričom sa zabezpečí, že v danom okamihu bude vybrané iba jedno."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

RadioGroup slúži ako kontajner pre skupinu [radio](./radio) tlačidiel.
Umožňuje používateľom vybrať jednu možnosť zo súboru možností, pričom sa zabezpečí, že v danom okamihu bude vybrané iba jedno rádiové tlačidlo v rámci skupiny. Komponent podporuje atribút `inline`, ktorý po nastavení usporiada rádiové tlačidlá v horizontálnom rozložení. Okrem toho programovo spravuje atribút `value`, ktorý reflektuje hodnotu práve vybraného rádiového tlačidla.


## Kedy použiť

Použite `wje-radio-group`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
