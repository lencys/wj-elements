import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Img Comparer</h1>
  <div class="container">
        
    <!-- BASIC -->

    <h2>Before / After</h2>
    <p class="description">
      Porovnanie dvoch obrázkov pomocou komponentu <span class="tok tag">&lt;wje-img-comparer&gt;</span>.
      Obrázky sa vkladajú do slotov <span class="tok attr">before</span> a <span class="tok attr">after</span>
      ako štandardné <span class="tok tag">&lt;wje-img&gt;</span> elementy.
      Posuvník umožňuje interaktívne porovnanie bez potreby dodatočného JavaScriptu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-img-comparer>
          <wje-img src="/demo/assets/img/example-image.svg" slot="before"></wje-img>
          <wje-img src="/demo/assets/img/example-image2.svg" slot="after"></wje-img>
        </wje-img-comparer>
      </div>
    </div>
  </div>`;

export default class DemoImgComparer extends WJElement {
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

customElements.get('demo-img-comparer') || window.customElements.define('demo-img-comparer', DemoImgComparer);
