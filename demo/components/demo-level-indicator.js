import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `  <h1>Level Indicator</h1>
  <div class="container">
    
    <!-- DEFAULT -->

    <h2>Default</h2>
    <p class="description">
      Základné zobrazenie komponentu <span class="tok tag">&lt;wje-level-indicator&gt;</span>
      s úrovňou definovanou atribútom <span class="tok attr">level</span>.
      Hodnota určuje počet aktívnych segmentov indikátora.
    </p>
    <div class="playground">
      <div class="content" style="height: 240px;">
        <wje-level-indicator level="2"></wje-level-indicator>
      </div>
    </div>
    
    <!-- COLOR -->

    <h2>Color</h2>
    <p class="description">
      Farebné rozlíšenie úrovní pomocou boolean atribútu <span class="tok attr">colorize</span>.
      Každý level je vizuálne odlíšený farbou bez potreby vlastného CSS.
    </p>
    <div class="playground">
      <div class="content" style="height: 240px; gap:.5rem">
        <wje-level-indicator level="1" colorize></wje-level-indicator>
        <wje-level-indicator level="2" colorize></wje-level-indicator>
        <wje-level-indicator level="3" colorize></wje-level-indicator>
      </div>
    </div>
    
    <!-- BARS -->

    <h2>Bars</h2>
    <p class="description">
      Zmena počtu segmentov indikátora cez atribút <span class="tok attr">bars</span>.
      Šírka komponentu je upravená pomocou CSS custom property
      <span class="tok css">--wje-level-indicator-width</span>.
    </p>
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
    <p class="description">
      Otočenie smeru indikátora pomocou boolean atribútu <span class="tok attr">reverse</span>,
      ktoré zmení orientáciu vykresľovania segmentov.
    </p>
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