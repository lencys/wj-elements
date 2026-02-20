import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Color Picker</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základné použitie <span class="tok tag">&lt;wje-color-picker&gt;</span> s predvolenou farbou cez atribút
      <span class="tok attr">color</span>. Bez swatches a bez dodatočného JavaScriptu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-color-picker color="#00b4d8"></wje-color-picker>
      </div>
    </div>
    
    <!-- INPUT EDITABLE -->

    <h2>Input Editable</h2>
    <p class="description">
      Variant s atribútom <span class="tok attr">input-editable</span>, ktorý umožní písať farbu
      priamo do inputu (napr. <span class="tok attr">#4a4a4a</span> alebo <span class="tok attr">#4a4a4aff</span>).
    </p>
    <div class="playground">
      <div class="content">
        <wje-color-picker color="#00b4d8" input-editable></wje-color-picker>
      </div>
    </div>
    
    <!-- MINIMAL -->

    <h2>Minimal</h2>
    <p class="description">
      Minimalistický variant s vypnutými časťami UI pomocou atribútov
      <span class="tok attr">no-color-area</span>, <span class="tok attr">no-controls</span> a <span class="tok attr">no-swatches</span>.
      Hodí sa pre jednoduchý výber zo swatches.
    </p>
    <div class="playground">
      <div class="content">
        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff" no-color-area no-controls no-swatches></wje-color-picker>
      </div>
    </div>
    
    <!-- SWARCHES + PICKER -->

    <h2>Swatches + Picker</h2>
    <p class="description">
      Kombinácia výberu farby a swatches cez atribút <span class="tok attr">swatches</span>,
      pričom sú skryté ovládacie prvky (<span class="tok attr">no-controls</span>).
    </p>
    <div class="playground">
      <div class="content">
        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff" no-color-area no-controls></wje-color-picker>
      </div>
    </div>
    
    <!-- NO COLOR AREA -->

    <h2>No Color Area</h2>
    <p class="description">
      Variant bez hlavnej plochy výberu farby cez atribút <span class="tok attr">no-color-area</span>,
      so zapnutými swatches pre rýchly výber.
    </p>
    <div class="playground">
      <div class="content">
        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff" no-color-area></wje-color-picker>
      </div>
    </div>
    
    <!-- SWARCHES -->

    <h2>With Swatches</h2>
    <p class="description">
      Plná verzia color pickeru so swatches (<span class="tok attr">swatches</span>) a aktívnou plochou výberu farby.
    </p>
    <div class="playground">
      <div class="content">
        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff"></wje-color-picker>
      </div>
    </div>    
    
    <!-- NO CONTROLS -->

    <h2>No Controls</h2>
    <p class="description">
      Color picker bez ovládacích prvkov pomocou atribútu <span class="tok attr">no-controls</span>,
      vhodný ako embedded výber farby.
    </p>
    <div class="playground">
      <div class="content">
        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff" no-controls></wje-color-picker>
      </div>
    </div>
    
    <!-- DROPDOWN -->

    <h2>Dropdown</h2>
    <p class="description">
      Použitie <span class="tok tag">&lt;wje-color-picker&gt;</span> v kombinácii s
      <span class="tok tag">&lt;wje-dropdown&gt;</span>. Trigger je vlastný element v slote
      <span class="tok attr">trigger</span>. Výber farby je odchytávaný cez event
      <span class="tok event">wje-color-picker:select</span> a v JavaScripte sa aktualizuje
      štýl elementu (<span class="tok css">background-color</span>).
    </p>
    <div class="playground">
      <div class="content">
        <wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible portaled>
          <div class="color" slot="trigger"></div>
          <wje-color-picker id="example" color="#00b4d8"></wje-color-picker>
        </wje-dropdown>
        <style>
          .color {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: var(--wje-border-radius-circle);
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoColorPicker extends WJElement {
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

    this.querySelector('#example').addEventListener('wje-color-picker:select', (e) => {
      this.querySelector('.color').style.backgroundColor = e.detail.value.hex;
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-color-picker') || window.customElements.define('demo-color-picker', DemoColorPicker);
