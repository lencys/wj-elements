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
    content="API documentation for wje-orgchart, including usage guidance, attributes, events, methods, styling options, and slots."
  />
</head>

The `OrgChart` component works together with [OrgChartItem](./orgchart-item) and [OrgChartGroup](./orgchart-group) to render organizational structures. It is suited for displaying hierarchical relationships between people, teams, or other entities.

## Basic use

This example presents the organization chart in its baseline form so the relationship between nodes and groups is easy to understand.

import Basic from '@site/static/usage/v1/orgchart/basic/index.md';

<Basic />

## Creating org. structure using data in JSON format

Using JSON format, you can define nodes, their properties, and the links between them. This approach allows dynamic generation of the organizational structure based on data from the database or other sources.

import JSON from '@site/static/usage/v1/orgchart/json/index.md';

<JSON />

## Groups

Using the [OrgChartGroup](./orgchart-group) element, it is possible to group multiple nodes into a single entity. You can use them to show teams or departments within an organizational structure.

import Group from '@site/static/usage/v1/orgchart/group/index.md';

<Group />

## Line

This example demonstrates how the `lines` option changes visual separation inside the `wje-orgchart` component.

import Line from '@site/static/usage/v1/orgchart/line/index.md';

<Line />

## Controls

This example adds controls for working with the chart, which becomes important once the structure grows beyond a few nodes.

import Controls from '@site/static/usage/v1/orgchart/controls/index.md';

<Controls />

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
