---
title: 'Popup'
---

import Props from '@ionic-internal/component-api/v1-sk/popup/props.md';
import Events from '@ionic-internal/component-api/v1-sk/popup/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/popup/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/popup/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/popup/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/popup/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Stránka pre `wje-popup` bola automaticky doplnená, aby dokumentácia pokrývala aktuálnu verziu komponentov.
Detailné návody na použitie a odporúčania doplníme v ďalšej obsahovej fáze.


## Kedy použiť

Použite `wje-popup`, keď potrebujete používateľovi okamžite komunikovať stav, výsledok akcie alebo ďalší krok.

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
