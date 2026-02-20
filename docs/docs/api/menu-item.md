---
title: 'MenuItem'
---

import Props from '@ionic-internal/component-api/v1-sk/menu-item/props.md';
import Events from '@ionic-internal/component-api/v1-sk/menu-item/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/menu-item/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/menu-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/menu-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/menu-item/slots.md';

<head>
  <title>MenuItem | Element pre zobrazenie položiek v elemente Menu</title>
  <meta
    name="description"
    content="MenuItem je podriadený elementu Menu. a predstavuje navigačnú položku v jeho vnútri. Môže zobrazovať podmenu s ďalšími navigačnými položkami a tiež umožňuje zobrazenie ikon."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

MenuItem je podriadený elementu [Menu.](./menu) a predstavuje navigačnú položku v jeho vnútri. Môže zobrazovať podmenu s ďalšími navigačnými položkami a tiež umožňuje zobrazenie ikon.
Pre príklady použitia MenuItem prejdite na stránku dokumentácie elementu [**Menu**](./menu).


## Kedy použiť

Použite `wje-menu-item`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
