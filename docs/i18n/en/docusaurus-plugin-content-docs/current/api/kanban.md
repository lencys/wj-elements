---
title: 'Kanban'
---

import Props from '@ionic-internal/component-api/v1/kanban/props.md';
import Events from '@ionic-internal/component-api/v1/kanban/events.md';
import Methods from '@ionic-internal/component-api/v1/kanban/methods.md';
import Parts from '@ionic-internal/component-api/v1/kanban/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/kanban/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/kanban/slots.md';

<head>
  <title>Kanban | Element showing the full Kanban board</title>
  <meta
    name="description"
    content="Komponent `Kanban` je element zobrazujúci plnoohodnotnú Kanban tabuľu. Tá umožňuje spravovať úlohy a projekty pomocou vizuálneho rozhrania. "
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The `Kanban` component is an element that displays a full-size Kanban table. It allows you to manage tasks and projects using a visual interface.

The Kanban board is divided into columns, with each column representing a specific process phase or task category.
Tasks are displayed as tabs that can be moved between columns to set and track their current status.

## Basic use

import Basic from '@site/static/usage/v1/kanban/basic/index.md';

<Basic />

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
