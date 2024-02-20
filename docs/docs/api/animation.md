---
title: "Animation"
---

import Props from '@ionic-internal/component-api/v1/avatar/props.md';
import Events from '@ionic-internal/component-api/v1/avatar/events.md';
import Methods from '@ionic-internal/component-api/v1/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v1/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/avatar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/avatar/slots.md';

<head>
  <title>Animation: Integrácia animácií do webových aplikácií</title>
  <meta name="description" content="Element Animation ponúka integráciu animácií do webových aplikácií čím umožňuje vytváranie pútavých používateľských rozhraní. Poskytuje možnosti prispôsobenia v podobe oneskorenia, trvania alebo napríklad tiež počtu opakovaní animácií. " />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Animation ponúka integráciu animácií do webových aplikácií čím zjednodušuje vytváranie pútavých používateľských rozhraní. Poskytuje možnosti prispôsobenia v podobe oneskorenia, trvania alebo napríklad tiež počtu opakovaní animácií. 


## Základné použitie

import Basic from '@site/static/usage/v1/animation/basic/index.md';

<Basic />

## Atribúty a Vlastnosti
ahoj
<Props />

### delay

|  |  |
| --- | --- |
| Popis | Vlastnosť určujúca oneskorenie pred spustením animácie v milisekundách. |
| Atribút | `delay` |
| Typ | `number` |
| Predvolená hodnota | `0` |

### direction

|  |  |
| --- | --- |
| Popis | Vlastnosť určujúca smer animácie |
| Atribút | `direction` |
| Typ | `normal`, `reverse`, `alternate`, `alternate-reverse` |
| Predvolená hodnota | `normal` |


### duration

|  |  |
| --- | --- |
| Popis | Vlastnosť udávajúca trvanie animácie v milisekundách. |
| Atribút | `duration` |
| Typ | `number` |
| Predvolená hodnota | `1000` |

### easing

|  |  |
| --- | --- |
| Popis | Vlastnosť určujúca funkciu zvoľnenia pre animáciu. |
| Atribút | `easing` |
| Typ | `ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `step-start`, `step-end` |
| Predvolená hodnota | `linear` |

### endDelay

|  |  |
| --- | --- |
| Popis | Vlastnosť určujúca zdržanie po skončení animácie v milisekundách. |
| Atribút | `endDelay` |
| Typ | `number` |
| Predvolená hodnota | `0` |

### fill

|  |  |
| --- | --- |
| Popis | Vlastnosť definujúca režim výplne animácie (pred a po animácii). |
| Atribút | `fill` |
| Typ | `auto`, `none`, `forwards`, `backwards`, `both` |
| Predvolená hodnota | `auto` |

### iterations

|  |  |
| --- | --- |
| Popis | Vlastnosť definujúca počet iterácií pre animáciu. |
| Atribút | `iterations` |
| Typ | `"infinite"`, `number` |
| Predvolená hodnota | `infinite` |

### name

|  |  |
| --- | --- |
| Popis | Vlastnosť definujúca názov animácie, ktorá sa má použiť. Zoznam všetkých dostupných animácií nájdete na  [animate.style](https://animate.style/). |
| Atribút | `name` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |


## Eventy

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

Pre tento komponent nie sú k dispozícií žiadne CSS custom vlastnosti.

## Sloty

Pre tento komponent nie sú k dispozícií žiadne pomenované sloty.
