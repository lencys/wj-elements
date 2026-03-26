---
title: 'OrgChart'
---

import Props from '@ionic-internal/component-api/v1-sk/orgchart/props.md';
import Events from '@ionic-internal/component-api/v1-sk/orgchart/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/orgchart/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/orgchart/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/orgchart/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/orgchart/slots.md';

<head>
  <title>OrgChart | OrgChart</title>
  <meta
    name="description"
    content="API dokumentácia pre wje-orgchart vrátane odporúčaného použitia, atribútov, udalostí, metód, možností štýlovania a slotov."
  />
</head>

Komponent `OrgChart` spolu s [OrgChartItem](./orgchart-item) a [OrgChartGroup](./orgchart-group) slúžia na zobrazenie organizačnej štruktúry.
OrgChart komponent môže byť použitý na zobrazenie hierarchických vzťahov medzi rôznymi entitami v organizácii.

## Základné použitie

Ukážka predstavuje organizačný strom v jeho základnej podobe, aby bolo jasné, ako sa skladajú uzly a skupiny.

import Basic from '@site/static/usage/v1/orgchart/basic/index.md';

<Basic />

## Vytvorenie org. štruktúry pomocou dát v JSON formáte

Pomocou JSON formátu môžete definovať uzly, ich vlastnosti a prepojenia medzi nimi. Tento prístup umožňuje dynamické generovanie organizačnej štruktúry na základe údajov z databázy alebo iných zdrojov.

import JSON from '@site/static/usage/v1/orgchart/json/index.md';

<JSON />

## Skupiny

Použitím elementu [OrgChartGroup](./orgchart-group) je možné zoskupiť viacero uzlov do jedného celku. Môžete ich použiť na zobrazenie tímov alebo oddelení v rámci organizačnej štruktúry.

import Group from '@site/static/usage/v1/orgchart/group/index.md';

<Group />

## Line

Ukážka sa sústreďuje na spojnice medzi uzlami, takže je lepšie vidieť, ako strom komunikuje nadradenosť a vzťahy.

import Line from '@site/static/usage/v1/orgchart/line/index.md';

<Line />

## Controls

Ukážka pridáva ovládacie prvky na prácu so stromom, napríklad pri väčšom množstve uzlov alebo širšej štruktúre.

import Controls from '@site/static/usage/v1/orgchart/controls/index.md';

<Controls />


## Kedy použiť

Použite `wje-orgchart`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
