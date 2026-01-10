import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';
import { event } from '../../packages/index.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Kanban</h1>
  <div class="container">

    <!-- DEFAULT -->

    <h3>Default (API)</h3>
    <p class="description">
      Základné použitie komponentu <span class="tok tag">&lt;wje-kanban&gt;</span> s načítaním dát zo servera
      cez atribút <span class="tok attr">url</span>. Komponent si sám riadi stĺpce a karty
      podľa odpovede z API bez potreby dodatočného JavaScriptu.
    </p>
    <div class="playground">
      <div class="content" style="width: 100%; height: 350px; display: block;">
        <wje-kanban url="/api/applicants" id="basic"></wje-kanban>
      </div>
    </div>
    
    <!-- CUSTOM -->

    <h3>Custom rendering</h3>
    <p class="description">
      Vlastné vykreslenie kariet pomocou hooku <span class="tok method">customForeach</span>.
      V <span class="tok method">afterDraw()</span> sa prepíše spôsob renderovania a každá položka
      sa vloží ako custom DOM štruktúra (tu <span class="tok css">.card</span> element).
      Ukážka zároveň demonštruje <span class="tok attr">draggable</span> karty a vlastné atribúty
      (<span class="tok attr">data-id</span>).
    </p>
    <div class="playground">
      <div class="content" style="width: 100%; height: 350px; display: block;">
        <wje-kanban url="/api/applicants" id="custom"></wje-kanban>
      </div>
    </div>
  </div>`;

export default class DemoKanban extends WJElement {
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
    const customKanban = this.context.querySelector('#custom');

    customKanban.customForeach = (pool, items) => {
      for (const item of items) {
        let card = this.htmlCard(item);
        pool.querySelector('.pool-content').appendChild(card);
      }
    };

    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }

  htmlCard(item) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.draggable = true;
    card.setAttribute('data-id', item.id);
    card.innerHTML = `
        <div>${item.id} - ${item.body}</div>
    `;

    return card;
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-kanban') || window.customElements.define('demo-kanban', DemoKanban);
