---
title: Úvod do WebJET Elements
sidebar_label: Úvod
slug: /
hide_table_of_contents: true
---

import DocsCards from '@components/global/DocsCards';

<head>

{' '}
<title>Moderná sada nástrojov používateľského rozhrania založená na web komponentoch</title>
<meta
  name="description"
  content="WebJET Elementy sú modernou sadou nástrojov používateľského rozhrania založená na web komponentoch, ktorá je určená na zjednodušenie vývoja webových aplikácií."
/>
<link rel="canonical" href="https://elements.webjet.sk/" />
<link rel="alternate" href="https://elements.webjet.sk/" hreflang="x-default" />
<link rel="alternate" href="https://elements.webjet.sk/" hreflang="en" />
<meta property="og:url" content="https://elements.webjet.sk/" />

<script data-base-path="/wje-elementy/"></script>
<script type="module" src="/wje-elementy/wje-master.js"></script>
<link rel="stylesheet" href="/wje-elementy/light.css" />
<link rel="stylesheet" href="/wje-elementy/dark.css" />
<link rel="stylesheet" href="/wje-elementy/styles.css" />

</head>

WebJET Elements sú moderná sada UI komponentov postavená na webových komponentoch. Poskytujú zapuzdrené a znovu použiteľné elementy, ktoré môžete používať v čistom HTML/JavaScripte aj v aplikáciách postavených na Reacte alebo Vue.

Po načítaní knižnice sa komponenty registrujú ako custom elements, takže ich môžete používať priamo v markupe, napríklad ako `<wje-button>`, `<wje-card>` alebo `<wje-dialog>`.

Začnite tvoriť svoju aplikáciu [inštaláciou WebJET elementov](intro/install.md).

<intro-end />

<DocsCards>

{' '}
<a href="intro/install">   
  <wje-card>   
    <wje-card-header>   
      <wje-icon name="world-download" size="large"></wje-icon>   
      <wje-card-title>Sprievodca inštaláciou</wje-card-title>   
    </wje-card-header>   
    <wje-card-content>   
      <p>Podrobný sprievodca inštaláciou WebJET elementov.</p>   
    </wje-card-content>   
  </wje-card>   
</a>   

{' '}
<a href="components">
  <wje-card>
    <wje-card-header>
      <wje-icon name="layout-dashboard" size="large"></wje-icon>
      <wje-card-title href="intro/cli">Elementy</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Nazrite do knižnice dostupných WebJET elementov.</p>
    </wje-card-content>
  </wje-card>
</a>

{' '}
<a href="api/layout">
  <wje-card>
    <wje-card-header>
      <wje-icon name="layout" size="large"></wje-icon>
      <wje-card-title>Layout</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Zistite ako si vytvoriť rozloženie stránok podľa vašich potrieb.</p>
    </wje-card-content>
  </wje-card>
</a>

{' '}
<a href="theming/basics">
  <wje-card>
    <wje-card-header>
      <wje-icon name="brush" size="large"></wje-icon>
      <wje-card-title>Úprava štýlov</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Naučte sa ako si jednoducho prispôsobiť vizuál Elements.</p>
    </wje-card-content>
  </wje-card>
</a>

</DocsCards>

## Prehľad

WebJET Elements je knižnica komponentov pre moderné webové aplikácie a mikrofrontendové riešenia. Je postavená na štandardoch webovej platformy, takže nie je naviazaná na jeden framework alebo runtime model.

Kľúčové vlastnosti WebJET Elements:

### Komplexná sada nástrojov používateľského rozhrania

WebJET Elements obsahuje širokú škálu ovládacích prvkov a komponentov používateľského rozhrania, ktoré sú optimalizované pre webové rozhrania. Tieto komponenty pokrývajú rôzne funkcie a sú navrhnuté tak, aby sa dali ľahko integrovať do akejkoľvek webovej aplikácie.

### Integrácia s populárnymi frameworkami aj bez frameworku

Komponenty viete použiť samostatne alebo ich integrovať do projektov v Reacte a Vue. To zjednodušuje adopciu v existujúcich aplikáciách aj v hybridných architektúrach.

### Stabilný a nezávislý základ

WebJET Elements využíva štandardy ako Custom Elements, Shadow DOM a ES moduly. Vďaka tomu majú komponenty stabilné API a dajú sa dlhodobo používať aj mimo jedného konkrétneho frameworku.

### Využívanie Shadow DOM

WebJET Elements využíva Shadow DOM a zabezpečuje zapuzdrenie štýlu a správania svojich komponentov, čím podporuje čistejšiu a lepšie udržiavateľnú kódovú základňu.

### Prispôsobenie a flexibilita

Vzhľad komponentov sa prispôsobuje najmä cez CSS premenné, pripravené svetlé/tmavé témy a tam, kde je to vhodné, aj cez CSS Shadow Parts.

### Optimalizovaný pre výkon a znovupoužitie

Komponenty sú navrhnuté tak, aby boli ľahko znovu použiteľné, samostatné a dobre fungovali aj vo väčších aplikáciách.

**V dokumentácii WebJET Elements nájdete podrobné príklady, ktoré vám pomôžu rýchlo a efektívne vytvárať výnimočné webové aplikácie.**

## Licencia

Elements je slobodný projekt s otvoreným zdrojovým kódom, vydaný pod povolenou licenciou MIT. To znamená, že sa môže bezplatne používať v osobných alebo komerčných projektoch. MIT je rovnaká licencia, akú používajú také populárne projekty ako jQuery a Ruby on Rails.

Tento obsah dokumentácie (ktorý sa nachádza v repozitári <a href="https://github.com/lencys/wj-elements" target="_blank">WJ Elements</a>) je licencovaný pod licenciou <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.</a>.
