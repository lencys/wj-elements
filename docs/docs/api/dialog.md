---
title: 'Dialog'
---

import Props from '@ionic-internal/component-api/v1-sk/dialog/props.md';
import Events from '@ionic-internal/component-api/v1-sk/dialog/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/dialog/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/dialog/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/dialog/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/dialog/slots.md';

<head>
  <title>Dialog | Dialógové okno s prispôsobiteľným obsahom</title>
  <meta
    name="description"
    content="Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo zrušenie ním vykonanej akcie. Nachádza sa nad obsahom aplikácie a používateľ ho musí ručne zrušiť, aby mohol pokračovať v interakcii s aplikáciou. Dialógové okno je možné zobraziť v rôznych veľkostiach a pozíciách obrazovky.

## Základné použitie

Jednou z možností ako zobraziť komponent 'Dialog' je použitie komponentu 'Button' s atribútom 'dialog'.
Pre viac informácii o komponente 'Button' prejdite na stránku [Button](button.md).

import Basic from '@site/static/usage/v1/dialog/basic/index.md';

<Basic />

## Základné použitie s JavaScriptom

Zobraziť komponent Dialog je možné aj použitím JavaScriptu. Na vytvorenie dialógového okna slúži metóda `onOpen()`, ktorá sa volá na elemente `wje-dialog`. Táto metóda zobrazuje dialógové okno a vracia jeho inštanciu. Na zatvorenie dialógového okna je potrebné zavolať metódu `onClose()` na jeho inštancii.

import BasicJS from '@site/static/usage/v1/dialog/basicjs/index.md';

<BasicJS />

## Placement (Umiestnenie)

Vlastnosť `placement` určuje umiestnenie dialógového okna na obrazovke. Predvolená je hodnota slide-up. Ďalšie možnosti sú `"stick-up"`, `"fill-in"`, `"slide-left"`, `"slide-right"`.

import Placement from '@site/static/usage/v1/dialog/placement/index.md';

<Placement />

## Size (Veľkosť)

Vlastnosť `size` upravuje veľkosť dialógového okna na obrazovke. Predvolená je veľkosť `"small"`. Ďalšie možnosti sú `"medium"`, `"large"` a `"ex-large"`.

import Size from '@site/static/usage/v1/dialog/size/index.md';

<Size />

## Dynamická zmena obsahu

Obsah elementu Dialog sa dá jednoducho meniť využitím custom eventu a jednou z metód `beforeShow`, `afterShow`, `beforeHide` alebo `afterHide`.

import ContentChange from '@site/static/usage/v1/dialog/content-change/index.md';

<ContentChange />

## Registrovanie Blocking eventu

Obsah elementu Dialog sa dá jednoducho meniť využitím custom eventu a jednou z metód `beforeShow`, `afterShow`, `beforeHide` alebo `afterHide`.

import BlockingEvent from '@site/static/usage/v1/dialog/blocking-event/index.md';

<BlockingEvent />


## Kedy použiť

Použite `wje-dialog`, keď potrebujete používateľovi okamžite komunikovať stav, výsledok akcie alebo ďalší krok.

## Kedy nepoužiť

Nepoužívajte viacero konkurenčných feedback kanálov naraz pre jednu udalosť.

## Prístupnosť

Status správy oznamujte cez vhodné ARIA live regióny a pri modálnych prvkoch spravujte fokus (open/close).

## Odporúčané postupy

- Vyberte závažnosť správ (info/success/warning/error) podľa reálneho dopadu na používateľa.
- Pri blokujúcich akciách preferujte potvrdenie iba tam, kde hrozí nevratná zmena.
- Nastavte konzistentné timeouty, aby používateľ stihol správu prečítať.

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
