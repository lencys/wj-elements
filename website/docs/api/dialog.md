---
title: "Dialog"
---

<head>
  <title>Dialog | Tlačidlo</title>
  <meta name="description" content="Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo zrušenie ním vykonanej akcie." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo zrušenie ním vykonanej akcie. Nachádza sa nad obsahom aplikácie a používateľ ho musí ručne zrušiť, aby mohol pokračovať v interakcii s aplikáciou. Dialógové okno je možné zobraziť v rôznych veľkostiach a pozíciách obrazovky.

## Základné použitie

Na zobrazenie komponentu Dialog sa používa komponent Button s atribútom dialog.
Pre viac informácii prejdite na stránku [Button](./button.md).

import Basic from '@site/static/usage/v1/dialog/basic/index.md';

<div className="xlarge">
<Basic />
</div>

### Placement (Umiestnenie)

Vlastnosť `placement` určuje umiestnenie dialógového okna na obrazovke. Predvolená je hodnota slide-up. Ďalšie možnosti sú `"stick-up"`, `"fill-in"`, `"slide-left"`, `"slide-right"`. 

import Placement from '@site/static/usage/v1/dialog/placement/index.md';

<div className="xxxlarge">
<Placement />
</div>

### Size (Veľkosť)

Vlastnosť `size` upravuje veľkosť dialógového okna na obrazovke. Predvolená je veľkosť `"small"`. Ďalšie možnosti sú `"medium"`, `"large"` a `"ex-large"`. 


## Vlastnosti

### **placement**

|  |  |
| --- | --- |
| Popis | Určuje umiestnenie dialógového okna na obrazovke. Medzi možné hodnoty patrí `"slide-up"` (posunúť hore), `"slide-down"` (posunúť dole) a ďalšie. |
| Atribút | `placement` |
| Typ | `"slide-up"` ｜ `"slide-down"` ｜ `"slide-left"` ｜ `"slide-right"` ｜ `"fill-in"`  |
| Predvolená hodnota | `“slide-up”` |

### size

|  |  |
| --- | --- |
| Popis | Určuje veľkosť dialógového okna na obrazovke. Medzi možné hodnoty patrí `"small"` (malé), `"medium"` (stredné) a ďalšie. |
| Atribút | `size` |
| Typ | `"small"` ｜ `"medium"` ｜ `"large"` ｜ `"ex-large"`｜ `undefined` |
| Predvolená hodnota | `“small”` |

## Eventy[](https://ionicframework.com/docs/api/badge#events)

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy[](https://ionicframework.com/docs/api/badge#methods)

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts[](https://ionicframework.com/docs/api/badge#css-shadow-parts)

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

| Názov | Popis |
| --- | --- |
| `body` | Odkazuje na hlavný obsah dialógového okna |
| `header` | Odkazuje na záhlavie dialógového okna |
| `footer` | Odkazuje na pätičku dialógového okna |

## CSS Custom Vlastnosti

| Názov | Popis |
| --- | --- |
| `--wj-backdrop` | Farba pozadia (backdropu) |
| `--wj-backdrop-opacity` | Priehľadnosť pozadia (backdropu) |
| `--wj-dialog-border-color` | Farba okrajov dialógového okna |
| `--wj-dialog-border-radius` | Zaoblenie okrajov dialógového okna |
| `--wj-dialog-border-style` | Štýl okrajov dialógového okna |
| `--wj-dialog-border-width` | Hrúbka okrajov dialógového okna |
| `--wj-dialog-height` | Výška dialógového okna |
| `--wj-dialog-margin-bottom` | Spodné vonkajšie odsadenie dialógového okna |
| `--wj-dialog-margin-end` | Ľavé vonkajšie odsadenie dialógového okna |
| `--wj-dialog-margin-start` | Pravé vonkajšie odsadenie dialógového okna |
| `--wj-dialog-margin-top` | Horné vonkajšie odsadenie dialógového okna |
| `--wj-dialog-padding` | Vnútorné odsadenie dialógového okna |
| `--wj-dialog-width` | Šírka dialógového okna |

## Sloty[](https://ionicframework.com/docs/api/button#slots)

| Názov | Popis |
| --- | --- |
| `header` | Tento slot sa používa pre záhlavie dialógu. |
| `footer` | Tento slot sa používa pre pätičku dialógu. |