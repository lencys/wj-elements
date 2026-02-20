---
title: 'Breadcrumb'
---

import Props from '@ionic-internal/component-api/v1-sk/breadcrumb/props.md';
import Events from '@ionic-internal/component-api/v1-sk/breadcrumb/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/breadcrumb/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/breadcrumb/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/breadcrumb/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/breadcrumb/slots.md';

<head>
  <title>Breadcrumbs | Segment navigačnej cesty</title>
  <meta
    name="description"
    content="Breadcrumb zobrazuje jeden segment navigačnej cesty v aplikácii a je potomkom elementu Breadcrumbs. Môže zobrazovať aj ikonu."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Breadcrumb zobrazuje jeden segment navigačnej cesty v aplikácii a je potomkom elementu Breadcrumbs. Môže zobrazovať aj ikonu.

:::note Poznámka

Pre viac informácií o použítí Breadcrumbs sa presuňte do dokumentácie elementu [**Breadcrumbs**](./breadcrumbs).

:::


## Kedy použiť

Použite `wje-breadcrumb`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
