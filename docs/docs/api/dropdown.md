---
title: 'Dropdown'
---

import Props from '@ionic-internal/component-api/v1-sk/dropdown/props.md';
import Events from '@ionic-internal/component-api/v1-sk/dropdown/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/dropdown/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/dropdown/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/dropdown/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/dropdown/slots.md';

<head>
  <title>Dropdown | WebJET Element pre zobrazenie kontextového menu</title>
  <meta
    name="description"
    content="Dropdown element slúži na zobrazenie kontextového menu po kliknutí na tlačidlo. Umožňuje používateľovi zvoliť jednu z preddefinovaných možností."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Dropdown element slúži na zobrazenie kontextového menu po kliknutí na tlačidlo. Umožňuje používateľovi zvoliť jednu z preddefinovaných možností. Obsahuje element [Button](./button), ktorý funguje ako aktivátor a element [Menu](./menu) s obsahom v podobe jednotlivých položiek [MenuItem.](./menu-item).

## Základné použitie

Ukážka zobrazuje základný dropdown so spúšťačom a obsahom menu. Je to dobrý východiskový bod pre bežné akčné alebo navigačné menu.

import Basic from '@site/static/usage/v1/dropdown/basic/index.md';

<Basic />

## Dropdown s dialógom

Ukážka používa dropdown ako miesto, odkiaľ používateľ spustí ďalšiu akciu, konkrétne otvorenie dialógu.

import OpenDialog from '@site/static/usage/v1/dropdown/open-dialog/index.md';

<OpenDialog />

## Zobrazenie na hover

Ukážka prepína dropdown z kliknutia na hover, aby bolo vidieť rozdiel v správaní aj vhodnosť tohto vzoru.

import Hover from '@site/static/usage/v1/dropdown/hover/index.md';

<Hover />

## Dropdown s tooltipom

Táto ukážka ukazuje, ako komponent `wje-dropdown` použiť spolu s tooltipom na doplnenie krátkeho kontextu.

import Tooltip from '@site/static/usage/v1/dropdown/tooltip/index.md';

<Tooltip />

## Dropdown s avatarom

Ukážka používa avatar ako trigger dropdownu, čo je typický vzor pre profilové menu a používateľské akcie.

import Avatar from '@site/static/usage/v1/dropdown/inner-avatar/index.md';

<Avatar />


## Kedy použiť

Použite `wje-dropdown`, keď potrebujete používateľovi okamžite komunikovať stav, výsledok akcie alebo ďalší krok.

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
