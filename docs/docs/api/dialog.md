---
title: "Dialog"
---
import Props from '@ionic-internal/component-api/v1/dialog/props.md';
import Events from '@ionic-internal/component-api/v1/dialog/events.md';
import Methods from '@ionic-internal/component-api/v1/dialog/methods.md';
import Parts from '@ionic-internal/component-api/v1/dialog/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/dialog/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/dialog/slots.md';

<head>
  <title>Dialog | Dialógové okno s prispôsobiteľným obsahom</title>
  <meta name="description" content="Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo zrušenie ním vykonanej akcie." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo zrušenie ním vykonanej akcie. Nachádza sa nad obsahom aplikácie a používateľ ho musí ručne zrušiť, aby mohol pokračovať v interakcii s aplikáciou. Dialógové okno je možné zobraziť v rôznych veľkostiach a pozíciách obrazovky.

## Základné použitie

Na zobrazenie komponentu Dialog sa používa komponent Button s atribútom dialog.
Pre viac informácii prejdite na stránku [Button](./button.md).

import Basic from '@site/static/usage/v1/dialog/basic/index.md';

<Basic />

### Placement (Umiestnenie)

Vlastnosť `placement` určuje umiestnenie dialógového okna na obrazovke. Predvolená je hodnota slide-up. Ďalšie možnosti sú `"stick-up"`, `"fill-in"`, `"slide-left"`, `"slide-right"`. 

import Placement from '@site/static/usage/v1/dialog/placement/index.md';

<Placement />

### Size (Veľkosť)

Vlastnosť `size` upravuje veľkosť dialógového okna na obrazovke. Predvolená je veľkosť `"small"`. Ďalšie možnosti sú `"medium"`, `"large"` a `"ex-large"`. 


## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />