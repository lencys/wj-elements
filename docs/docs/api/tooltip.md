---
title: 'Tooltip'
---

import Props from '@ionic-internal/component-api/v1-sk/tooltip/props.md';
import Events from '@ionic-internal/component-api/v1-sk/tooltip/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/tooltip/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/tooltip/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/tooltip/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/tooltip/slots.md';

<head>
  <title>Tooltip | Vyskakovacia nápoveda pri nájazde myšou</title>
  <meta
    name="description"
    content="Element Tooltip slúži na zobrazovanie vyskakovacej nápovedy pri nájazde myšou a je ho možné pripojiť k rôznym elementom webovej stránky."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element `Tooltip` slúži na zobrazovanie vyskakovacej nápovedy pri nájazde myšou a je ho možné pripojiť k rôznym elementom webovej stránky. Je ľahko prispôsobiteľný pomocou atribútov pre obsah a umiestnenie. Tooltip sa zobrazí, keď používateľ prejde myšou nad cieľový element, a zmizne, keď myš element opustí.

## Basic Usage

Ukážka zobrazuje tooltip v jeho základnom použití, teda ako krátky doplnkový kontext k cieľovému prvku.

import Basic from '@site/static/usage/v1/tooltip/basic/index.md';

<Basic />


## Kedy použiť

Použite `wje-tooltip`, keď potrebujete používateľovi okamžite komunikovať stav, výsledok akcie alebo ďalší krok.

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
