---
title: 'Aside'
---

import Props from '@ionic-internal/component-api/v1-sk/aside/props.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/aside/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/aside/slots.md';

<head>
  <title>Aside: doplnkový bočný panel v layoute</title>
  <meta
    name="description"
    content="Komponent wje-aside predstavuje bočný doplnkový stĺpec layoutu pre navigáciu, filtre alebo pomocný obsah popri elemente wje-main."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-aside` je layoutový prvok pre doplnkový obsah vedľa `wje-main`. Najčastejšie sa používa na sekundárnu navigáciu, filtre, sumár, stavový panel alebo pomocné akcie.

## Príklad použitia v layoute

Ukážka nižšie zobrazuje viac bežných layout kombinácií s `wje-container`, `wje-header`, `wje-main` a `wje-footer`. Sledujte hlavne atribút `width`, ktorý určuje šírku bočného stĺpca v konkrétnom layoute.

import LayoutBasic from '@site/static/usage/v1/layout/basic/index.md';

<LayoutBasic />

## Na čo sa oplatí myslieť

- Obsah sa vkladá cez predvolený slot.
- `width` nastavuje CSS premennú `--wje-aside-width`, teda výslednú šírku panelu.
- Pri `fixed` komponent na desktopových breakpointoch používa `position: fixed`.
- `top` sa uplatní spolu s `fixed` a nastaví horný offset cez `--wje-aside-top`.
- Na menších viewportoch je aside predvolene skrytý. Variant `top-start` a trieda `open` riešia layout, nie vlastnú stavovú logiku komponentu.

## Prístupnosť

- Používajte ho tam, kde má sekundárny obsah skutočne zmysel popri `main`, nie namiesto neho.
- Zachovajte logickú štruktúru dokumentu a poradie fokusovateľných prvkov.
- Ak sa v mobile zobrazuje ako vysunutý panel riadený nadradenou aplikáciou, nezabudnite zvládnuť focus management na úrovni tejto nadradenej logiky.

## Odporúčané postupy

- Šírku určujte vedome podľa typu obsahu; na navigáciu často stačí stabilná pevná šírka, pri bohatšom obsahu sa oplatí tokenizovaná CSS premenná.
- Ak používate `fixed`, vždy myslite na `top`, aby sa aside neprekrýval s fixným headerom.
- Na mobiloch si správanie otestujte samostatne; default desktop layout automaticky neznamená dobré mobilné UX.
- Bočný panel používajte na doplnkový obsah, nie na to, čo je kľúčové pre dokončenie hlavnej úlohy používateľa.

## Atribúty a vlastnosti

<Props />

## CSS vlastné premenné

<CustomProps />

## Sloty

<Slots />
