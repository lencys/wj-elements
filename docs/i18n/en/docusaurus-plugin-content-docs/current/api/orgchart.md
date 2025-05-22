---
title: OrgChart
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

## Basic use

import Basic from '@site/static/usage/v1/orgchart/basic/index.md';

<Basic />

## Creating org. structure using data in JSON format

Using JSON format, you can define nodes, their properties, and the links between them. This approach allows dynamic generation of the organizational structure based on data from the database or other sources.

import JSON from '@site/static/usage/v1/orgchart/json/index.md';

<JSON />

## Groups

Using the [OrgChartGroup](../orgChartGroup) element, it is possible to group multiple nodes into a single entity. You can use them to show teams or departments within an organizational structure.

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
