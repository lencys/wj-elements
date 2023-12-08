---
title: Úvod do WebJET Elementov
sidebar_label: Prehľad
slug: /
hide_table_of_contents: true
demoUrl: https://docs-demo.ionic.io/
demoSourceUrl: https://github.com/ionic-team/docs-demo
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import { Card, CardHeader, Icon } from 'https://cdn.jsdelivr.net/gh/lencys/wj-elements@e5cdd8566b4acaad5c11040bfbb4e09e170074c9/wj-master.js';

<head>
  <title>Moderná sada nástrojov používateľského rozhrania založená na web komponentoch</title>
  <meta
    name="description"
    content="WebJET Elementy sú modernou sadou nástrojov používateľského rozhrania založená na web komponentoch, ktorá je určená na zjednodušenie vývoja webových aplikácií."
  />
  <link rel="canonical" href="https://ionicframework.com/docs" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="x-default" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="en" />
  <meta property="og:url" content="https://ionicframework.com/docs" />
  <link rel="stylesheet" href="./../static/wj-elementy/style.css" />
    <style>{`
  `}</style>
</head>

WebJET Elementy sú modernou sadou nástrojov používateľského rozhrania využívajúca silu web komponentov, ktorá je určená na zjednodušenie vývoja webových aplikácií. Poskytuje kolekciu zapúzdrených a opakovane použiteľných elementov, ktoré môžu výrazne zvýšiť efektivitu a udržiavateľnosť projektov vývoja webových stránok.
Ponukajú jednoduchú integráciu s [React](react.md) a [Vue](vue/overview.md).

Začnite tvoriť svoju aplikáciu [inštaláciou WebJET elementov](intro/cli.md).

<intro-end />

<DocsCards>

 <a href="intro/cli">
    <wj-card>
      <wj-card-header>
          <wj-icon name="world-download" size="large"></wj-icon>
          <wj-card-title>Sprievodca inštaláciou</wj-card-title>
      </wj-card-header>
      <wj-card-content>
      <p>Podrobný sprievodca inštaláciou WebJET elementov.</p>
      </wj-card-content>
    </wj-card>
  </a>

  <wj-card href="intro/cli">
    <wj-card-header>
        <wj-icon name="layout-dashboard" size="large"></wj-icon>
        <wj-card-title href="intro/cli">Elementy</wj-card-title>
    </wj-card-header>
    <wj-card-content>
    <p>Nazrite do knižnice dostupných WebJET elementov.</p>
    </wj-card-content>
  </wj-card>

  <wj-card href="api/grid">
    <wj-card-header>
      <wj-icon name="grid-4x4" size="large"></wj-icon>
      <wj-card-title>Layout</wj-card-title>
    </wj-card-header>
    <wj-card-content>
    <p>Zistite ako si vytvoriť rozloženie stránok podľa vašich potrieb.</p>
    </wj-card-content>
  </wj-card>

  <wj-card href="api/avatar">
    <wj-card-header>
        <wj-icon name="brush" size="large"></wj-icon>
        <wj-card-title>Úprava štýlov</wj-card-title>
    </wj-card-header>
    <wj-card-content>
    <p>Naučte sa ako si jednoducho prispôsobiť vizuál Elements.</p>
    </wj-card-content>
  </wj-card>
  
</DocsCards>


## Prehľad

WebJET Elements je pokročilá platforma na vytváranie a nasadzovanie moderných webových aplikácií a mikrofrontendových riešení. Tento framework je založený na technológii webových komponentov a využíva možnosti webových komponentov a Shadow DOM, aby ponúkol univerzálnu sadu elementov. Tieto elementy sú navrhnuté tak, aby zlepšili a zefektívnili proces vývoja a umožnili vám vytvárať a implementovať pôsobivé aplikácie s vyššou efektivitou.

Kľúčové vlastnosti rámca WebJET Elements Framework:

### Komplexná sada nástrojov používateľského rozhrania
 WebJET Elements obsahuje širokú škálu ovládacích prvkov a komponentov používateľského rozhrania, ktoré sú optimalizované pre webové rozhrania. Tieto komponenty pokrývajú rôzne funkcie a sú navrhnuté tak, aby sa dali ľahko integrovať do akejkoľvek webovej aplikácie.

### Integrácia s populárnymi frameworkami
 Framework podporuje bezproblémovú integráciu s modernými webovými technológiami [React](react.md) a [Vue](vue/overview.md), čím zabezpečuje kompatibilitu a flexibilitu pri vývoji.

### Stabilný a nezávislý

WebJET Elements je postavený na spoľahlivých štandardizovaných webových technológiách W3C a využíva moderné webové rozhrania API, ako sú Custom Elements a Shadow DOM. Vďaka tomu majú komponenty stabilné rozhranie API a nie sú závislé od rozmaru dodávateľa platformy či knižníc tretích strán.

### Využívanie Shadow DOM
 WebJET Elements využíva Shadow DOM a zabezpečuje zapuzdrenie štýlu a správania svojich komponentov, čím podporuje čistejšiu a lepšie udržiavateľnú kódovú základňu.

### Prispôsobenie a flexibilita
 Framework ponúka rozsiahle možnosti prispôsobenia prostredníctvom vlastných vlastností CSS, slotov a shadow parts, čo umožňuje vývojárom prispôsobiť komponenty konkrétnym potrebám.

### Optimalizovaný pre výkon
 Optimalizovaný pre výkon, framework zabezpečuje, že komponenty sú nielen funkčné, ale aj efektívne, čo prispieva k plynulejšiemu používateľskému zážitku.


**V dokumentácii WebJET Elements nájdete podrobné príklady, ktoré vám pomôžu rýchlo a efektívne vytvárať výnimočné webové aplikácie.**

## License

The Ionic UI Toolkit is a free and open source project, released under the permissible <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.
