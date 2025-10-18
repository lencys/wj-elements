import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Color Picker</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-color-picker color="#00b4d8"></wje-color-picker>
<!--        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff" no-color-area no-controls no-swatches></wje-color-picker>-->
<!--        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff" no-color-area no-controls></wje-color-picker>-->
<!--        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff" no-color-area></wje-color-picker>-->
<!--        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff"></wje-color-picker>-->
<!--        <wje-color-picker color="#00b4d8" swatches="#e9c46aff, #2a9d8fff, #d62828ff" no-controls></wje-color-picker>-->
      </div>
    </div>
    
    <!-- DROPDOWN -->

    <h2>Dropdown</h2>
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
    
    <!-- SWATCHES -->

<!--    <h2>Swatches</h2>-->
<!--    <div class="playground">-->
<!--      <div class="content">-->
<!--        <wje-color-picker color="#00b4d8" swatches="#ff0000, #000000, #333333"></wje-color-picker>-->
<!--      </div>-->
<!--    </div>-->
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
