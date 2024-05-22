---
title: "Avatar"
---
import Props from '@ionic-internal/component-api/v1/avatar/props.md';
import Events from '@ionic-internal/component-api/v1/avatar/events.md';
import Methods from '@ionic-internal/component-api/v1/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v1/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/avatar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/avatar/slots.md';

<head>
  <title>Avatar: Avatar Component</title>
  <meta name="description" content="Element avatar slúži na vizuálnu prezentáciu používateľa alebo subjektu. Používa sa zvyčajne ako obaľovač a poskytuje praktický spôsob zobrazovania profilových obrázkov, ikon, alebo, ak tie nie sú posktytné, iniciálok.  Podporuje rôzne konfigurácie vrátane veľkosti, zoskupenia viacerých avatarov alebo zobrazenie dropdownu po kliknutí či tooltipu pri ukázaní myšou." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element avatar slúži na vizuálnu prezentáciu používateľa alebo subjektu. Používa sa zvyčajne ako obaľovač a poskytuje praktický spôsob zobrazovania profilových obrázkov, ikon, alebo, ak tie nie sú poskytnuté, iniciálok.  Podporuje rôzne konfigurácie vrátane veľkosti, zoskupenia viacerých avatarov alebo zobrazenie dropdownu po kliknutí či tooltipu pri ukázaní myšou.

## Základné použitie

import Basic from '@site/static/usage/v1/avatar/basic/index.md';

<Basic />

## Veľkosť Avatara

Vlastnosť `size` určuje veľkosť avatara. Nastavením tejto vlastnosti sa zmení vnútorné odsadenie tlačidla.

import Size from '@site/static/usage/v1/avatar/size/index.md';

<Size />

## Avatar s ikonou

Vnorením elementu `wj-icon` sa vo vnútri avataru zobrazí zvolená ikona.

import Icon from '@site/static/usage/v1/avatar/icon/index.md';

<Icon />

## Avatar s iniciálmi

Pridaním vlastností `initials` a `label` avatar zobrazí iniciály zvolenej hodnoty vlastnosti `label`.

import Initials from '@site/static/usage/v1/avatar/initials/index.md';

<Initials />

## Avatar s dropdownom

Pridaním elementu `wj-dropdown` sa po kliknutí na avatar zobrazí menu. V tomto prípade je nutné do elementu avatar pridať slot `trigger` s hodnotou `hover`.

import Dropdown from '@site/static/usage/v1/avatar/dropdown/index.md';

<div className="xlarge">

<Dropdown />

</div>

## Avatar s tooltipom

Pridaním elementu `wj-dropdown` sa po kliknutí na avatar zobrazí menu.

import Tooltip from '@site/static/usage/v1/avatar/tooltip/index.md';

<Tooltip />

## Skupina avatarov

import Group from '@site/static/usage/v1/avatar/group/index.md';

<Group />

<!-- ## CSS Custom Properties

import CSSProps from '@site/static/usage/v1/avatar/theming/css-properties/index.md';

<CSSProps /> -->

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

