---
title: 'Menu'
---

import Props from '@ionic-internal/component-api/v1-sk/menu/props.md';
import Events from '@ionic-internal/component-api/v1-sk/menu/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/menu/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/menu/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/menu/slots.md';

<head>
  <title>Menu | Element pre zobrazenie menu</title>
  <meta
    name="description"
    content="Menu element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a zobrazí sa pridaním atribútu active napríklad po kliknutí na tlačidlo."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Menu element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a zobrazí sa pridaním atribútu `active` napríklad po kliknutí na tlačidlo. Špeciálne pre použitie v Menu sú navrhnuté elementy [MenuItem](./menu-item) a [MenuLabel](./menu-label).

## Základné použitie

Ukážka zobrazuje základné menu s najbežnejším rozložením položiek a hierarchie.

import Basic from '@site/static/usage/v1/menu/basic/index.md';

<Basic />

## Inset

Ukážka pridáva menu vnútorné odsadenie, takže nepôsobí nalepené na okraje kontajnera.

import Inset from '@site/static/usage/v1/menu/inset/index.md';

<Inset />

## Variant: Megamenu

Ukážka prepína menu do megamenu variantu, ktorý je vhodný pre širšie navigačné štruktúry a viac obsahu naraz.

import Megamenu from '@site/static/usage/v1/menu/megamenu/index.md';

<Megamenu />

## Variant: Nav

Ukážka používa nav variant menu, teda podobu vhodnú pre klasickú navigáciu medzi sekciami aplikácie alebo webu.

import Nav from '@site/static/usage/v1/menu/nav/index.md';

<Nav />

## Collapse

Atribút `collapse` zobrazí menu v zbalenomn stave. V tomto stave je menu zbalené a zobrazuje sa len ikona.

import Collapse from '@site/static/usage/v1/menu/collapse/index.md';

<Collapse />


## Kedy použiť

Použite `wje-menu`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
