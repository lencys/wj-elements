---
title: 'Status'
---

import Props from '@ionic-internal/component-api/v1-sk/status/props.md';
import Events from '@ionic-internal/component-api/v1-sk/status/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/status/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/status/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/status/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/status/slots.md';

<head>
  <title>Status | Zobrazenie stavu alebo indikátora</title>
  <meta
    name="description"
    content="Komponent Status slúži na zobrazenie stavu alebo indikátora, ktorý môže byť použitý na vizuálne označenie rôznych stavov v aplikácii."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `Status` slúži na zobrazenie stavu alebo indikátora, ktorý môže byť použitý na vizuálne označenie rôznych stavov v aplikácii. Napríklad stav prihlásenia používateľa, stav pripojenia k sieti, alebo iné indikátory, ktoré sú dôležité pre používateľské rozhranie. 

Môže byť tiež prispôsobený nastavením rôznych veľkostí alebo typov, aby vyhovoval potrebám dizajnu aplikácie.

## Základné použitie

import Basic from '@site/static/usage/v1/status/basic/index.md';

<Basic />

## Sloty

import Slot from '@site/static/usage/v1/status/slots/index.md';

<Slot />

## Size

import Size from '@site/static/usage/v1/status/size/index.md';

<Size />

## Typy statusu

import Types from '@site/static/usage/v1/status/types/index.md';

<Types />


## Kedy použiť

Použite `wje-status`, keď potrebujete používateľovi okamžite komunikovať stav, výsledok akcie alebo ďalší krok.

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
