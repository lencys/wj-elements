---
title: 'Accordion'
---

import Props from '@ionic-internal/component-api/v1-sk/accordion/props.md';
import Events from '@ionic-internal/component-api/v1-sk/accordion/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/accordion/custom-props.md';
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

`wje-accordion` je nadradený kontajner pre viacero položiek `wje-accordion-item`. Sám o sebe nerenderuje bohaté UI ani samostatné hlavičky – jeho hlavnou úlohou je koordinovať stav podriadených položiek, najmä režim „iba jedna otvorená položka naraz“ a počiatočne otvorenú položku cez atribút `index`. Ak potrebujete len jednu rozbaľovaciu sekciu, väčšinu vizuálneho a interakčného správania rieši samotný `wje-accordion-item`; `wje-accordion` dáva zmysel najmä vtedy, keď chcete mať viac položiek so spoločnou logikou.

## Základné použitie

V ukážke nižšie je jedna položka s bohatším obsahom v slotoch `headline`, `description` a `content`. Zároveň je pekne vidieť, že headline nemusí byť iba text – môžete doň vložiť `wje-status`, `wje-dropdown`, menu akcie alebo ďalšie pomocné komponenty.

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## Farebné varianty položiek

Táto ukážka je dôležitá hlavne z jedného dôvodu: farebnosť sa nenastavuje na `wje-accordion`, ale na jednotlivé `wje-accordion-item` cez atribút `color`. Wrapper iba drží skupinu pokope. Ak teda chcete v jednej skupine kombinovať rôzne vizuálne stavy, nastavujete ich vždy na konkrétnych položkách.

import Colors from '@site/static/usage/v1/accordion/colors/index.md';

<Colors />

## Viac otvorených položiek naraz

Ukážka demonštruje atribút `multiple`, vďaka ktorému otvorenie jednej položky automaticky nezatvorí ostatné. Zároveň používa atribút `index`, ktorý určuje položku otvorenú pri inicializácii. Hodnota `index` sa vzťahuje na poradie položiek v DOMe, takže napríklad `1` cieli na druhú položku a `2` na tretiu. Ak potrebujete mať po načítaní otvorenú konkrétnu položku, je dobré si výsledok vždy rýchlo overiť priamo v konkrétnej zostave obsahu.

import Multiple from '@site/static/usage/v1/accordion/multiple/index.md';

<Multiple />

## API komponentu v praxi

Najdôležitejšie pri práci s `wje-accordion` je vedieť, čo robí wrapper a čo už robia jeho položky:

- `wje-accordion` prijíma deti cez predvolený slot; v praxi doň vkladajte priame deti `wje-accordion-item`.
- Pri otvorení položky počúva bubbling event `wje-accordion-item:open` a ak **nie je** nastavené `multiple`, zavolá `collapseAll()` na všetky ostatné položky.
- Vlastné vizuálne časti (`parts`) ani vlastné CSS custom properties wrapper aktuálne nepridáva. Väčšina štýlovania sa deje na úrovni `wje-accordion-item`.
- Wrapper nastavuje na hoste `role="presentation"`, takže prístupnosť interakcie je sústredená na jednotlivé položky, nie na kontajner.

## Kedy použiť

Použite `wje-accordion`, keď máte viac logicky oddelených sekcií a chcete používateľovi umožniť otvárať ich postupne bez zahltenia obrazovky. Typické prípady sú FAQ, detailné nastavenia, doplnkové informácie ku karte, viacúrovňové formulárové sekcie alebo kontextový obsah, ktorý nemá byť stále rozbalený.

## Kedy nepoužiť

Nepoužívajte ho ako náhradu za navigáciu medzi obrazovkami, za tabuľku s rýchlym porovnaním hodnôt ani za obsah, ktorý musí byť neustále viditeľný. Ak používateľ potrebuje porovnávať viac sekcií naraz a prepínanie by ho spomaľovalo, vhodnejší býva grid, tabs alebo klasické rozloženie stránky.

## Prístupnosť

- Dbajte na to, aby každá položka mala jednoznačný a zrozumiteľný obsah slotu `headline`.
- Ak do headline vkladáte ďalšie interaktívne prvky, otestujte si poradie focusu a klávesnicové správanie v reálnom rozložení.
- Samotný wrapper je prezentačný; roly a ARIA väzby pre tlačidlovú hlavičku a panel nastavuje `wje-accordion-item`.

## Odporúčané postupy

- Do jedného accordiona zoskupujte iba sekcie, ktoré spolu tematicky súvisia.
- Ak používate `multiple`, robte to vedome – pri dlhom obsahu sa dá stránka veľmi rýchlo „roztiahnuť“.
- Farebné varianty používajte na vyjadrenie významu položky, nie iba ako dekoráciu.
- Ak reagujete na otvorenie položky v nadradenom kóde, počúvajte event priamo na `wje-accordion`; event z položky naň dobubbluje.

## Atribúty a vlastnosti

<Props />

## Udalosti

Samotný wrapper nevytvára samostatný nový event navyše, ale je dôležitým miestom, na ktorom sa oplatí počúvať bubbling eventy z `wje-accordion-item`, najmä `wje-accordion-item:open` a `wje-accordion-item:close`.

<Events />

## Metódy

Najpraktickejšie verejné metódy wrappera sú `collapseAll(exception)` a `getAccordions()`. Prvá zatvorí všetky položky okrem jednej zadanej, druhá vráti priame deti `wje-accordion-item`.

<Methods />

## CSS tieňové časti

`wje-accordion` momentálne nepridáva vlastné shadow parts. Ak potrebujete detailne štylovať vizuál položiek, použite API a parts na `wje-accordion-item`.

<Parts />

## CSS vlastné premenné

Wrapper aktuálne nepridáva vlastné dokumentované CSS custom properties; štýlovanie sa sústreďuje na podriadené položky.

<CustomProps />

## Sloty

Z pohľadu použitia rátajte s predvoleným slotom pre priame deti `wje-accordion-item`.

<Slots />
