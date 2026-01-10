import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<style>
    .content {
      flex-direction: column;
      gap: .5rem;
    }
    .description {
      margin: 0 0 .5rem;
      max-width: 72ch;
      opacity: .8;
    }
  </style>
  <h1>Badge</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <p class="description">
      Základné použitie <code>&lt;wje-badge&gt;</code> bez špeciálnych atribútov – ukážka default renderu a typického číselného obsahu.
    </p>
    <div class="playground">
      <div class="content" style="flex-direction: row;">
        <wje-badge>11</wje-badge>
        <wje-badge>8</wje-badge>
      </div>
    </div>
    
    <!-- LIST -->

    <h2>List</h2>
    <p class="description">
      Ukážka použitia badge v rámci <code>&lt;wje-list&gt;</code> a <code>&lt;wje-item&gt;</code> – badge je vložený do slotu <code>start</code> alebo <code>end</code>, aby sa zarovnal na začiatok/koniec riadku.
    </p>
    <div class="playground">
      <div class="content">
        <wje-list>
          <wje-item>
            <wje-badge slot="start">11</wje-badge>
            <wje-label>Badge in start slot</wje-label>
          </wje-item>
          <wje-item>
            <wje-badge slot="end">22</wje-badge>
            <wje-label>Badge in end slot</wje-label>
          </wje-item>
        </wje-list>
      </div>
    </div>

    <!-- COLORS -->

    <h2>Colors</h2>
    <p class="description">
      Farebné varianty cez atribút <code>color</code> (napr. <code>primary</code>, <code>success</code>, <code>danger</code>…). Bez dodatočného CSS – mapovanie farieb rieši komponent.
    </p>
    <div class="playground">
      <div class="content">
        <wje-badge color="primary">22k</wje-badge>
        <wje-badge color="complete">118k</wje-badge>
        <wje-badge color="success">34k</wje-badge>
        <wje-badge color="warning">80</wje-badge>
        <wje-badge color="danger">70</wje-badge>
        <wje-badge color="info">1000</wje-badge>
        <wje-badge color="default">1000</wje-badge>
      </div>
    </div>

    <!--  BACUSTOMSIC-->

    <h2>Custom</h2>
    <p class="description">
      Prispôsobenie štýlu cez CSS custom properties (napr. <code>--wje-badge-padding-block-*</code>) a cez <code>::part(native)</code>. Ukážka mení background/text, border a padding bez zásahu do JavaScriptu.
    </p>
    <div class="playground">
      <div class="content">
       <wje-badge id="custom-badge">1</wje-badge>
       <style>
         #custom-badge {
            --wje-badge-padding-block-start: 8px !important;
            --wje-badge-padding-block-end: 8px !important;
            &::part(native) {
              background: red;
              color: white;
              border: 1px dashed blue;
            }
         }
       </style>
      </div>
    </div>
  </div>`;

export default class DemoBadge extends WJElement {
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

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-badge') || window.customElements.define('demo-badge', DemoBadge);
