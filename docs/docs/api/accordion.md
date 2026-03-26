---
title: 'Accordion'
---

import Props from '@ionic-internal/component-api/v1-sk/accordion/props.md';
import Methods from '@ionic-internal/component-api/v1-sk/accordion/methods.md';
import Slots from '@ionic-internal/component-api/v1-sk/accordion/slots.md';

<head>
  <title>Accordion: riadenie rozbaľovacích sekcií obsahu</title>
  <meta
    name="description"
    content="Komponent wje-accordion združuje položky wje-accordion-item, riadi ich otváranie a pomáha vytvárať prehľadné rozbaľovacie sekcie s konzistentným správaním."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-accordion` zoskupuje položky `wje-accordion-item` a koordinuje ich stav. Najväčší zmysel má vtedy, keď chcete viaceré rozbaľovacie sekcie so spoločnou logikou, napríklad režim jednej otvorenej položky alebo počiatočne otvorený item cez `index`.

## Základné použitie

Ukážka nižšie ukazuje `wje-accordion` s jedným `wje-accordion-item`, aby bolo jasné, ako wrapper a položka spolupracujú. Headline nemusí byť len text; môžete doň vložiť aj stavové alebo akčné komponenty.

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## Farebné varianty položiek

Farebnosť sa nastavuje na jednotlivé `wje-accordion-item`, nie na samotný wrapper. V jednej skupine tak môžete kombinovať rôzne významové varianty podľa konkrétnej položky.

import Colors from '@site/static/usage/v1/accordion/colors/index.md';

<Colors />

## Viac otvorených položiek naraz

Ukážka demonštruje atribút `multiple`, pri ktorom otvorenie jednej položky nezatvára ostatné. Zároveň používa `index`, ktorý určuje počiatočne otvorený item podľa jeho poradia v DOMe.

import Multiple from '@site/static/usage/v1/accordion/multiple/index.md';

<Multiple />

## Na čo sa oplatí myslieť

- Do wrappera vkladajte priame deti `wje-accordion-item`.
- Ak `multiple` nie je nastavené, otvorenie jednej položky zatvorí ostatné.
- `wje-accordion` je koordinačný wrapper; väčšina vizuálu, slotov a interakcie patrí `wje-accordion-item`.
- Host nastavuje `role="presentation"`, takže prístupnosť interakcie riešia samotné položky.

## Prístupnosť

- Dbajte na to, aby každá položka mala jednoznačný a zrozumiteľný obsah slotu `headline`.
- Ak do headline vkladáte ďalšie interaktívne prvky, otestujte si poradie focusu a klávesnicové správanie v reálnom rozložení.
- Ak je dôležité reagovať na otvorenie alebo zatvorenie položky v nadradenom kóde, počúvajte bubbling eventy z `wje-accordion-item`.

## Odporúčané postupy

- Do jedného accordiona zoskupujte iba sekcie, ktoré spolu tematicky súvisia.
- Ak používate `multiple`, robte to vedome; pri dlhom obsahu sa stránka rýchlo „roztiahne“.
- Farebné varianty používajte na vyjadrenie významu položky, nie iba ako dekoráciu.

## Atribúty a vlastnosti

<Props />

## Metódy

<Methods />

## Sloty

<Slots />
