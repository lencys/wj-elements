---
title: 'FormatDigital'
---

import Props from '@ionic-internal/component-api/v1-sk/format-digital/props.md';
import Events from '@ionic-internal/component-api/v1-sk/format-digital/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/format-digital/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/format-digital/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/format-digital/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/format-digital/slots.md';

<head>
  <title>Format Digital | Formátovanie číselných hodnôt</title>
  <meta
    name="description"
    content="Komponent FormatDigital je určený na formátovanie číselných hodnôt do ľudsky čitateľného digitálneho formátu s ohľadom na rôzne predpony jednotiek, ako sú kilo, mega, giga atď."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent FormatDigital je určený na formátovanie číselných hodnôt do ľudsky čitateľného digitálneho formátu s ohľadom na rôzne predpony jednotiek, ako sú kilo, mega, giga atď. Ponúka možnosti prispôsobenia jednotiek, štýlu zobrazenia jednotiek a podporuje lokalizáciu.

## Základné použitie

Ukážka zobrazuje základné formátovanie číselnej hodnoty bez rozšírených volieb, aby bolo jasné predvolené správanie komponentu.

import Basic from '@site/static/usage/v1/format-digital/basic/index.md';

<Basic />

## Možnosti zobrazenia

Ukážka porovnáva rôzne režimy zobrazenia tej istej hodnoty, takže rýchlo uvidíte rozdiel medzi jednotlivými formátmi.

import FormattingDisplay from '@site/static/usage/v1/format-digital/formatting-display/index.md';

<FormattingDisplay />

## Formátovanie bajtov

Ukážka sa sústreďuje na prevod hodnôt do bajtových jednotiek, čo sa hodí pri zobrazení veľkostí súborov alebo úložísk.

import FormattingBytes from '@site/static/usage/v1/format-digital/formatting-bytes/index.md';

<FormattingBytes />

## Formátovanie bitov

Ukážka sa sústreďuje na prevod hodnôt do bitových jednotiek, napríklad pre sieťové rýchlosti alebo prenosové limity.

import FormattingBits from '@site/static/usage/v1/format-digital/formatting-bits/index.md';

<FormattingBits />

## Použitie so slotmi

Ukážka ukazuje, ako cez sloty doplniť vlastný obsah pred alebo za formátovanú hodnotu bez rušenia samotného výpočtu.

import DisplaySlots from '@site/static/usage/v1/format-digital/slots/index.md';

<DisplaySlots />


## Kedy použiť

Použite `wje-format-digital`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

## Kedy nepoužiť

Nepoužívajte komponent mimo jeho zodpovednosti; pri netypickom prípade radšej zložte viac menších prvkov.

## Prístupnosť

Skontrolujte klávesnicové ovládanie, focus stavy, kontrast a zrozumiteľné pomenovanie interaktívnych prvkov.

## Odporúčané postupy

- Preferujte API komponentu pred ručnými DOM zásahmi.
- Držte sa dizajnových tokenov a konzistentných konvencií pomenovania.
- Pred nasadením otestujte komponent v reálnych dátových scenároch.

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
