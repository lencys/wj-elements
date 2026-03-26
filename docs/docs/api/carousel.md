---
title: 'Carousel'
---

import Props from '@ionic-internal/component-api/v1-sk/carousel/props.md';

import Events from '@ionic-internal/component-api/v1-sk/carousel/events.md';

import Methods from '@ionic-internal/component-api/v1-sk/carousel/methods.md';

import Parts from '@ionic-internal/component-api/v1-sk/carousel/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/carousel/custom-props.md';

import Slots from '@ionic-internal/component-api/v1-sk/carousel/slots.md';

<head>
  <title>Card | Kontajner formátu karty</title>
  <meta
    name="description"
    content="**Carousel** je element, ktorý zobrazuje viacero položiek, ako sú obrázky alebo aktualizácie noviniek, rotujúcim spôsobom."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

**Carousel** je element, ktorý zobrazuje viacero položiek, ako sú obrázky alebo aktualizácie noviniek, rotujúcim spôsobom.

## Základné použitie

Ukážka ukazuje najjednoduchší carousel s niekoľkými slidmi a predvoleným ovládaním. Sledujte hlavne základné správanie prechodu medzi položkami.

import Basic from '@site/static/usage/v1/carousel/basic/index.md';

<Basic />

## Paginaton

Ukážka zapína pagination prvky, aby bolo jasné, ako sa používateľ môže presúvať medzi slidmi aj bez gest alebo šípok.

import Pagination from '@site/static/usage/v1/carousel/pagination/index.md';

<Pagination />

## No loop

Ukážka vypína nekonečné cyklenie. Vďaka tomu prvý a posledný slide fungujú ako skutočné hranice karuselu.

import NoLoop from '@site/static/usage/v1/carousel/no-loop/index.md';

<NoLoop />

## Dialog

Ukážka vkladá carousel do dialógu, takže je dobre vidieť správanie komponentu v obmedzenom priestore overlayu.

import Dialog from '@site/static/usage/v1/carousel/dialog/index.md';

<Dialog />

## Nahľadový obrázok

Ukážka dopĺňa carousel o náhľadové miniatúry, ktoré fungujú ako sekundárna navigácia medzi slidmi.

import Thumbnail from '@site/static/usage/v1/carousel/thumbnail/index.md';

<Thumbnail />

## Odsadenie

Ukážka pracuje s rozostupmi medzi slidmi a okolo viewportu, aby bolo vidieť, ako sa mení rytmus a hustota layoutu.

import Spacing from '@site/static/usage/v1/carousel/spacing/index.md';

<Spacing />

## Rozdelenie

Ukážka rozdeľuje priestor tak, aby bolo naraz vidieť viac slidov. Hodí sa pre galérie alebo prehľady s vyššou informačnou hustotou.

import Split from '@site/static/usage/v1/carousel/split/index.md';

<Split />


## Kedy použiť

Použite `wje-carousel` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
