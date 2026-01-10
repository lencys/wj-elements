import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Rating</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Default</h3>
    <p class="description">
      Základné použitie komponentu <span class="tok tag">&lt;wje-rate&gt;</span> s maximálnym počtom položiek
      určeným atribútom <span class="tok attr">max</span>. Bez ďalších atribútov je možné hodnotu
      interaktívne meniť kliknutím.
    </p>
    <div class="playground">
      <div class="content">
        <wje-rate max="5"></wje-rate>
      </div>
    </div>

    
    <!-- FILLED -->

    <h3>Filled</h3>
    <p class="description">
      Vyplnený vizuálny štýl hodnotenia pomocou boolean atribútu <span class="tok attr">filled</span>.
      Atribút <span class="tok attr">selected="filled"</span> určuje, ako sa zvýrazní zvolená hodnota.
    </p>
    <div class="playground">
      <div class="content">
        <wje-rate max="5" filled selected="filled"></wje-rate>
      </div>
    </div>

    
    <!-- VALUE -->

    <h3>Value</h3>
    <p class="description">
      Prednastavená hodnota cez atribút <span class="tok attr">value</span> a vlastné ikony pomocou
      atribútu <span class="tok attr">icons</span> (napr. srdcia).
      Farby je možné prispôsobiť cez CSS custom properties
      <span class="tok css">--wje-rate-color</span> a
      <span class="tok css">--wje-rate-selected-color</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-rate value="3" icons="['heart', 'heart', 'heart', 'heart', 'heart']" selected="filled" id="custom-example"></wje-rate>
      </div>
      <style>
        #custom-example {
          --wje-rate-color: green;
          --wje-rate-selected-color: blue;
          /*--wje-icon-color: #f00;*/
        }
      </style>
    </div>

    <!-- PRECISION -->

    <h3>Precision</h3>
    <p class="description">
      Jemnejšie hodnotenie pomocou atribútu <span class="tok attr">precision</span>
      (napr. <span class="tok attr">0.5</span>), ktorý umožní polovičné kroky.
    </p>
    <div class="playground">
      <div class="content">
        <wje-rate value="3.5" max="5" precision="0.5" selected="filled"></wje-rate>
      </div>
    </div>
    
    <!-- READONLY -->

    <h3>Readonly</h3>
    <p class="description">
      Režim iba na čítanie cez boolean atribút <span class="tok attr">readonly</span>.
      Používateľ nemôže meniť hodnotu, komponent slúži len na zobrazenie.
    </p>
    <div class="playground">
      <div class="content">
        <wje-rate max="5" value="4" readonly></wje-rate>
      </div>
    </div>
    
    <!-- DISABLED -->

    <h3>Disabled</h3>
    <p class="description">
      Úplne neaktívny stav komponentu pomocou atribútu <span class="tok attr">disabled</span>,
      ktorý zablokuje interakciu aj vizuálne zvýrazní disabled stav.
    </p>
    <div class="playground">
      <div class="content">
        <wje-rate max="5" value="2" disabled></wje-rate>
      </div>
    </div>
  </div>`;

export default class DemoRate extends WJElement {
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

customElements.get('demo-rating') || window.customElements.define('demo-rating', DemoRate);
