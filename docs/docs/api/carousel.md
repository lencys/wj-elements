---
title: 'Carousel'
---

import Props from '@ionic-internal/component-api/v1-sk/carousel/props.md';

import Events from '@ionic-internal/component-api/v1-sk/carousel/events.md';

import Methods from '@ionic-internal/component-api/v1-sk/carousel/methods.md';

import Parts from '@ionic-internal/component-api/v1-sk/carousel/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/carousel/custom-props.md';

import Slots from '@ionic-internal/component-api/v1-sk/carousel/slots.md';
import EncapsulationPill from '@components/page/api/EncapsulationPill';
import Basic from '@site/static/usage/v1/carousel/basic/index.md';
import Pagination from '@site/static/usage/v1/carousel/pagination/index.md';
import NoLoop from '@site/static/usage/v1/carousel/no-loop/index.md';
import Dialog from '@site/static/usage/v1/carousel/dialog/index.md';
import Thumbnail from '@site/static/usage/v1/carousel/thumbnail/index.md';
import Spacing from '@site/static/usage/v1/carousel/spacing/index.md';
import FivePerPage from '@site/static/usage/v1/carousel/five-per-page/index.md';
import ContinuousLoop from '@site/static/usage/v1/carousel/continuous-loop/index.md';
import CustomLayout from '@site/static/usage/v1/carousel/custom-layout/index.md';
import Split from '@site/static/usage/v1/carousel/split/index.md';

<head>
  <title>Card | Kontajner formátu karty</title>
  <meta
    name="description"
    content="**Carousel** je element, ktorý zobrazuje viacero položiek, ako sú obrázky alebo aktualizácie noviniek, rotujúcim spôsobom."
  />
</head>

<EncapsulationPill type="shadow" />

**Carousel** je element, ktorý zobrazuje viacero položiek, ako sú obrázky alebo aktualizácie noviniek, rotujúcim spôsobom.

## Základné použitie

Ukážka ukazuje najjednoduchší carousel s niekoľkými slidmi a predvoleným ovládaním. Sledujte hlavne základné správanie prechodu medzi položkami.

<Basic />

## Paginaton

Ukážka zapína pagination prvky, aby bolo jasné, ako sa používateľ môže presúvať medzi slidmi aj bez gest alebo šípok.

<Pagination />

## No loop

Ukážka vypína nekonečné cyklenie. Vďaka tomu prvý a posledný slide fungujú ako skutočné hranice karuselu.

<NoLoop />

## Dialog

Ukážka vkladá carousel do dialógu, takže je dobre vidieť správanie komponentu v obmedzenom priestore overlayu.

<Dialog />

## Nahľadový obrázok

Ukážka dopĺňa carousel o náhľadové miniatúry, ktoré fungujú ako sekundárna navigácia medzi slidmi.

<Thumbnail />

## Odsadenie

Ukážka pracuje s rozostupmi medzi slidmi a okolo viewportu, aby bolo vidieť, ako sa mení rytmus a hustota layoutu.

<Spacing />

## Päť slidov na stránku

Ukážka používa `slide-per-page="5"`, takže carousel na jednom viewporte zobrazí presne päť sibling itemov. Šírka sa počíta aj s gapom medzi itemami, takže päť kariet spolu vyplní 100 % šírky bez overflowu. Pri klasickom `loop` sa po poslednom plnom view carousel vráti späť na začiatok.

<FivePerPage />

## Kontinuálny loop

Ak pridáte `continuous-loop`, viac-itemový carousel sa na hranách správa ako nekonečný pás. Za `10` tak môžeš vidieť `1 2 3 4`, namiesto okamžitého skoku späť na prvý plný view.

<ContinuousLoop />

## Jeden slide s vlastným layoutom

Ukážka necháva `slide-per-page="1"` a do jedného `wje-carousel-item` vkladá vlastný grid s piatimi kartami. Wrapper sa natiahne na plnú šírku slide-u bez potreby fixnej šírky carouselu alebo dodatočných width hackov v aplikácii.

<CustomLayout />

## Rozdelenie

Ukážka rozdeľuje priestor tak, aby bolo naraz vidieť viac slidov. Hodí sa pre galérie alebo prehľady s vyššou informačnou hustotou.

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
