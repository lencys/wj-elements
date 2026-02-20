---
title: 'Router Link'
---

import Props from '@ionic-internal/component-api/v1-sk/router-link/props.md';
import Events from '@ionic-internal/component-api/v1-sk/router-link/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/router-link/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/router-link/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/router-link/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/router-link/slots.md';

<head>
  <title>Router Link | Komponent na router navigáciu</title>
  <meta
    name="description"
    content="Router link komponenta slúži ako prispôsobiteľný link navrhnutý na použitie v navigácii naprieč aplikáciou."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Router link komponenta slúži ako prispôsobiteľný link navrhnutý na použitie v navigácii naprieč aplikáciou.

:::note
Pre viac informácií o použití Router Link prejdite na stránku [**Router**](./router) v dokumentácii.
:::


## Kedy použiť

Použite `wje-router-link`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
