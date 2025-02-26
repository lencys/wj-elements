import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `  <h1>Level Indicator</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="height: 240px;">
        <wje-level-indicator level="2"></wje-level-indicator>
      </div>
    </div>
    
    <!-- COLOR -->

    <h2>Color</h2>
    <div class="playground">
      <div class="content" style="height: 240px; gap:.5rem">
        <wje-level-indicator level="1" colorize></wje-level-indicator>
        <wje-level-indicator level="2" colorize></wje-level-indicator>
        <wje-level-indicator level="3" colorize></wje-level-indicator>
      </div>
    </div>
    
    <!-- BARS -->

    <h2>Bars</h2>
    <div class="playground">
      <div class="content" style="height: 240px;">
        <wje-level-indicator level="3" bars="4" class="example-bars"></wje-level-indicator>
        <style>
          .example-bars {
            --wje-level-indicator-width: 32px;
          }
        </style>
      </div>
    </div>
    
    <!-- REVERSE -->

    <h2>Reverse</h2>
    <div class="playground">
      <div class="content" style="height: 240px;">
        <wje-level-indicator level="2" reverse></wje-level-indicator>
      </div>
    </div>
</div>`;

export default class DemoLevelIndicator extends WJElement {
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

customElements.get("demo-level-indicator") || window.customElements.define("demo-level-indicator", DemoLevelIndicator);
    