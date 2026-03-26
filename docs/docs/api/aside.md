---
title: 'Aside'
---

import Props from '@ionic-internal/component-api/v1-sk/aside/props.md';
import Events from '@ionic-internal/component-api/v1-sk/aside/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/aside/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/aside/parts.md';
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

`wje-aside` je layoutový prvok určený pre doplnkový obsah vedľa `wje-main`. Typicky v ňom býva sekundárna navigácia, filtre, sumarizácia, obsahový panel so stavom stránky alebo doplnkové akcie. Na rozdiel od overlay komponentov sám nerieši bohatú interakciu ani aplikačný stav – jeho úlohou je poskytnúť stabilný priestor v rozložení stránky.

## Príklad použitia v layoute

Nasledujúca ukážka nepredstavuje iba jeden izolovaný aside, ale viac bežných layout kombinácií s `wje-container`, `wje-header`, `wje-main` a `wje-footer`. Pri čítaní ukážky si všímajte hlavne atribút `width` na `wje-aside`, ktorý určuje šírku bočného stĺpca v konkrétnom layoute.

import LayoutBasic from '@site/static/usage/v1/layout/basic/index.md';

<LayoutBasic />

## Ako sa `wje-aside` používa v praxi

Najdôležitejšie správanie aktuálnej implementácie je toto:

- obsah sa vkladá cez predvolený slot,
- atribút `width` sa používa na nastavenie CSS premennej `--wje-aside-width`, teda praktickej šírky bočného panelu,
- ak je nastavený atribút `fixed`, komponent na desktopových breakpointoch používa `position: fixed`,
- atribút `top` sa uplatní spolu s `fixed` a nastaví horný offset cez `--wje-aside-top`.

To znamená, že `wje-aside` je veľmi jednoduchý, ale zároveň flexibilný. Väčšinu výsledného správania určuje to, do akého layoutu ho vložíte a aké CSS custom properties alebo šírku mu nastavíte.

## Dôležitá poznámka k mobilnému správaniu

V aktuálnych stylesheetoch je `wje-aside` na menších viewportoch predvolene skrytý. Štýly zároveň obsahujú aj mobilný variant `variant="top-start"` a triedu `open`, ktoré sa dajú využiť na zobrazenie panelu ako vysúvanej vrstvy. Keďže však komponent neposkytuje vlastné metódy ani eventy na prepínanie tohto stavu, berte túto časť skôr ako layout detail, ktorý musí riadiť nadradená aplikácia alebo iný komponent.

## Kedy použiť

Použite `wje-aside`, keď potrebujete vedľa hlavného obsahu udržať stabilný doplnkový panel. Hodí sa pre navigáciu v sekcii, filtre katalógu, obsahové TOC, status alebo summary panel, administračné pomocné akcie či viacstĺpcový pracovný layout.

## Kedy nepoužiť

Nepoužívajte ho ako náhradu za modál, drawer so samostatnou logikou alebo za komponent, ktorý má sám riešiť opening/closing správanie. Ak potrebujete komplexné mobilné prekrývanie, focus trap a vlastné eventy pri otvorení, vhodnejší je overlay komponent s explicitnou stavovou logikou.

## Prístupnosť

- Používajte ho tam, kde má sekundárny obsah skutočne zmysel popri `main`, nie namiesto neho.
- Zachovajte logickú štruktúru dokumentu a poradie fokusovateľných prvkov.
- Ak sa v mobile zobrazuje ako vysunutý panel riadený nadradenou aplikáciou, nezabudnite zvládnuť focus management na úrovni tejto nadradenej logiky.

## Odporúčané postupy

- Šírku určujte vedome podľa typu obsahu; na navigáciu zvyčajne stačí stabilná pevná šírka, na bohatší obsah môže byť vhodnejšia tokenizovaná CSS premená.
- Ak používate `fixed`, vždy myslite na `top`, aby sa aside neprekrýval s fixným headerom.
- Na mobiloch si správanie otestujte samostatne; default desktop layout automaticky neznamená dobré mobilné UX.
- Bočný panel používajte na doplnkový obsah, nie na to, čo je kľúčové pre dokončenie hlavnej úlohy používateľa.

## Atribúty a vlastnosti

<Props />

## Udalosti

`wje-aside` aktuálne neemituje vlastné custom eventy.

<Events />

## Metódy

Komponent aktuálne neposkytuje vlastné verejné metódy; správanie sa nastavuje najmä cez atribúty, layout a CSS.

<Methods />

## CSS tieňové časti

`wje-aside` momentálne nepridáva vlastné shadow parts.

<Parts />

## CSS vlastné premenné

Pri reálnom použití sú najdôležitejšie najmä `--wje-aside-width`, `--wje-aside-top`, `--wje-aside-border-color`, `--wje-aside-border-width` a `--wje-aside-border-style`.

<CustomProps />

## Sloty

Komponent používa predvolený slot pre akýkoľvek obsah bočného panelu.

<Slots />
