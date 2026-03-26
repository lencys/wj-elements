---
title: 'Textarea'
---

import Props from '@ionic-internal/component-api/v1-sk/textarea/props.md';
import Events from '@ionic-internal/component-api/v1-sk/textarea/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/textarea/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/textarea/slots.md';

<head>
  <title>Textarea | Element textarea rozšírený o nové funkcie</title>
  <meta
    name="description"
    content="Textarea rozširuje možnosti štandardného HTML textarea elementu. Pridáva štýly pre dosiahnutie vizuálne konzistentného používateľského rozhrania a ponúka funkcie ako napríklad auto-height -."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Textarea rozširuje možnosti štandardného HTML `textarea` elementu. Pridáva štýly pre dosiahnutie vizuálne konzistentného používateľského rozhrania a ponúka funkcie ako napríklad auto-height - prispôsobenie výšky elementu vloženému textu, alebo tiež počítadlo vložených znakov.

## Základné použitie

Ukážka zobrazuje textarea v jej predvolenom stave bez počítadla, automatickej výšky alebo ďalších úprav.

import BasicPlayground from '@site/static/usage/v1/textarea/basic/index.md';

<BasicPlayground />

## Standard

Pridaním atribútu `standard` sa zobrazí textarea v štýle štandardného HTML textarea elementu.

import Standard from '@site/static/usage/v1/textarea/standard/index.md';

<Standard />

## Counter

Pridaním atribútu `counter` sa pod textareou zobrazí počítadlo zobrazujúce počet vložených znakov a ich maximálny povolený počet. Je potrebné použitie v kombinácii s vlastnosťou `max-length`. V opačnom prípade bude maximálny povolený počet nastavený na `1000`.

import Counter from '@site/static/usage/v1/textarea/counter/index.md';

<Counter />

## Resize (none)

Vlastnosť `resize` určuje správanie zmeny veľkosti elementu. Ak je nastavená na hodnotu `none`, veľkosť poľa zostane fixná.

import Resize from '@site/static/usage/v1/textarea/resize/index.md';

<Resize />

## Resize (auto)

Ak je vlastnosť `resize` nastavená na hodnotu `auto`, automaticky sa prispôsobí veľkosť elementu vloženému obsahu.

import AutoHeight from '@site/static/usage/v1/textarea/auto-height/index.md';

<AutoHeight />

## Disabled

Pri vloženom atribúte `disabled` do elementu textarea nebude možné písať.

import Disabled from '@site/static/usage/v1/textarea/disabled/index.md';

<Disabled />


## Kedy použiť

Použite `wje-textarea`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.

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
