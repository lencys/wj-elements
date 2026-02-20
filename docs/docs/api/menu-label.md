---
title: 'MenuLabel'
---

import Props from '@ionic-internal/component-api/v1-sk/menu-label/props.md';
import Events from '@ionic-internal/component-api/v1-sk/menu-label/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/menu-label/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/menu-label/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/menu-label/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/menu-label/slots.md';

<head>
  <title>MenuLabel | Element pre zobrazenie popisného textu navigačných položiek.</title>
  <meta
    name="description"
    content="MenuLabel je podriadený elementu Menu. a môže predstavovať napríklad aj popisný text pre navigačné položky. Pre príklady použitia MenuLabel prejdite na stránku dokumentácie elementu."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

MenuLabel je podriadený elementu [Menu.](./menu) a môže predstavovať napríklad aj popisný text pre navigačné položky.
Pre príklady použitia MenuLabel prejdite na stránku dokumentácie elementu [**Menu**](./menu).


## Kedy použiť

Použite `wje-menu-label`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
