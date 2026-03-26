---
title: 'Item'
---

import Props from '@ionic-internal/component-api/v1-sk/item/props.md';
import Events from '@ionic-internal/component-api/v1-sk/item/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/item/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/item/slots.md';

<head>
  <title>Item | Bloky List elementu s rôznorodým obsahom</title>
  <meta
    name="description"
    content="Komponenty Item sú bloky, ktoré môžu obsahovať rôzne typy obsahu vrátane textu, ikon, avatarov, obrázkov, inputov a iných štandardných alebo custom elementov."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponenty Item sú bloky, ktoré môžu obsahovať rôzne typy obsahu vrátane textu, ikon, avatarov, obrázkov, inputov a iných štandardných alebo custom elementov. Item elementy sa zvyčajne nachádzajú vo vnútri [List](./list) elementov.

## Základné použitie

Ukážka ukazuje najbežnejšiu podobu `wje-item`, teda jeden obsahový riadok s predvoleným rozložením a bez doplnkových variánt.

import Basic from '@site/static/usage/v1/item/basic/index.md';

<Basic />

## Oddeľovacie čiary

Atribút `lines` riadi, ako sa vykreslí spodné oddelenie položky. Hodí sa to najmä v zoznamoch, kde potrebujete jemnejšie alebo naopak výraznejšie vizuálne oddelenie obsahu.

import Lines from '@site/static/usage/v1/item/lines/index.md';

<Lines />

## Použitie s obrázkami

Ukážka kombinuje item s médiom, aby bolo jasné, ako vedľa seba funguje obrázok alebo náhľad a textový obsah.

import Media from '@site/static/usage/v1/item/media/index.md';

<Media />

## Použitie s tlačidlami

Ukážka pridáva do itemu akčné tlačidlá, takže je vidieť odporúčaný vzor pre riadok, ktorý má aj rýchle akcie.

import Buttons from '@site/static/usage/v1/item/buttons/index.md';

<Buttons />

## Použitie s ikonami

Ukážka sa sústreďuje na prácu s ikonami v iteme a na ich čitateľné zarovnanie voči textu a doplnkovému obsahu.

import Icons from '@site/static/usage/v1/item/icons/index.md';

<Icons />


## Kedy použiť

Použite `wje-item` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

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
