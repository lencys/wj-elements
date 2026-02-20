---
title: 'TabPanel'
---

import Props from '@ionic-internal/component-api/v1-sk/tab-panel/props.md';
import Events from '@ionic-internal/component-api/v1-sk/tab-panel/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/tab-panel/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/tab-panel/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/tab-panel/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/tab-panel/slots.md';

<head>
  <title>TabPanel | Kontajner obsahu pre Tab element</title>
  <meta
    name="description"
    content="Komponent TabPanel je podriadeným komponentom TabGroup a slúži ako kontajner obsahu záložky. Používa sa v kombinácii s elementom Tab."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `TabPanel` je podriadeným komponentom [TabGroup](tab-group.md) a slúži ako kontajner obsahu záložky. Používa sa v kombinácii s elementom [Tab](tab.md).

Pre príklady použitia komponentu `Tab` prejdite na dokumentáciu [TabGroup](tab-group.md).


## Kedy použiť

Použite `wje-tab-panel`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
