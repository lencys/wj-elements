---
title: "Button"
---

<head>
  <title>Button | Tlačidlo</title>
  <meta name="description" content="Tlačidlá sú klikateľný element, ktorý umožnuje zobraziť text, ikonu, prípadne oboje. Tlačidlá si je možné jednoducho prispôsobiť použitím rôznych atribútov a CSS vlastností." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tlačidlá sú klikateľný element, ktorý umožnuje zobraziť text, ikonu, prípadne oboje. Tlačidlá si je možné jednoducho prispôsobiť použitím rôznych atribútov a CSS vlastností.

## Základné použitie

Ak chcete použiť komponent Button, zahrňte ho do HTML s požadovanými atribútmi. Pridaním atribútu `disabled` sa tlačidlo stane neaktívnym a nie je možné naň kliknúť.

import Basic from '@site/static/usage/v1/button/basic/index.md';

<Basic />

## Toggle

<!-- Vlastnosť `toggle` umožňuje priradiť tlačidlu dva rôzne stavy a kliknutím medzi nimi prepínať. Nastavením jej hodnoty sa tlačidlu priradí predvolený stav. <br/>Musí obsahovať dva podradené elementy so `slot` s hodnotou `toggle`a tiež vlastnosť `state`, ktorou tlačidlu určíte dostupné hodnoty stavu. -->

Vlastnosť `toggle` umožňuje priradiť tlačidlu dva rôzne stavy a kliknutím medzi nimi prepínať. Nastavením hodnoty sa tlačidlu priradí predvolený stav. <br/>Pre nastavenie dostupných stavov je potrebné pridať tlačidlu dva podradené elementy so slotom s hodnotou `toggle`a tiež s vlastnosťou `state`, ktorá tlačidlu určí samotnú hodnotu stavu.

import Toggle from '@site/static/usage/v1/button/toggle/index.md';

<Toggle />

## Tvar tlačidla

Vlastnosť `round` umožňuje upraviť tvar tlačidla. V predvolenom nastavení sú tlačidlá obdĺžnikové s malým zaoblením okrajov. Pridaním tohto atribútu sa zaoblenie tlačidla zväčší.

import Shape from '@site/static/usage/v1/button/shape/index.md';

<Shape />


## Výplň tlačidla

Vlastnosť `Fill` určuje výplň pozadia a okraja tlačidla. V predvolenom nastavení majú tlačidlá jednoliate pozadie `solid`. Ďalšie možnosti sú `link` a `outline`. 

import Fill from '@site/static/usage/v1/button/fill/index.md';

<Fill />


## Veľkosť tlačidla

Vlastnosť `size` určuje veľkosť tlačidla. Nastavením tejto vlastnosti sa zmení vnútorné odsadenie tlačidla.


import Size from '@site/static/usage/v1/button/size/index.md';

<Size />

## Ikony tlačidla

V tlačidlách je možné zobraziť aj ikony vložením elementu `wj-icon`. Ich umiestnenie v rámci tlačidla upravíte pomocou atribútu slot a vlastnosti `start` alebo `end`. Ak tlačidlo neobsahuje žiaden text a skladá sa len z ikony, použite vlastnosť `icon-only`.

Viac informácií o ikonách nájdete na stránke **[Ikony](https://www.notion.so/Icon-d49ef040cef84b13b8dd3721d84d5397?pvs=21).**



import Icons from '@site/static/usage/v1/button/icons/index.md';

<Icons />

## Úprava štýlov

### Farby tlačidla

Vlastnosť `color` upravuje farbu pozadia a okraja tlačidla. Nastavením tejto hodnoty sa farba tlačidla zmení na jednu z farieb prednastavenej farebnej palety. V predvolenom nastavení majú tlačidlá pozadie `primary`.

import Colors from '@site/static/usage/v1/button/theming/colors/index.md';

<Colors />

### Farba okrajov tlačidla

Vlastnosť `color` je možné kombinovať spolu s vlastnosťout `fill`.

import Outline from '@site/static/usage/v1/button/outline/index.md';

<Outline />

### CSS Custom Vlastnosti

import Custom from '@site/static/usage/v1/button/theming/css-properties/index.md';

<Custom />


## Atribúty a Vlastnosti

### active

|  |  |
| --- | --- |
| Popis | Ak `true`, do tlačidla sa vloží ikona fajky (check) |
| Atribút | `active` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### color

|  |  |
| --- | --- |
| Popis | Farba, ktorá sa má použiť z palety farieb aplikácie. Predvolené možnosti sú: `"primary"`, `"secondary"`, `"complete"`, `"success"`, `"warning"`, `"danger"`, `"dark"`, a `"light"`. |
| Atribút | `color` |
| Typ | `"danger"` ｜ `"dark"` ｜ `"light"` ｜ `"primary"` ｜ `"secondary"` ｜ `"success"` ｜ `"warning"` ｜ undefined |
| Predvolená hodnota | `“primary”` |

### dialog

|  |  |
| --- | --- |
| Popis | Asociuje tlačidlo so špecifickým eventom. Po kliknutí na tlačidlo sa spustí named event, čo umožní implementovať akcie, ako je otvorenie dialógového okna alebo vykonanie vlastného eventu. Viac informácií nájdete v komponente dialog |
| Atribút | `dialog` |
| Typ | `"string"` ｜ `undefined` |
| Predvolená hodnota | `undefined` |

### disabled

|  |  |
| --- | --- |
| Popis | Ak true, používateľ nemôže s tlačidlom interagovať. |
| Atribút | `disabled` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### fill

|  |  |
| --- | --- |
| Popis | Nastavte na `"link"` pre priehľadné tlačidlo, ktoré sa podobá linku, na `"outline"` pre priehľadné tlačidlo s okrajom, alebo na `"solid"` falebo tlačidlo s vyplneným pozadím. Predvolená výplň je `"solid"` . |
| Atribút | `fill` |
| Typ | `"link"` ｜ `"default"` ｜ `"outline"` ｜ `"solid"` ｜ `undefined` |
| Predvolená hodnota | `undefined` |

### href

|  |  |
| --- | --- |
| Popis | Obsahuje adresu URL alebo fragment adresy URL, na ktorú hypertextový odkaz odkazuje. |
| Atribút | `href` |
| Typ | `string` ｜ `undefined` |
| Predvolená hodnota | `undefined` |

### size

|  |  |
| --- | --- |
| Popis | Nastavte na `"small"` pre tlačidlo s menšou výškou a výplňou, alebo na `"large"` pre tlačidlo s väčšou výškou a výplňou. V predvolenom nastavení je veľkosť nastavená na defaultnú.|
| Atribút | `size` |
| Typ | `"large"` ｜ `"small"` ｜ `undefined` |
| Predvolená hodnota | `undefined` |

### toggle

|  |  |
| --- | --- |
| Popis | Umožní priradiť tlačidlu dva rôzne stavy a kliknutím medzi nimi prepínať. Nastavením hodnoty sa tlačidlu priradí predvolený stav. Podradený element musí obsahovat `slot` s hodnotou `toggle` a tiež vlastnosť `state` s jednou z dvoch dostupných hodnôt stavu. |
| Atribút | `toggle` |
| Typ | `any` |
| Predvolená hodnota | `undefined` |

## Eventy

| Názov | Popis |
| --- | --- |
| `dialog` | Vyvolaný pri kliknutí na tlačidlo |

## Metódy

Pre tento komponent nie sú verejne dostupné žiadne metódy.

## CSS Shadow Parts

| Názov | Popis |
| --- | --- |
| `native` | Odkazuje na `<a>` element vo vnútri tlačidla |

## CSS Custom Vlastnosti

| Názov | Popis |
| --- | --- |
| `--wj-color-base` | Farba pozadia tlačidla |
| `--wj-button-border-color` | Farba okraja tlačidla |
| `--wj-button-border-radius` | Zaoblenie okrajov tlačidla |
| `--wj-button-border-style` | Štýl okrajov tlačidla |
| `--wj-button-border-width` | Šírka okrajov tlačidla |
| `--wj-color-contrast` | Farba textu tlačidla |
| `--wj-padding-bottom` | Spodné vnútorné odsadenie tlačidla |
| `--wj-padding-end` | Pravé vnútorné odsadenie, ak je smer LTR, a ľavé vnútorné odsadenie, ak je smer RTL tlačidla |
| `--wj-padding-start` | Ľavé vnútorné odsadenie, ak je smer LTR, a pravé vnútorné odsadenie, ak je smer RTL tlačidla |
| `--wj-padding-top` | Horné vnútorné odsadenie tlačidla |

## Sloty

| Názov | Popis |
| --- | --- |
| `` | Obsah sa umiestni medzi named sloty. |
| `end` | Obsah sa umiestni vpravo od textu tlačidla v LTR a vľavo v RTL. |
| `icon-only` | Mal by sa použiť na ikonu v tlačidle, ktoré neobsahuje text. |
| `start` | Obsah je umiestnený vľavo od textu tlačidla v LTR a vpravo v RTL. |