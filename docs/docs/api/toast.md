---
title: 'Toast'
---

import Props from '@ionic-internal/component-api/v1-sk/toast/props.md';
import Events from '@ionic-internal/component-api/v1-sk/toast/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/toast/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/toast/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/toast/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/toast/slots.md';

<head>
  <title>Toast | Nenápadný spôsob zobrazovania krátkych oznámení</title>
  <meta
    name="description"
    content="Komponent Toast poskytuje nenápadný spôsob zobrazovania krátkych oznámení používateľovi. Sú navrhnuté tak, aby sa objavovali a mizli plynulo, čím sa zabezpečí, že sa dôležité informácie."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent Toast poskytuje nenápadný spôsob zobrazovania krátkych oznámení používateľovi. Sú navrhnuté tak, aby sa objavovali a mizli plynulo, čím sa zabezpečí, že sa dôležité informácie dostanú k používateľom bez toho, aby boli rušivé.


## Kedy použiť

Použite `wje-toast`, keď potrebujete používateľovi okamžite komunikovať stav, výsledok akcie alebo ďalší krok.

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
