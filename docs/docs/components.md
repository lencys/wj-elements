---
title: WebJET Elementy
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>

{' '}
<title>UI Komponenty | Stavebné prvky aplikácie</title>
<meta
  name="description"
  content=" WebJET Elements obsahuje širokú škálu komponentov, ktoré sú optimalizované pre webové rozhrania. Tieto komponenty pokrývajú rôzne funkcie a sú navrhnuté tak, aby sa dali ľahko integrovať do akejkoľvek webovej aplikácie."
/>
<style>{`
    :root {
      --doc-item-container-width: 60rem;
    };
    wje-icon {
      padding: 12px;
      --wje-icon-size: 32px;
    };
    docs-cards > a {
      display: flex;
        color: var(--wje-color-primary-9)!important;
    };
  `}</style>

{' '}

<script data-base-path="/wje-elementy/"></script>
<script type="module" src="/wje-elementy/wje-master.js"></script>
<link rel="stylesheet" href="/wje-elementy/light.css" />
<link rel="stylesheet" href="/wje-elementy/dark.css" />
<link rel="stylesheet" href="/wje-elementy/styles.css" />

</head>

WebJET Elements obsahuje širokú škálu komponentov, ktoré sú optimalizované pre webové rozhrania. Tieto komponenty pokrývajú rôzne funkcie a sú navrhnuté tak, aby sa dali ľahko integrovať do akejkoľvek webovej aplikácie.

<intro-end />

<!-- Todo: Linky -->

<DocsCards>
<a href="../api/accordion">
    <wje-card className="Card-without-image" href="../api/accordion">
        <wje-card-header>
            <wje-icon name="triangle-inverted" size="large"></wje-icon>
            <wje-card-title>Accordion</wje-card-title>
        </wje-card-header>
        <wje-card-content>
          <p>Jednoduchá integrácia animácií do webových aplikácií.</p>
        </wje-card-content>
    </wje-card>
  </a>
  <a href="../api/animation">
    <wje-card className="Card-without-image" href="../api/animation">
        <wje-card-header>
            <wje-icon name="bounce-right" size="large"></wje-icon>
            <wje-card-title>Animation</wje-card-title>
        </wje-card-header>
        <wje-card-content>
          <p>Jednoduchá integrácia animácií do webových aplikácií.</p>
        </wje-card-content>
    </wje-card>
  </a>
  <a href="../api/avatar">
    <wje-card className="Card-without-image" href="../api/avatar">
        <wje-card-header>
            <wje-icon name="user" size="large"></wje-icon>
            <wje-card-title>Avatar</wje-card-title>
        </wje-card-header>
        <wje-card-content>
          <p>Element avatar slúži na vizuálnu prezentáciu používateľa alebo subjektu.</p>
        </wje-card-content>
    </wje-card>
  </a>

<a href="../api/badge">
  <wje-card href="../api/badge">
    <wje-card-header>
      <wje-icon name="badge" size="large"></wje-icon>
      <wje-card-title>Badge</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Badge slúži ako upozornenie, že k elementu sú priradené ďalšie elementy a informujú používateľa o ich počte.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/breadcrumbs">
  <wje-card href="../api/breadcrumbs">
    <wje-card-header>
      <wje-icon name="badges" size="large" style={{ transform: 'rotate(270deg)' }}></wje-icon>
      <wje-card-title>Breadcrumbs</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Breadcrumbs je komponent, ktorý zobrazuje cestu, po ktorej používateľ prešiel v rámci aplikácie alebo webu.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/button">
  <wje-card href="../api/button">
    <wje-card-header>
      <wje-icon name="click" size="large"></wje-icon>
      <wje-card-title>Button</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Button (tlačidlo) je klikateľný element na vyvolávanie akcií, ktorý umožnuje zobraziť text, ikonu, prípadne
        oboje.{' '}</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/card">
  <wje-card href="../api/card">
    <wje-card-header>
      <wje-icon name="credit-card" size="large"></wje-icon>
      <wje-card-title>Card</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Card je flexibilný a rozšíriteľný kontajner formátu karty, ktorý umožňuje zobraziť širokú škálu obsahu.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/checkbox">
  <wje-card href="../api/checkbox">
    <wje-card-header>
      <wje-icon name="checkbox" size="large"></wje-icon>
      <wje-card-title>Checkbox</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Checkbox umožňuje používateľom vybrať jednu alebo viac možností z množiny.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/chip">
  <wje-card href="../api/chip">
    <wje-card-header>
      <wje-icon name="capsule-horizontal" size="large"></wje-icon>
      <wje-card-title>Chip</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Chip je univerzálny element, ktorý predstavuje malý vizuálny blok obsahujúci rôzne ďalšie elementy, ako
        napríklad avatary, text a ikony.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/color-picker">
  <wje-card href="../api/color-picker">
    <wje-card-header>
      <wje-icon name="color-picker" size="large"></wje-icon>
      <wje-card-title>Color picker</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Color picker je element, ktorý zobrazuje farebnú paletu a umožňuje používateľom vybrať jednu z jej farieb.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/copy-button">
  <wje-card href="../api/copy-button">
    <wje-card-header>
      <wje-icon name="copy" size="large"></wje-icon>
      <wje-card-title>Copy button</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Copy button umožnuje jedným kliknutím skopírovať želaný obsah do clipboardu.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/dialog">
  <wje-card href="../api/dialog">
    <wje-card-header>
      <wje-icon name="window-maximize" size="large"></wje-icon>
      <wje-card-title>Dialog</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Dialog zobrazuje dialógové okno nachádzajúce sa nad obsahom aplikácie.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/dropdown">
  <wje-card href="../api/dropdown">
    <wje-card-header>
      <wje-icon name="menu-deep" size="large" style={{ transform: 'rotate(180deg)' }}></wje-icon>
      <wje-card-title>Dropdown</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Dropdown element slúži na zobrazenie kontextového menu po kliknutí na tlačidlo.</p>
    </wje-card-content>
  </wje-card>
</a>
<a href="../api/file-upload">
  <wje-card className="Card-without-image" href="../api/file-upload">
    <wje-card-header>
      <wje-icon name="file-upload" size="large"></wje-icon>
      <wje-card-title>File Upload</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Jednoduchá integrácia animácií do webových aplikácií.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/icon">
  <wje-card href="../api/icon">
    <wje-card-header>
      <wje-icon name="icons" size="large"></wje-icon>
      <wje-card-title>Icon</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Icon poskytuje jednoduchý spôsob zobrazenia ikon zo vstavanej sady SVG obrázkov.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/icon-picker">
  <wje-card href="../api/icon-picker">
    <wje-card-header>
      <wje-icon name="icons" size="large"></wje-icon>
      <wje-card-title>Icon Picker</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Icon picker umožňuje používateľovi nájsť a zvoliť ikonu zo sady dostupných ikon.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/img-comparer">
  <wje-card href="../api/image-comparer">
    <wje-card-header>
      <wje-icon name="photo-scan" size="large"></wje-icon>
      <wje-card-title>Image comparer</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Image Comparer slúži na porovnanie dvoch obrázkov pomocou vstavaného posuvníka.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/grid">
  <wje-card href="../api/grid">
    <wje-card-header>
      <wje-icon name="grid-4x4" size="large"></wje-icon>
      <wje-card-title>Grid</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Systém Grid je flexibilný spôsob vytvárania responzívnych rozvrhnutí (layoutov) rozdelením obrazovky na mriežku.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/infinite-scroll">
  <wje-card href="../api/infinite-scroll">
    <wje-card-header>
      <wje-icon name="infinity" size="large"></wje-icon>
      <wje-card-title>Infinite Scroll</wje-card-title>
    </wje-card-header>
    <wje-card-content>
        <p>Infinite Scroll umožňuje implementovať dynamické načítavanie dát, keď používatelia scrollujú väčším množstvom obsahu.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/input">
  <wje-card href="../api/input">
    <wje-card-header>
      <wje-icon name="input-check" size="large"></wje-icon>
      <wje-card-title>Input</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Input element rozširuje možnosti štandardného HTML inputu pokročilými funkciami a možnosťami prispôsobenia.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/item">
  <wje-card href="../api/item">
    <wje-card-header>
      <wje-icon name="list" size="large"></wje-icon>
      <wje-card-title>Item</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Komponenty Item sú bloky, ktoré môžu obsahovať rôzne typy obsahu vrátane textu, ikon, avatarov, obrázkov, a mnoho iného.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/level-indicator">
  <wje-card href="../api/level-indicator">
    <wje-card-header>
      <wje-icon name="menu-deep" size="large"></wje-icon>
      <wje-card-title>Level indicator</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Komponent Level indicator zobrazuje úroveň alebo pokrok v procese.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/list">
  <wje-card href="../api/list">
    <wje-card-header>
      <wje-icon name="list" size="large"></wje-icon>
      <wje-card-title>List</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Komponent List sa skladá z viacerých elementov Item a môže obsahovať text, tlačidlá, ikony, náhľady obrázkov, a mnoho iného.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/masonry">
  <wje-card href="../api/masonry">
    <wje-card-header>
      <wje-icon name="layout-dashboard" size="large"></wje-icon>
      <wje-card-title>Masonry</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Menu element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a vyvolá sa napríklad kliknutím na tlačidlo.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/menu">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="menu-2" size="large"></wje-icon>
      <wje-card-title>Menu</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Menu element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a vyvolá sa napríklad kliknutím na tlačidlo.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/progress-bar">
  <wje-card href="../api/progress-bar">
    <wje-card-header>
      <wje-icon name="progress" size="large"></wje-icon>
      <wje-card-title>Progress Bar</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Progress Bar element je komponent navrhnutý na vizualizáciu priebehu.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/radio">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="circle-dot" size="large"></wje-icon>
      <wje-card-title>Radio</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Radio element je rozšírená verzia štandardného HTML radio elementu.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/select">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="select" size="large"></wje-icon>
      <wje-card-title>Select</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Select element rozširuje možnosti štandardného HTML select elementu.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/slider">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="adjustments-horizontal" size="large"></wje-icon>
      <wje-card-title>Slider</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Element Slider je umožňuje praktickým spôsobom vybrať hodnotu z rozsahu hodnôt.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/split-view">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="layout-columns" size="large"></wje-icon>
      <wje-card-title>SplitView</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Split view je komponent, ktorý umožňuje vytvoriť delené zobrazenie s dvoma alebo viacerými sekciami a posuvom upravovať ich veľkosť.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/tab-group">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="rectangle-rounded-bottom" size="large"></wje-icon>
      <wje-card-title>Tab Group</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Tab Group zobrazuje záložkovú navigáciu, ktorá umožňuje zobrazovať rôzne časti aplikácie bez potreby prechádzať na inú stránku.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/toast">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="message-2-up" size="large"></wje-icon>
      <wje-card-title>Toast</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Komponent toast poskytuje nenápadný spôsob zobrazovania krátkych oznámení používateľovi.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/toggle">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="toggle-left" size="large"></wje-icon>
      <wje-card-title>Toggle</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Toggle elementy sú malé interaktívne ovládacie prvky, ktoré umožňujú prepínať medzi dvoma stavmi.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/tooltip">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="tooltip" size="large"></wje-icon>
      <wje-card-title>Tooltip</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Element Tooltip slúži na zobrazovanie vyskakovacej nápovedy pri nájazde myšou.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/toolbar">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="box-align-top" size="large"></wje-icon>
      <wje-card-title>Toolbar</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Toolbar je určený na zobrazovanie rôzneho obsahu organizovaným spôsobom, a zvyčajne sa používa v hornej časti stránok.</p>
    </wje-card-content>
  </wje-card>
</a>

</DocsCards>
