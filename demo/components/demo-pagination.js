import WJElement from "../../dist/wje-element.js";
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<style>
    .content {
      justify-content: start; width: 100%; margin-inline: 1rem;
    }
  </style>
  <h1>Pagination</h1>
  <div class="container">
    
    <!-- SHOW INFO -->

    <h2>Show Info</h2>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" page-size="6" page-size-options="2,4,6,8,10" show-info show-page-size-options></wje-pagination>
      </div>
    </div>
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-pagination total-items="30"></wje-pagination>
      </div>
    </div>    
    
    <!-- MAX PAGES -->

    <h2>Max Pages</h2>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" max-pages="5"></wje-pagination>
      </div>
    </div>
    
    <!-- ROUND -->

    <h2>Round</h2>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" round></wje-pagination>
      </div>
    </div>
    
    <!-- FIRST, LAST BUTTONS -->

    <h2>First, Last Buttons</h2>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" show-first-button show-last-button></wje-pagination>
      </div>
    </div>
    
    <!-- SHOW INFO -->

    <h2>Show Info</h2>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" show-info></wje-pagination>
      </div>
    </div>
  </div>`;

export default class DemoPagination extends WJElement {
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

    afterDraw(context, store2, params) {
        this.addEventListener('wje-pagination:page-change', (e) => {
            console.log("SOM: ", e.target, " A TOTO NESIEM: ", e.detail);
        });
        const codeSnippet = new CodeSnippet();
        codeSnippet.generateSnippet(this.context);
    }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-pagination") || window.customElements.define("demo-pagination", DemoPagination);
    