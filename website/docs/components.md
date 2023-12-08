---
title: WebJET Elementy
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import { Card, CardHeader, Icon } from 'https://cdn.jsdelivr.net/gh/lencys/wj-elements@e5cdd8566b4acaad5c11040bfbb4e09e170074c9/wj-master.js';

<head>
  <title>UI Komponenty | Stavebné prvky aplikácie</title>
  <meta
    name="description"
    content=" WebJET Elements obsahuje širokú škálu komponentov, ktoré sú optimalizované pre webové rozhrania. Tieto komponenty pokrývajú rôzne funkcie a sú navrhnuté tak, aby sa dali ľahko integrovať do akejkoľvek webovej aplikácie."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
    wj-icon {
      padding: 12px;
      --wj-icon-size: 32px;
    }
  `}</style>
  
  <link rel="stylesheet" href="./../static/wj-elementy/style.css" />
</head>

 WebJET Elements obsahuje širokú škálu komponentov, ktoré sú optimalizované pre webové rozhrania. Tieto komponenty pokrývajú rôzne funkcie a sú navrhnuté tak, aby sa dali ľahko integrovať do akejkoľvek webovej aplikácie.


<intro-end />

<!-- Todo: Linky -->

<DocsCards>
<wj-card className="Card-without-image" href="api/avatar">
  <wj-card-header>
      <wj-icon name="user" size="large"></wj-icon>
      <wj-card-title>Avatar</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Element avatar slúži na vizuálnu prezentáciu používateľa alebo subjektu.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/badge">
  <wj-card-header>
      <wj-icon name="badge" size="large"></wj-icon>
      <wj-card-title>Badge</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Badge slúži ako upozornenie, že k elementu sú priradené ďalšie elementy a informujú používateľa o ich počte.</p>
  </wj-card-content>
</wj-card>

<wj-card  href="api/breadcrumbs">
  <wj-card-header>
      <wj-icon name="badges" size="large" style={{transform: "rotate(270deg)"}} ></wj-icon>
      <wj-card-title>Breadcrumbs</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Breadcrumbs je komponent, ktorý zobrazuje cestu, po ktorej používateľ prešiel v rámci aplikácie alebo webu.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/button">
  <wj-card-header>
      <wj-icon name="click" size="large"></wj-icon>
      <wj-card-title>Button</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Button (tlačidlo) je klikateľný element na vyvolávanie akcií, ktorý umožnuje zobraziť text, ikonu, prípadne oboje. </p>
  </wj-card-content>
</wj-card>

<wj-card href="api/card">
  <wj-card-header>
      <wj-icon name="credit-card" size="large"></wj-icon>
      <wj-card-title>Card</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Card je flexibilný a rozšíriteľný kontajner formátu karty, ktorý umožňuje zobraziť širokú škálu obsahu.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/checkbox">
  <wj-card-header>
      <wj-icon name="checkbox" size="large"></wj-icon>
      <wj-card-title>Checkbox</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Checkbox umožňuje používateľom vybrať jednu alebo viac možností z množiny.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/Chip">
  <wj-card-header>
      <wj-icon name="capsule-horizontal" size="large"></wj-icon>
      <wj-card-title>Chip</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Chip je univerzálny element, ktorý predstavuje malý vizuálny blok obsahujúci rôzne ďalšie elementy, ako napríklad avatary, text a ikony.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/color-picker">
  <wj-card-header>
      <wj-icon name="color-picker" size="large"></wj-icon>
      <wj-card-title>Color picker</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Color picker je element, ktorý zobrazuje farebnú paletu a umožňuje používateľom vybrať jednu z jej farieb.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/copy-button">
  <wj-card-header>
      <wj-icon name="copy" size="large"></wj-icon>
      <wj-card-title>Copy button</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Copy button umožnuje jedným kliknutím skopírovať želaný obsah do clipboardu.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/dialog">
  <wj-card-header>
      <wj-icon name="window-maximize" size="large"></wj-icon>
      <wj-card-title>Dialog</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Dialog zobrazuje dialógové okno nachádzajúce sa nad obsahom aplikácie.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/dropdown">
  <wj-card-header>
      <wj-icon name="menu-deep" size="large" style={{transform: "rotate(180deg)"}}></wj-icon>
      <wj-card-title>Dropdown</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Dropdown element slúži na zobrazenie kontextového menu po kliknutí na tlačidlo.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/icon">
  <wj-card-header>
      <wj-icon name="icons" size="large"></wj-icon>
      <wj-card-title>Icon</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Icon poskytuje jednoduchý spôsob zobrazenia ikon zo vstavanej sady SVG obrázkov. </p>
  </wj-card-content>
</wj-card>

<wj-card href="api/icon-picker">
  <wj-card-header>
      <wj-icon name="icons" size="large"></wj-icon>
      <wj-card-title>Icon Picker</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Icon picker umožňuje používateľovi nájsť a zvoliť ikonu zo sady dostupných ikon.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/image-comparer">
  <wj-card-header>
      <wj-icon name="photo-scan" size="large"></wj-icon>
      <wj-card-title>Image comparer</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Image Comparer slúži na porovnanie dvoch obrázkov pomocou vstavaného posuvníka.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/grid">
  <wj-card-header>
      <wj-icon name="grid-4x4" size="large"></wj-icon>
      <wj-card-title>Grid</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Systém Grid je flexibilný spôsob vytvárania responzívnych rozvrhnutí (layoutov) rozdelením obrazovky na mriežku.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/infinite-scroll">
  <wj-card-header>
      <wj-icon name="infinity" size="large"></wj-icon>
      <wj-card-title>Infinite Scroll</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Infinite Scroll umožňuje implementovať dynamické načítavanie dát, keď používatelia scrollujú väčším množstvom obsahu.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/input">
  <wj-card-header>
      <wj-icon name="input-check" size="large"></wj-icon>
      <wj-card-title>Input</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Input element rozširuje možnosti štandardného HTML inputu pokročilými funkciami a možnosťami prispôsobenia.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/item">
  <wj-card-header>
      <wj-icon name="list" size="large"></wj-icon>
      <wj-card-title>Item</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Komponenty Item sú bloky, ktoré môžu obsahovať rôzne typy obsahu vrátane textu, ikon, avatarov, obrázkov, a mnoho iného.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/list">
  <wj-card-header>
      <wj-icon name="list" size="large"></wj-icon>
      <wj-card-title>List</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Komponent List sa skladá z viacerých elementov Item a môže obsahovať text, tlačidlá, ikony, náhľady obrázkov, a mnoho iného.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="menu-2" size="large"></wj-icon>
      <wj-card-title>Menu</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Menu element slúži na zobrazenie navigácie. V predvolenom stave je schovaný a vyvolá sa napríklad kliknutím na tlačidlo.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/Progress Bar">
  <wj-card-header>
      <wj-icon name="progress" size="large"></wj-icon>
      <wj-card-title>Progress Bar</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Progress Bar element je komponent navrhnutý na vizualizáciu priebehu.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="circle-dot" size="large"></wj-icon>
      <wj-card-title>Radio</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Radio element je rozšírená verzia štandardného HTML radio elementu.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="select" size="large"></wj-icon>
      <wj-card-title>Select</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Select element rozširuje možnosti štandardného HTML select elementu. </p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="adjustments-horizontal" size="large"></wj-icon>
      <wj-card-title>Slider</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Element Slider je umožňuje praktickým spôsobom vybrať hodnotu z rozsahu hodnôt.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="layout-columns" size="large"></wj-icon>
      <wj-card-title>SplitView</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Split view je komponent, ktorý umožňuje vytvoriť delené zobrazenie s dvoma alebo viacerými sekciami a posuvomupravovať ich veľkosť.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="rectangle-rounded-bottom" size="large"></wj-icon>
      <wj-card-title>Tab Group</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Tab Group zobrazuje záložkovú navigáciu, ktorá umožňuje zobrazovať rôzne časti aplikácie bez potreby prechádzať na inú stránku.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="message-2-up" size="large"></wj-icon>
      <wj-card-title>Toast</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Komponent toast poskytuje nenápadný spôsob zobrazovania krátkych oznámení používateľovi.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="toggle-left" size="large"></wj-icon>
      <wj-card-title>Toggle</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Toggle elementy sú malé interaktívne ovládacie prvky, ktoré umožňujú prepínať medzi dvoma stavmi.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="tooltip" size="large"></wj-icon>
      <wj-card-title>Tooltip</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Element Tooltip slúži na zobrazovanie vyskakovacej nápovedy pri nájazde myšou.</p>
  </wj-card-content>
</wj-card>

<wj-card href="api/menu">
  <wj-card-header>
      <wj-icon name="box-align-top" size="large"></wj-icon>
      <wj-card-title>Toolbar</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Toolbar je určený na zobrazovanie rôzneho obsahu organizovaným spôsobom, a zvyčajne sa používa v hornej časti stránok.</p>
  </wj-card-content>
</wj-card>

</DocsCards>
