---
title: 'Animation'
---

import Props from '@ionic-internal/component-api/v1-sk/animation/props.md';
import Events from '@ionic-internal/component-api/v1-sk/animation/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/animation/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/animation/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/animation/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/animation/slots.md';

<head>
  <title>Animation: animovanie prvého vloženého elementu pomocou Animate.css</title>
  <meta
    name="description"
    content="Komponent wje-animation obalí jeden hlavný element, načíta keyframy z Animate.css a prehrá ich cez Web Animations API s možnosťou programového ovládania."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-animation` je jednoduchý obal pre prehrávanie Animate.css animácií nad vloženým obsahom. Komponent načíta keyframy, aplikuje ich na prvý element z predvoleného slotu a prehrá ich cez Web Animations API.

## Základné použitie

Ukážka nižšie obalí `wje-avatar` do `wje-animation` a ukazuje základné nastavenie animácie cez atribút `name` aj programové ovládanie cez `play()` a `cancel()`.

import Basic from '@site/static/usage/v1/animation/basic/index.md';

<Basic />

## Na čo si dať pozor

- Animácia sa aplikuje na prvý priradený element z predvoleného slotu, preto do komponentu vkladajte jeden hlavný wrapper.
- Predvolený názov animácie je `heartBeat`.
- Atribúty `endDelay` a `iterationStart` sa v aktuálnej implementácii zapisujú v camelCase.
- Komponent sám nie je interaktívny prvok; host nastavuje `role="presentation"`.
- Zoznam dostupných animácií získate cez `getAnimationsArray()`.

## Kedy použiť

Použite `wje-animation`, keď chcete rýchlo oživiť jeden konkrétny prvok, napríklad avatar, badge, notifikáciu alebo stavový indikátor.

## Kedy nepoužiť

Nepoužívajte ho na zložité sekvenčné animácie viacerých elementov alebo tam, kde pohyb neprináša žiadnu informačnú hodnotu.

## Prístupnosť

- Animácia má podporovať význam, nie ho nahrádzať.
- Pri dôležitých tokoch myslite na reduced motion.
- Ak je animovaný obsah interaktívny, prístupnosť rieši vložený element.

## Odporúčané postupy

- Pre opakované spúšťanie používajte `play()` a `cancel()`.
- Pri zmene `name` za behu si overte refresh komponentu v konkrétnom use-case.
- Pri dlhších alebo nekonečných animáciách sledujte rušivosť a výkon, najmä v zoznamoch.

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
