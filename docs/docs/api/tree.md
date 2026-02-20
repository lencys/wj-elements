---
title: 'Tree'
---

import Props from '@ionic-internal/component-api/v1-sk/tree/props.md';
import Events from '@ionic-internal/component-api/v1-sk/tree/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/tree/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/tree/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/tree/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/tree/slots.md';

<head>
  <title>Accordion: Zobrazenie obsahu v rozbaľovacích sekciách</title>
  <meta
    name="description"
    content="Element Tree umožňuje hierarchické zobrazovanie dát v stromovej štruktúre. Používa sa na vizualizáciu kategórií, súborových systémov alebo navigačných štruktúr."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element `Tree` umožňuje hierarchické zobrazovanie dát v stromovej štruktúre. Používa sa na vizualizáciu kategórií, súborových systémov alebo navigačných štruktúr. Tree obsahuje wje-tree ako hlavný kontajner a wje-tree-item ako jednotlivé položky stromu. Položky môžu obsahovať deti, čím vytvárajú vnorenú hierarchiu.

## Základné použitie

import Basic from '@site/static/usage/v1/tree/basic/index.md';

<Basic />

## Slots

import StartEndSlots from '@site/static/usage/v1/tree/slots/index.md';

<StartEndSlots />

## Multiple

import Multiple from '@site/static/usage/v1/tree/multiple/index.md';

<Multiple />

## Odsadenie vnorení

Pre viac úrovní vnorenia (napr. `Deciduous` -> `Maple` -> `Field maple`) sa odsadenie aplikuje priebežne na každú otvorenú vetvu. Vďaka tomu je tretia a ďalšie úrovne čitateľne oddelené od rodiča.

import Indent from '@site/static/usage/v1/tree/indent/index.md';

<Indent />

## TO DO complete tree and tree item docs


## Kedy použiť

Použite `wje-tree`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
