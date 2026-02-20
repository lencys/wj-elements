---
title: 'Timeline Item'
---

import Props from '@ionic-internal/component-api/v1-sk/timeline-item/props.md';
import Events from '@ionic-internal/component-api/v1-sk/timeline-item/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/timeline-item/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/timeline-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/timeline-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/timeline-item/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Stránka pre `wje-timeline-item` bola automaticky doplnená, aby dokumentácia pokrývala aktuálnu verziu komponentov.
Detailné návody na použitie a odporúčania doplníme v ďalšej obsahovej fáze.


## Kedy použiť

Použite `wje-timeline-item`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

## Kedy nepoužiť

Nepoužívajte viac paralelných navigačných vzorov, ktoré si navzájom konkurujú.

## Prístupnosť

Zabezpečte jasné active/selected stavy, predvídateľné poradie tabulátora a pomenovanie ovládacích prvkov.

## Odporúčané postupy

- Držte URL a UI stav v synchronizácii, aby bola navigácia reprodukovateľná.
- Používajte konzistentné názvoslovie položiek naprieč menu, breadcrumbom a tabmi.
- Pri hlbokých štruktúrach pridajte pomocný kontext (breadcrumb, nadpis, ikony).

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
