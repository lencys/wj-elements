---
title: "Menu"
---

<head>
  <title>Menu: Element pre zobrazenie menu</title>
  <meta name="description" content="Menu element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a zobrazí sa pridaním atribútu `active` napríklad po kliknutí na tlačidlo." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Menu element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a zobrazí sa pridaním atribútu `active` napríklad po kliknutí na tlačidlo. Skladá sa z elementov [MenuItem.](./menu-item).

## Základné použitie

import BasicUsage from '@site/static/usage/v1/menu/basic/index.md';

<div className="xxxlarge">

<BasicUsage />

</div>


## Inset

import Inset from '@site/static/usage/v1/menu/inset/index.md';

<div className="xxxlarge">

<Inset />

</div>


## Atribúty a Vlastnosti

### active

|  |  |
| --- | --- |
| Popis | Ak `true`, aktivuje menu a zviditeľní ho pridaním `display: "flex"` |
| Atribút | `active` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### collapse

|  |  |
| --- | --- |
| Popis | Ak `true`, menu je v stave zbalené  |
| Atribút | `collapse` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |


## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

| Vlasnosť   | Popis       |
|-----------|-------------|
| `--wj-menu-background` | Farba pozadia elementu |
| `--wj-menu-border-color` | Farba okrajov elementu |
| `--wj-menu-border-radius` | Zaoblenie okrajov elementu |
| `--wj-menu-border-style` | Štýl zaoblenia elementu |
| `--wj-menu-border-width` | Šírka okrajov elementu |
| `--wj-menu-padding-bottom` | Spodné vnútorné odsadenie elementu |
| `--wj-menu-padding-inline` | Vnútorné odsadenie elementu vľavo a vpravo |
| `--wj-menu-padding-top` | Horné vnútorné odsadenie elementu  |
| `--wj-menu-z-index` | Z-index elementu |

## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.
