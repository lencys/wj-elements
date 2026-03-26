---
title: 'Accordion Item'
---

import Props from '@ionic-internal/component-api/v1-sk/accordion-item/props.md';
import Events from '@ionic-internal/component-api/v1-sk/accordion-item/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/accordion-item/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/accordion-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/accordion-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/accordion-item/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>Accordion Item: jedna rozbaľovacia položka s headline a obsahom</title>
  <meta
    name="description"
    content="Komponent wje-accordion-item predstavuje jednu interaktívnu položku akordeónu so slotmi pre headline, description, toggle a content, s vlastnými eventmi a verejnými metódami expand/collapse."
  />
</head>

<EncapsulationPill type="shadow" />

`wje-accordion-item` je samotná interaktívna položka vnútri `wje-accordion`. Práve tu sa rieši klik na hlavičku, prepínanie stavov, ARIA väzby medzi headline a obsahom, fallback toggle ikona aj eventy pri otvorení a zatvorení.

## Základné použitie v kontexte skupiny

Ukážka nižšie používa jednu položku vo vnútri `wje-accordion`, aby bolo jasné, kam patria sloty `headline`, `description` a `content`. Headline môže okrem textu obsahovať aj ďalšie pomocné alebo akčné komponenty.

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## Na čo sa oplatí myslieť

- Slot `headline` tvorí klikateľnú hlavičku. Komponent jej po vyrenderovaní nastaví `role="button"`, `tabindex="0"`, `aria-controls` a `aria-expanded`.
- Slot `description` je doplnkový text v hlavičke a `content` drží rozbaľovaný panel.
- Slot `toggle` je voliteľný. Ak ho nevyplníte, komponent zobrazí fallback `wje-icon` s chevrónom.
- Eventy `wje-accordion-item:open` a `wje-accordion-item:close` bubblujú na nadradený `wje-accordion`.
- Programové otvorenie a zatvorenie riešia verejné metódy `expand()` a `collapse()`.
- Farebné varianty nastavujete cez atribút `color`; detailný vizuál sa ladí cez shadow parts a CSS custom properties.

## Prístupnosť

- Headline je ovládateľný klávesami `Enter` a `Space`.
- Obsah panelu má `role="region"` a je previazaný s headline cez `aria-labelledby`.
- Ak do headline vkladáte viac interaktívnych prvkov, otestujte, či sa ich ovládanie „nebije“ s klikom na celú hlavičku.

## Odporúčané postupy

- Slot `headline` používajte na jasný názov sekcie, nie na priveľmi dlhý odsek textu.
- Slot `description` držte stručný; detailné vysvetlenie presuňte skôr do `content`.
- Ak potrebujete vlastný toggle vzhľad, vyplňte slot `toggle`, ale zachovajte používateľovi zrozumiteľnú affordance, že ide o rozbaľovací prvok.
- Pri programovom otváraní a zatváraní myslite na konzistenciu so stavom nadradeného `wje-accordion`.

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
