import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';
import { event } from '../../packages/index.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Kanban</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content" style="width: 100%; height: 350px; display: block;">
        <wje-kanban url="/api/applicants" id="basic"></wje-kanban>
      </div>
    </div>
    
    <!-- CUSTOM -->

    <h3>Basic</h3>
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
