import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Input file</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wje-input-file></wje-input-file>
      </div>
    </div>
  </div>`;

export default class DemoInputFile extends WJElement {
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

customElements.get('demo-input-file') || window.customElements.define('demo-input-file', DemoInputFile);
