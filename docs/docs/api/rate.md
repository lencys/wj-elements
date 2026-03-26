---
title: 'Rate'
---

import Props from '@ionic-internal/component-api/v1-sk/rate/props.md';
import Events from '@ionic-internal/component-api/v1-sk/rate/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/rate/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/rate/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/rate/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/rate/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-rate` slúži na zadanie aj zobrazenie hodnotenia. Komponent podporuje celé aj desatinné kroky, readonly režim, disabled stav a vlastné ikony.

## Základné použitie

Najjednoduchší scenár je interaktívne hodnotenie s predvolenými hviezdičkami a maximom podľa atribútu `max`.

import Basic from '@site/static/usage/v1/rate/basic/index.md';

<Basic />

## Predvolená hodnota

Atribút `value` nastavuje počiatočnú alebo aktuálnu hodnotu hodnotenia. Hodí sa pri editácii existujúceho hodnotenia aj pri read-only zobrazení.

import Value from '@site/static/usage/v1/rate/value/index.md';

<Value />

## Presnosť hodnotenia

Ak potrebujete polovice alebo iné menšie kroky, použite atribút `precision`. Výsledné hover aj click správanie sa potom zaokrúhľuje podľa nastavenej presnosti.

import Precision from '@site/static/usage/v1/rate/precision/index.md';

<Precision />

## Read-only režim

Pri `readonly` zostáva hodnota viditeľná, ale používateľ ju už nemôže meniť. To je vhodné napríklad pri zobrazení už uloženého hodnotenia.

import ReadOnly from '@site/static/usage/v1/rate/read-only/index.md';

<ReadOnly />

## Disabled stav

Disabled stav blokuje interakciu aj hover feedback. Použite ho tam, kde je hodnotenie dočasne nedostupné alebo čaká na inú podmienku.

import Disabled from '@site/static/usage/v1/rate/disabled/index.md';

<Disabled />


## Kedy použiť

Použite `wje-rate`, keď používateľ hodnotí kvalitu, spokojnosť alebo preferenciu na malej škále.

## Kedy nepoužiť

Nepoužívajte ho tam, kde je potrebný presný číselný vstup alebo keď škála nemá pre používateľa jasný význam.

## Prístupnosť

Pri dôležitých rozhodnutiach doplňte hodnotenie aj textovým kontextom, aby používateľ rozumel škále aj aktuálnej hodnote. Readonly a disabled stav by mal byť zrozumiteľný aj bez hoveru.

## Odporúčané postupy

- Držte konzistentný význam škály, napríklad 1 až 5, naprieč celou aplikáciou.
- Ak používate vlastné ikony cez `icons`, zachovajte rovnakú vizuálnu logiku pre vyplnený aj nevyplnený stav.
- Pri zobrazení uloženého hodnotenia zvážte readonly režim namiesto disabled, ak má byť hodnota stále dobre čitateľná.

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
