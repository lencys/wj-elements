import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<style>
    .content {
      display: block;
    }
    .router-layout {
      display: flex;
      justify-content: center;
      gap: 1rem;
      align-items: flex-start;
    }
    .outlet-wrap {
      width: 320px;
      height: 220px;
      position: relative;
      overflow: auto;
      border: 1px solid var(--wje-border-color, #d8d8d8);
      border-radius: 8px;
      padding: .5rem;
    }
    .menu-wrap {
      width: 280px;
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
      <div class="content router-layout">
        <div class="outlet-wrap">
          <wje-router-outlet id="my-outlet-1" animation="fade"></wje-router-outlet>
        </div>
        <wje-menu id="navigation" variant="nav" active class="menu-wrap">
          <wje-menu-item route="example-route-1">Route 1</wje-menu-item>
          <wje-menu-item route="example-route-2">Route 2</wje-menu-item>
        </wje-menu>

        <wje-dropdown id="custom-dropdown-basic" label="Start" placement="bottom-start" offset="5" collapsible portaled>
          <wje-button size="large" slot="trigger" caret>Large</wje-button>
          <wje-menu id="navigation" variant="context" active class="menu-wrap">
            <wje-menu-item route="example-route-1">Route 1</wje-menu-item>
            <wje-menu-item route="example-route-2">Route 2</wje-menu-item>
          </wje-menu>
        </wje-dropdown>
      </div>
    </div>

    <h2>Menu Item + param-*</h2>
    <p class="description">
      Ukážka navigácie cez <span class="tok tag">&lt;wje-menu-item&gt;</span> s parametrom
      <span class="tok attr">param-id</span>. Klik na položku vygeneruje route
      <span class="tok attr">absence-request.detail</span> s rôznym ID.
    </p>
    <div class="playground">
      <div class="content router-layout">
        <wje-menu variant="context" active class="menu-wrap">
          <wje-menu-item route="absence-request.detail" param-id="9e022371-a9c9-470c-99cd-6c240fc2eed4">
            <wje-icon name="eye" slot="start"></wje-icon>
            <span>Detail (ID 1)</span>
          </wje-menu-item>
          <wje-menu-item route="absence-request.detail" param-id="241f3590-09e2-4a9d-91dc-c83cc6a8c7c5">
            <wje-icon name="eye" slot="start"></wje-icon>
            <span>Detail (ID 2)</span>
          </wje-menu-item>
          <wje-menu-item route="router">
            <wje-icon name="arrow-left" slot="start"></wje-icon>
            <span>Späť na demo router</span>
          </wje-menu-item>
        </wje-menu>
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

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-router') || window.customElements.define('demo-router', DemoRouter);
