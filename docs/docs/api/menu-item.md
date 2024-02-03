---
title: "MenuItem"
---

<head>
  <title>MenuItem: Element pre zobrazenie položiek v elemente Menu</title>
  <meta name="description" content="MenuItem element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a zobrazí sa pridaním atribútu `active` napríklad po kliknutí na tlačidlo." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

MenuItem je podriadený elementu [Menu.](./menu) a predstavuje navigačnú položku v jeho vnútri. Môže zobrazovať podmenu s ďalšími navigačnými položkami a tiež umožňuje zobrazenie ikon.

## Základné použitie

Pre príklady použitia MenuItem prejdite na stránku dokumentácie elementu [Menu.](./menu).


## Atribúty a Vlastnosti

### checked

|  |  |
| --- | --- |
| Popis | Ak `true`, zobrazí sa v MenuItem ikona check |
| Atribút | `active` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### collapse

|  |  |
| --- | --- |
| Popis | Ak `true`, podmenu je v stave zbalené |
| Atribút | `collapse` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### offset

|  |  |
| --- | --- |
| Popis | Určuje veľkosť odsadenia podmenu |
| Atribút | `offset` |
| Typ | `integer` |
| Predvolená hodnota | `0` |

### placement

|  |  |
| --- | --- |
| Popis | Určuje umiestnenie podmenu na obrazovke. Medzi možné hodnoty patrí `"right-start"`, `"left-end"`a ďalšie.  |
| Atribút | `placement` |
| Typ | `bottom-end`, `bottom-start`, `left-end`, `left-start`, `right-end`, `right-start`, `top-end`, `top-start` |
| Predvolená hodnota | `right-start` |


### variant

|  |  |
| --- | --- |
| Popis |  Určuje variantu podmenu. Medzi možné hodnoty patrí `CONTEXT`, ktorý zobrazí podmenu v kontextovom okne alebo `NAV`, ktorý sa podmenu zobrazí ako rozbalovacie menu.   |
| Atribút | `variant` |
| Typ | `CONTEXT`, `NAV` |
| Predvolená hodnota | `CONTEXT` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

| Názov | Popis |
| --- | --- |
| `native` | Odkazuje na `<div>` element vo vnútri elementu MenuItem |
| `submenu` | Odkazuje na `<slot>` element, ktorý zaobaľuje podmenu |


## CSS Custom Vlastnosti

| Atribút | Popis |
|-----------|-------------|
| `--wj-menu-item-background-active` | Farba pozadia ak je element aktívny |
| `--wj-menu-item-background-hover` | Farba pozadia ak je na element ukázané myšou |
| `--wj-menu-item-color-active` | Farba textu ak je element aktívny |
| `--wj-menu-item-color-hover` | Farba textu ak je na element ukázané myšou. |
| `--wj-menu-item-line-height` | Výška riadka textu elementu |
| `--wj-menu-item-padding-bottom` | Spodné vnútorné odsadenie elementu |
| `--wj-menu-item-padding-top` |  Horné vnútorné odsadenie elementu  |
| `--wj-menu-submenu-offset` | Posun podmenu |


## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.
