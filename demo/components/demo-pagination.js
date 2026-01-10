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
    
    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základné použitie komponentu <span class="tok tag">&lt;wje-pagination&gt;</span>.
      Bez atribútov sa používa defaultná veľkosť stránky; atribút
      <span class="tok attr">total-items</span> určuje celkový počet položiek a tým aj počet strán.
    </p>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-pagination></wje-pagination>
        <wje-pagination total-items="30"></wje-pagination>
      </div>
    </div>    
    
    <!-- MAX PAGES -->

    <h2>Max Pages</h2>
    <p class="description">
      Obmedzenie počtu zobrazených strán pomocou atribútu
      <span class="tok attr">max-pages</span>. Vhodné pre veľké datasety, kde sa zobrazuje
      len časť strán okolo aktuálnej.
    </p>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" max-pages="5"></wje-pagination>
      </div>
    </div>
    
    <!-- ROUND -->

    <h2>Round</h2>
    <p class="description">
      Zaoblený vizuálny variant paginationu cez boolean atribút
      <span class="tok attr">round</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" round></wje-pagination>
      </div>
    </div>
    
    <!-- FIRST, LAST BUTTONS -->

    <h2>First, Last Buttons</h2>
    <p class="description">
      Zobrazenie navigačných tlačidiel na prvú a poslednú stránku pomocou
      <span class="tok attr">show-first-button</span> a
      <span class="tok attr">show-last-button</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" show-first-button show-last-button></wje-pagination>
      </div>
    </div>
    
    <!-- SHOW INFO -->

    <h2>Show Info</h2>
    <p class="description">
      Zobrazenie informačného textu o stránkovaní (napr. rozsah položiek)
      pomocou boolean atribútu <span class="tok attr">show-info</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" show-info></wje-pagination>
      </div>
    </div>
    
    <!-- PAGE SIZE OPTIONS -->

    <h2>Page Size Option</h2>
    <p class="description">
      Možnosť meniť veľkosť stránky pomocou atribútov
      <span class="tok attr">page-size</span> a
      <span class="tok attr">page-size-options</span>.
      Prepínač sa zobrazí cez <span class="tok attr">show-page-size-options</span>,
      prázdne stránky sa skryjú pomocou <span class="tok attr">hide-empty</span>.
      Zmena stránky emituje event <span class="tok event">wje-pagination:page-change</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-pagination total-items="30" page-size="6" page-size-options="2,4,6,8,10" show-info show-page-size-options hide-empty></wje-pagination>
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