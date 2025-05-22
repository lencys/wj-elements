---
title: 'OrgChart'
---

import Props from '@ionic-internal/component-api/v1/orgchart/props.md';
import Events from '@ionic-internal/component-api/v1/orgchart/events.md';
import Methods from '@ionic-internal/component-api/v1/orgchart/methods.md';
import Parts from '@ionic-internal/component-api/v1/orgchart/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/orgchart/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/orgchart/slots.md';

<head>
  <title>OrgChart | OrgChart</title>
  <meta
    name="description"
    content="Komponent OrgChart slúži na zobrazenie organizačnej štruktúry. Môže obsahovať rôzne typy uzlov a prepojenia medzi nimi."
  ></meta>
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `OrgChart` spolu s [OrgChartItem](../orgChartItem) a [OrgChartGroup](../orgChartGroup) slúžia na zobrazenie organizačnej štruktúry.
OrgChart komponent môže byť použitý na zobrazenie hierarchických vzťahov medzi rôznymi entitami v organizácii.

## Základné použitie

import Basic from '@site/static/usage/v1/orgchart/basic/index.md';

<Basic />

## Vytvorenie org. štruktúry pomocou dát v JSON formáte

Pomocou JSON formátu môžete definovať uzly, ich vlastnosti a prepojenia medzi nimi. Tento prístup umožňuje dynamické generovanie organizačnej štruktúry na základe údajov z databázy alebo iných zdrojov.

import JSON from '@site/static/usage/v1/orgchart/json/index.md';

<JSON />

## Skupiny

Použitím elementu [OrgChartGroup](../orgChartGroup) je možné zoskupiť viacero uzlov do jedného celku. Môžete ich použiť na zobrazenie tímov alebo oddelení v rámci organizačnej štruktúry.

import Group from '@site/static/usage/v1/orgchart/group/index.md';

<Group />

## Line

import Line from '@site/static/usage/v1/orgchart/line/index.md';

<Line />

## Controls

import Controls from '@site/static/usage/v1/orgchart/controls/index.md';

<Controls />

## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />
