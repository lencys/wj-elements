import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `  <style>
    .content {
      display: block;
    }
  </style>
  
  <h1>List</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-list>
          <wje-item>
            <wje-label>Pokémon Yellow</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Mega Man X</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>The Legend of Zelda</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Pac-Man</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Super Mario World</wje-label>
          </wje-item>
        </wje-list>
      </div>
    </div>

    <!--  INSET -->

    <h2>Inset list</h2>
    <div class="playground" style="background-color: rgba(0,0,0,.08);">
      <div class="content">
        <wje-list inset>
          <wje-item>
            <wje-label>Pokémon Yellow</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Mega Man X</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>The Legend of Zelda</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Pac-Man</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Super Mario World</wje-label>
          </wje-item>
        </wje-list>
      </div>
    </div>

    <!--  LINES -->
    
    <h2>Lines</h2>
    <div class="playground">
      <div class="content">
        <wje-list lines="full">
          <wje-item>
            <wje-label>Full Lines</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Full Lines</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Full Lines</wje-label>
          </wje-item>
        </wje-list>

        <wje-list lines="inset">
          <wje-item>
            <wje-label>Inset Lines</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Inset Lines</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>Inset Lines</wje-label>
          </wje-item>
        </wje-list>

        <wje-list lines="none">
          <wje-item>
            <wje-label>No Lines</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>No Lines</wje-label>
          </wje-item>
          <wje-item>
            <wje-label>No Lines</wje-label>
          </wje-item>
        </wje-list>
      </div>
    </div>
  </div>`;

export default class DemoList extends WJElement {
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

customElements.get('demo-list') || window.customElements.define('demo-list', DemoList);
