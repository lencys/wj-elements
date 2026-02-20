---
title: 'Progress bar'
---

import Props from '@ionic-internal/component-api/v1-sk/progress-bar/props.md';
import Events from '@ionic-internal/component-api/v1-sk/progress-bar/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/progress-bar/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/progress-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/progress-bar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/progress-bar/slots.md';

<head>
  <title>Progress Bar | Komponent na vizualizáciu priebehu</title>
  <meta
    name="description"
    content="Progress Bar element je komponent navrhnutý na vizualizáciu priebehu. Ponúka možnosť vytvárať prispôsobiteľné kruhové alebo rovné ukazovatele s rôznymi možnosťami konfigurácie."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Progress Bar element je komponent navrhnutý na vizualizáciu priebehu. Ponúka možnosť vytvárať prispôsobiteľné kruhové alebo rovné ukazovatele s rôznymi možnosťami konfigurácie.

## Základné použitie

Pre použitie komponentu Progress Bar, ho zahrňte do HTML s požadovanými atribútmi. Atribút progress nastaví percentuálnu hodnotu priebehu v progress bare.

import Basic from '@site/static/usage/v1/progress-bar/basic/index.md';

<Basic />

## Type

Podporované sú dva typy progress barov. Pridaním vlastnosti `type` s hodnotou `“circle”` zobrazíte progress bar s okrúhlym dizajnom.

import Type from '@site/static/usage/v1/progress-bar/type/index.md';

<Type />

## Label

Pre zobrazenie popisiek pri progress bare je potrebné vložiť do jeho vnútra `Label` element a definovať mu pozíciu pridaním atribútu `slot` s hodnotou `"start"` alebo `"end"`.

import Label from '@site/static/usage/v1/progress-bar/label/index.md';

<Label />

## Linecap

Pridaním vlastnosti `linecap` s hodnotou `“round”` zobrazíte ukazovateľ priebehu so zaobleným koncom.

import Linecap from '@site/static/usage/v1/progress-bar/linecap/index.md';

<Linecap />

## Radius

Atribút radius určí priemer okrúhleho progress baru.

import Radius from '@site/static/usage/v1/progress-bar/radius/index.md';

<Radius />

## Stroke

Atribút stroke definuje šírku progress baru v pixeloch.

import Stroke from '@site/static/usage/v1/progress-bar/stroke/index.md';

<Stroke />

## Progress bar s obrázkom

Pre zobrazenie obrázku vo vnútri elementu, je potrebné obrázok zaobaliť do progress bar elementu.

import Images from '@site/static/usage/v1/progress-bar/image/index.md';

<Images />

## Farebné varianty progress baru

Vlastnosť `color` upravuje farbu elementu. V predvolenom nastavení má element farbu `dark`. Nastavením tejto hodnoty sa farba elementu zmení na jednu z farieb prednastavenej farebnej palety.

import Colors from '@site/static/usage/v1/progress-bar/colors/index.md';

<Colors />


## Kedy použiť

Použite `wje-progress-bar`, keď potrebujete používateľovi okamžite komunikovať stav, výsledok akcie alebo ďalší krok.

## Kedy nepoužiť

Nepoužívajte viacero konkurenčných feedback kanálov naraz pre jednu udalosť.

## Prístupnosť

Status správy oznamujte cez vhodné ARIA live regióny a pri modálnych prvkoch spravujte fokus (open/close).

## Odporúčané postupy

- Vyberte závažnosť správ (info/success/warning/error) podľa reálneho dopadu na používateľa.
- Pri blokujúcich akciách preferujte potvrdenie iba tam, kde hrozí nevratná zmena.
- Nastavte konzistentné timeouty, aby používateľ stihol správu prečítať.

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
