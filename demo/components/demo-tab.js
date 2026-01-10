import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<style>
    wje-badge {
      --wje-badge-padding-top: 4px;
      --wje-badge-padding-bottom: 4px;
    }
  </style>
  <h1>Tab</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základné použitie komponentu kariet: <span class="tok tag">&lt;wje-tab-group&gt;</span>
      s variantom <span class="tok attr">variant="top"</span>. Jednotlivé
      <span class="tok tag">&lt;wje-tab&gt;</span> sú v slote <span class="tok attr">nav</span>
      a prepínajú obsah medzi <span class="tok tag">&lt;wje-tab-panel&gt;</span> podľa atribútov
      <span class="tok attr">panel</span>/<span class="tok attr">name</span>.
      Ukážka tiež používa <span class="tok tag">&lt;wje-badge&gt;</span> pre zobrazenie počtu
      pri jednej z kariet.
    </p>
    <div class="playground">
      <div class="content" style="width: 100%; margin-inline: .5rem;">
        <wje-card>
          <wje-tab-group variant="top" >
            <wje-tab slot="nav" panel="basic-general">General <wje-badge color="primary">3</wje-badge></wje-tab>
            <wje-tab slot="nav" panel="basic-custom">Custom</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-1">Advanced 1</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-2">Advanced 2</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-3">Advanced 3</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-4">Advanced 4</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-5">Advanced 5</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-6">Advanced 6</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-7">Advanced 7</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-8">Advanced 8</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-9">Advanced 9</wje-tab>
            <wje-tab slot="nav" panel="basic-advanced-10">Advanced 10</wje-tab>
            <wje-tab-panel name="basic-general">This is the <b>general</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="basic-custom">This is the <b>custom</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-1">This is the <b>advanced</b> tab panel 1.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-2">This is the <b>advanced</b> tab panel 2.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-3">This is the <b>advanced</b> tab panel 3.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-4">This is the <b>advanced</b> tab panel 4.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-5">This is the <b>advanced</b> tab panel 5.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-6">This is the <b>advanced</b> tab panel 6.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-7">This is the <b>advanced</b> tab panel 7.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-8">This is the <b>advanced</b> tab panel 8.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-9">This is the <b>advanced</b> tab panel 9.</wje-tab-panel>
            <wje-tab-panel name="basic-advanced-10">This is the <b>advanced</b> tab panel 10.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>
    
    <!-- ROUTER -->

    <h2>Router</h2>
    <p class="description">
      Prepojenie kariet s routerom: <span class="tok tag">&lt;wje-tab-group&gt;</span> s
      <span class="tok attr">variant="top"</span> a <span class="tok attr">type="route"</span>
      používa <span class="tok attr">route</span> na jednotlivých
      <span class="tok tag">&lt;wje-tab&gt;</span> (napr. <span class="tok attr">route="example-accordion"</span>).
      Obsah sa vykresľuje do <span class="tok tag">&lt;wje-router-outlet&gt;</span> s ID
      <span class="tok attr">tab-group-outlet</span> podľa aktuálnej trasy.
    </p>
    <div class="playground">
      <div class="content" style="width: 100%; margin-inline: .5rem;">
        <wje-card>
          <wje-tab-group variant="top" type="route">
            <wje-tab slot="nav" route="example-accordion" class="active">Accordion</wje-tab>
            <wje-tab slot="nav" route="example-animation">Animation</wje-tab>
            <wje-tab slot="nav" route="example-avatar">Avatar</wje-tab>
            <wje-tab slot="nav" route="example-badge">Badge</wje-tab>
            <wje-router-outlet id="tab-group-outlet"></wje-router-outlet>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>
    
    <!-- OPEN TAB -->

    <h2>Open tab</h2>
    <p class="description">
      Otvorenie konkrétnej karty cez URL hash. Tlačidlo
      <span class="tok tag">&lt;wje-button&gt;</span> s atribútom
      <span class="tok attr">href="#open-custom"</span> nastaví hash adresy.
      V metóde <span class="tok method">afterDraw()</span> sa v poslucháči
      <span class="tok event">hashchange</span> nájde <span class="tok tag">&lt;wje-tab-group&gt;</span>
      s ID <span class="tok attr">custom</span> a pomocou metód
      <span class="tok method">getPanelAllName()</span> a
      <span class="tok method">setActiveTab()</span> sa aktivuje príslušný panel.
      Ukážka zároveň obsahuje <span class="tok attr">active</span> a
      <span class="tok attr">disabled</span> karty.
    </p>
    <div class="playground">
      <div class="content">
        <p><wje-button href="#open-custom">Open custom</wje-button></p>
        <wje-card>
          <wje-tab-group variant="top" id="custom">
            <wje-tab slot="nav" panel="open-general" active>General <wje-badge color="primary">3</wje-badge></wje-tab>
            <wje-tab slot="nav" panel="open-custom">Custom</wje-tab>
            <wje-tab slot="nav" panel="open-advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="open-disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="open-general">This is the <b>general</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="open-custom">This is the <b>custom</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="open-advanced">This is the <b>advanced</b> tab panel.</wje-tab-panel>
            <wje-tab-panel name="open-disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>
    
    <!-- START -->

    <h2>Start</h2>
    <p class="description">
      Vertikálne karty na ľavej strane cez <span class="tok attr">variant="start"</span>
      na <span class="tok tag">&lt;wje-tab-group&gt;</span>. Inline
      <span class="tok tag">&lt;style&gt;</span> nastavuje šírku tabov na 100&nbsp;%
      pre <span class="tok tag">&lt;wje-tab&gt;</span> vo variantoch
      <span class="tok attr">[variant=start]</span>, aby vyplnili celú výšku panelu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="start">
            <wje-tab slot="nav" panel="start-general">General</wje-tab>
            <wje-tab slot="nav" panel="start-custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="start-advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="start-disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="start-general">This is the general tab panel.</wje-tab-panel>
            <wje-tab-panel name="start-custom">This is the custom tab panel.</wje-tab-panel>
            <wje-tab-panel name="start-advanced">This is the advanced tab panel.</wje-tab-panel>
            <wje-tab-panel name="start-disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
          <style>
            wje-tab-group[variant=start] {
              wje-tab {
                width: 100%;
              }
            }
          </style>
        </wje-card>
      </div>
    </div>
    
    <!-- END -->

    <h2>End</h2>
    <p class="description">
      Vertikálne karty na pravej strane cez <span class="tok attr">variant="end"</span>.
      Inline štýl pre <span class="tok tag">&lt;wje-tab-group&gt;</span>
      s atribútom <span class="tok attr">variant="end"</span> opäť zabezpečí,
      že <span class="tok tag">&lt;wje-tab&gt;</span> má šírku 100&nbsp;%.
    </p>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="end">
            <wje-tab slot="nav" panel="end-general">General</wje-tab>
            <wje-tab slot="nav" panel="end-custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="end-advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="end-disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="end-general">This is the general tab panel.</wje-tab-panel>
            <wje-tab-panel name="end-custom">This is the custom tab panel.</wje-tab-panel>
            <wje-tab-panel name="end-advanced">This is the advanced tab panel.</wje-tab-panel>
            <wje-tab-panel name="end-disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
          <style>
            wje-tab-group[variant=end] {
              wje-tab {
                width: 100%;
              }
            }
          </style>
        </wje-card>
      </div>
    </div>
    
    <!-- BOTTOM -->

    <h2>Bottom</h2>
    <p class="description">
      Karty umiestnené pod obsahom pomocou
      <span class="tok attr">variant="bottom"</span> na
      <span class="tok tag">&lt;wje-tab-group&gt;</span>.
      Štruktúra tabov a panelov je rovnaká ako pri ostatných variantoch,
      mení sa iba pozícia navigácie.
    </p>
    <div class="playground">
      <div class="content">
        <wje-card>
          <wje-tab-group variant="bottom">
            <wje-tab slot="nav" panel="bottom-general">General</wje-tab>
            <wje-tab slot="nav" panel="bottom-custom" active>Custom</wje-tab>
            <wje-tab slot="nav" panel="bottom-advanced">Advanced</wje-tab>
            <wje-tab slot="nav" panel="bottom-disabled" disabled>Disabled</wje-tab>
          
            <wje-tab-panel name="bottom-general">This is the general tab panel.</wje-tab-panel>
            <wje-tab-panel name="bottom-custom">This is the custom tab panel.</wje-tab-panel>
            <wje-tab-panel name="bottom-advanced">This is the advanced tab panel.</wje-tab-panel>
            <wje-tab-panel name="bottom-disabled">This is a disabled tab panel.</wje-tab-panel>
          </wje-tab-group>
        </wje-card>
      </div>
    </div>
  </div>`;

export default class DemoTab extends WJElement {
   constructor() {
    super();
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  /**
   * Retrieves the selector for the tab group outlet.
   * @returns {string} The CSS selector for the tab group outlet element.
   */
  static get outlet() {
    return '#tab-group-outlet';
  }

  afterDraw(context, store, params) {
    window.addEventListener('hashchange', (e) => {
      let activeTabName = location.hash.replace('#', '');
      let tab = context.querySelector('#custom');

      if (tab?.getPanelAllName().includes(activeTabName)) {
        tab.setActiveTab(activeTabName);
      }
    });

    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-tab') || window.customElements.define('demo-tab', DemoTab);