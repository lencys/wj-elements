---
title: 'Avatar'
---

import Props from '@ionic-internal/component-api/v1-sk/avatar/props.md';
import Events from '@ionic-internal/component-api/v1-sk/avatar/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/avatar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/avatar/slots.md';

<head>
  <title>Avatar: Avatar Component</title>
  <meta
    name="description"
    content="Element avatar slúži na vizuálnu prezentáciu používateľa alebo subjektu. Používa sa zvyčajne ako obaľovač a poskytuje praktický spôsob zobrazovania profilových obrázkov, ikon, alebo, ak tie."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element avatar slúži na vizuálnu prezentáciu používateľa alebo subjektu. Používa sa zvyčajne ako obaľovač a poskytuje praktický spôsob zobrazovania profilových obrázkov, ikon, alebo, ak tie nie sú poskytnuté, iniciálok. Podporuje rôzne konfigurácie vrátane veľkosti, zoskupenia viacerých avatarov alebo zobrazenie dropdownu po kliknutí či tooltipu pri ukázaní myšou.

## Základné použitie

import Basic from '@site/static/usage/v1/avatar/basic/index.md';

<Basic />

## Veľkosť Avatara

Vlastnosť `size` určuje veľkosť avatara.

import Size from '@site/static/usage/v1/avatar/size/index.md';

<Size />

## Veľkosť Avatara s iniciálmi 

Vlastnosť `size` určuje veľkosť avatara. Pridaním vlastností `initials` a `label` avatar zobrazí iniciály zvolenej hodnoty vlastnosti `label`.

import SizeInitials from '@site/static/usage/v1/avatar/size-initials/index.md';

<SizeInitials />

## Avatar s ikonou

Vnorením elementu `wje-icon` sa vo vnútri avatara zobrazí zvolená ikona.

import Icon from '@site/static/usage/v1/avatar/icon/index.md';

<Icon />

## Avatar s iniciálmi

Pridaním vlastností `initials` a `label` avatar zobrazí iniciály zvolenej hodnoty vlastnosti `label`.

import Initials from '@site/static/usage/v1/avatar/initials/index.md';

<Initials />

## Avatar so statusom

Vnorením elementu `wje-status` s ikonou, sa po stranách Avatara zobrazí element Status.
Pridaním atribútu `status-placement` je možné určiť pozíciu elementu Status.

Pre viac informácií o použítí Status sa presuňte do dokumentácie elementu [Status](/api/status). // TODO: link

import Status from '@site/static/usage/v1/avatar/status/index.md';

<Status />

## Avatar s dropdownom

Pridaním elementu `wje-dropdown` sa po kliknutí na avatar zobrazí menu. V tomto prípade je nutné do elementu avatar pridať slot `trigger` s hodnotou `hover`.

import Dropdown from '@site/static/usage/v1/avatar/dropdown/index.md';

<div className="xlarge">

<Dropdown />

</div>

## Avatar s tooltipom

Pridaním elementu `wje-dropdown` sa po kliknutí na avatar zobrazí menu.

import Tooltip from '@site/static/usage/v1/avatar/tooltip/index.md';

<Tooltip />

## Skupina avatarov

import Group from '@site/static/usage/v1/avatar/group/index.md';

<Group />

<!-- ## CSS Custom Properties

import CSSProps from '@site/static/usage/v1/avatar/theming/css-properties/index.md';

<CSSProps /> -->


## Kedy použiť

Použite `wje-avatar` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

## Kedy nepoužiť

Nepoužívajte ho ako náhradu za štruktúrované dáta tam, kde je potrebná presná interakcia.

## Prístupnosť

Doplňte alternatívny text pre obrázky, čitateľné kontrasty a textové ekvivalenty pre ikony bez popisu.

## Odporúčané postupy

- Komprimujte médiá a používajte lazy loading pri veľkých zoznamoch.
- Pri kartách a zoznamoch držte konzistentné informačné priority.
- Neopakujte rovnakú informáciu súčasne textom aj ikonou bez pridanej hodnoty.

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
