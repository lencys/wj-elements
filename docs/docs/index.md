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

[//]: # (<style>{`)

[//]: # (    docs-cards > a{)

[//]: # (      display: flex;)

[//]: # (    })

[//]: # (  `}</style>)

<script type="module" src="https://cdn.jsdelivr.net/npm/wj-elements@0/dist/wje-master.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/wj-elements@0/dist/light.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/wj-elements@0/dist/dark.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/wj-elements@0/dist/styles.css" />

</head>

WebJET Elementy sú modernou sadou nástrojov používateľského rozhrania využívajúca silu web komponentov, ktorá je určená na zjednodušenie vývoja webových aplikácií. Poskytuje kolekciu zapúzdrených a opakovane použiteľných elementov, ktoré môžu výrazne zvýšiť efektivitu a udržiavateľnosť projektov vývoja webových stránok.
Ponúkajú jednoduchú integráciu s React a Vue.

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

WebJET Elements je pokročilá platforma na vytváranie a nasadzovanie moderných webových aplikácií a mikrofrontendových riešení. Tento framework je založený na technológii webových komponentov a využíva možnosti webových komponentov a Shadow DOM, aby ponúkol univerzálnu sadu elementov. Tieto elementy sú navrhnuté tak, aby zlepšili a zefektívnili proces vývoja a umožnili vám vytvárať a implementovať pôsobivé aplikácie s vyššou efektivitou.

Kľúčové vlastnosti rámca WebJET Elements Framework:

### Komplexná sada nástrojov používateľského rozhrania

WebJET Elements obsahuje širokú škálu ovládacích prvkov a komponentov používateľského rozhrania, ktoré sú optimalizované pre webové rozhrania. Tieto komponenty pokrývajú rôzne funkcie a sú navrhnuté tak, aby sa dali ľahko integrovať do akejkoľvek webovej aplikácie.

### Integrácia s populárnymi frameworkami

Framework podporuje bezproblémovú integráciu s modernými webovými technológiami React a Vue, čím zabezpečuje kompatibilitu a flexibilitu pri vývoji.

### Stabilný a nezávislý

WebJET Elements je postavený na spoľahlivých štandardizovaných webových technológiách W3C a využíva moderné webové rozhrania API, ako sú Custom Elements a Shadow DOM. Vďaka tomu majú komponenty stabilné rozhranie API a nie sú závislé od rozmaru dodávateľa platformy či knižníc tretích strán.

### Využívanie Shadow DOM

WebJET Elements využíva Shadow DOM a zabezpečuje zapuzdrenie štýlu a správania svojich komponentov, čím podporuje čistejšiu a lepšie udržiavateľnú kódovú základňu.

### Prispôsobenie a flexibilita

Framework ponúka rozsiahle možnosti prispôsobenia prostredníctvom vlastných vlastností CSS, slotov a shadow parts, čo umožňuje vývojárom prispôsobiť komponenty konkrétnym potrebám.

### Optimalizovaný pre výkon

Optimalizovaný pre výkon, framework zabezpečuje, že komponenty sú nielen funkčné, ale aj efektívne, čo prispieva k plynulejšiemu používateľskému zážitku.

**V dokumentácii WebJET Elements nájdete podrobné príklady, ktoré vám pomôžu rýchlo a efektívne vytvárať výnimočné webové aplikácie.**

## Licencia

Elements je slobodný projekt s otvoreným zdrojovým kódom, vydaný pod povolenou licenciou MIT. To znamená, že sa môže bezplatne používať v osobných alebo komerčných projektoch. MIT je rovnaká licencia, akú používajú také populárne projekty ako jQuery a Ruby on Rails.

Tento obsah dokumentácie (ktorý sa nachádza v repozitári <a href="https://github.com/lencys/wj-elements" target="_blank">WJ Elements</a>) je licencovaný pod licenciou <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.</a>.
