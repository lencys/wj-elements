import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<style>
    .content {
      display: block;
    }
  </style>
  <h1>Router</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základná ukážka routera: <span class="tok tag">&lt;wje-router-outlet&gt;</span> s atribútom
      <span class="tok attr">animation="fade"</span> slúži ako cieľ pre vykreslenie routed obsahu.
      Navigácia je riešená cez <span class="tok tag">&lt;wje-menu variant="nav" active&gt;</span>, kde
      jednotlivé <span class="tok tag">&lt;wje-menu-item&gt;</span> používajú atribút
      <span class="tok attr">route</span> (napr. <span class="tok attr">route="example-route-1"</span>)
      na zmenu aktuálnej trasy.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; justify-content: center;">
        <div style="width: 300px; height: 200px; position: relative; overflow: scroll">
          <wje-router-outlet id="my-outlet-1" animation="fade"></wje-router-outlet>
        </div>
        <wje-menu id="navigation" variant="nav" active>
            <wje-menu-item route="example-route-1">Route 1</wje-menu-item>
            <wje-menu-item route="example-route-2">Route 2</wje-menu-item>
        </wje-menu>
        
      </div>
    </div>
    </div>

  </div>`;

export default class DemoRouter extends WJElement {
  constructor() {
    super();
  }

  /**
   * Retrieves the selector for the tab group outlet.
   * @returns {string} The CSS selector for the tab group outlet element.
   */
  static get outlet() {
    return '#my-outlet-1';
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-router') || window.customElements.define('demo-router', DemoRouter);
