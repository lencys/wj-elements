---
title: 'List'
---

import Props from '@ionic-internal/component-api/v1-sk/list/props.md';
import Events from '@ionic-internal/component-api/v1-sk/list/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/list/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/list/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/list/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/list/slots.md';

<head>
  <title>List | Komponent zobrazenia zoznamu položiek</title>
  <meta
    name="description"
    content="Komponent List (Zoznam) sa skladá z viacerých elementov Item (položiek) a môže obsahovať text, tlačidlá, prepínače, ikony, náhľady obrázkov, a mnoho iného."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `List` (Zoznam) sa skladá z viacerých elementov [Item](./item) (položiek) a môže obsahovať text, tlačidlá, prepínače, ikony, náhľady obrázkov, a mnoho iného. Listy vo všeobecnosti obsahujú položky s rovnakým obsahom a zoskupujú ich do väčšieho celku.

## Základné použitie

import Basic from '@site/static/usage/v1/list/basic/index.md';

<Basic />

## Vnorený list

Nastavením hodnoty vlastnosti inset na true sa do okolia elementu pridá margin a vznikne tak vnorený zoznam.

import Inset from '@site/static/usage/v1/list/inset/index.md';

<Inset />

## Oddeľovanie čiary

Vlastnosť `lines` upravuje spodný okraj itemov. Nastavením tejto vlastnosti na hodnotu "`none`" sa nezobrazia žiadne okraje medzi položkami zoznamu.

import Lines from '@site/static/usage/v1/list/lines/index.md';

<Lines />


## Kedy použiť

Použite `wje-list` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

## Kedy nepoužiť

Nepoužívajte ho ako náhradu za štruktúrované dáta tam, kde je potrebná presná interakcia.

## Prístupnosť

Doplňte alternatívny text pre obrázky, čitateľné kontrasty a textové ekvivalenty pre ikony bez popisu.

## Odporúčané postupy

- Komprimujte médiá a používajte lazy loading pri veľkých zoznamoch.
- Pri kartách a zoznamoch držte konzistentné informačné priority.
- Neopakujte rovnakú informáciu súčasne textom aj ikonou bez pridanej hodnoty.

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
