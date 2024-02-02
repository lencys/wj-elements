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

Element avatar slúži na vizuálnu prezentáciu používateľa alebo subjektu. Používa sa zvyčajne ako obaľovač a poskytuje praktický spôsob zobrazovania profilových obrázkov, ikon, alebo, ak tie nie sú posktytné, iniciálok.  Podporuje rôzne konfigurácie vrátane veľkosti, zoskupenia viacerých avatarov alebo zobrazenie dropdownu po kliknutí či tooltipu pri ukázaní myšou.

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

## CSS Custom Properties

import CSSProps from '@site/static/usage/v1/avatar/theming/css-properties/index.md';

<CSSProps />

## Atribúty a Vlastnosti

### initials

|  |  |
| --- | --- |
| Popis | Ak `true`, avatar zobrazí iniciály hodnoty atribútu `label` |
| Atribút | `initials` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### label

|  |  |
| --- | --- |
| Popis | Určuje hodnotu pre atribút `initials` |
| Atribút | `label` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |


### size

|  |  |
| --- | --- |
| Popis | Nastavte na `"small"` pre avatara s menším priemerom a na `"large"` pre avatara s väčším priemerom. V predvolenom nastavení je veľkosť nenastavená. |
| Atribút | `size` |
| Typ | `"large"` ｜ `"small"` ｜ `undefined` |
| Predvolená hodnota | `undefined` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

| Názov                           | Popis                    |
|---------------------------------|--------------------------|
| `native`                        | Odkazuje na `div` element vo vnútri avatara |



## CSS Custom Vlastnosti

| Vlastnosť                       | Popis                    |
|---------------------------------|--------------------------|
| `--wj-avatar-background-color`  | Farba pozadia avatara    |
| `--wj-avatar-border-color`      | Farba okraja avatara     |
| `--wj-avatar-border-radius`     | Zaoblenie okraja avatara |
| `--wj-avatar-border-style`      | Štýl okraja avatara      |
| `--wj-avatar-border-width`      | Šírka okraja             |
| `--wj-avatar-color`             | Farba textu              |
| `--wj-avatar-font-size`         | Veľkosť písma            |
| `--wj-avatar-font-weight`       | Hrúbka písma             |
| `--wj-avatar-height`            | Výška avatara            |
| `--wj-avatar-width`             | Šírka avatara            |


## Sloty

| Názov      | Popis                    |
|------------|--------------------------|
| icon       | Mal by byť použitý v elemente `wj-icon` a obsahovať názov ikony pre zobrazenie.  |
