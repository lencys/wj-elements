import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');
template.innerHTML = `<h1>Copy Button</h1>
    <div class="container">
      
      <!-- BASIC -->
  
      <h2>Basic</h2>
      <p class="description">
        Základné použitie <span class="tok tag">&lt;wje-copy-button&gt;</span> s priamou hodnotou na kopírovanie
        cez atribút <span class="tok attr">value</span>. Po kliknutí sa hodnota skopíruje do clipboardu
        bez potreby dodatočného JavaScriptu.
      </p>
      <div class="playground">
        <div class="content">
          <wje-copy-button value="I am copy - Value"></wje-copy-button>
        </div>
      </div>
      
      <!-- CUSTOM BUTTON -->
  
      <h2>Button</h2>
      <p class="description">
        Vlastný trigger tlačidla pomocou slotu – do <span class="tok tag">&lt;wje-copy-button&gt;</span> je vložený
        <span class="tok tag">&lt;wje-button&gt;</span>, ktorý slúži ako ovládací prvok pre kopírovanie.
      </p>
      <div class="playground">
        <div class="content">
          <wje-copy-button value="I am copy - Value">
            <wje-button slot>Copy</wje-button>
          </wje-copy-button>
        </div>
      </div>
      
      <!-- CUSTOM LABEL -->
  
      <h2>Custom label</h2>
      <p class="description">
        Prispôsobenie textov cez atribúty <span class="tok attr">label</span> a
        <span class="tok attr">label-success</span>, ktoré definujú default a „success“ stav po skopírovaní.
      </p>
      <div class="playground">
        <div class="content">
          <wje-copy-button value="I am copy - Value" label="Kopírovať" label-success="Skopírované"></wje-copy-button>
        </div>
      </div>
      
      <!-- ELEMENT -->
  
      <h2>Element</h2>
      <p class="description">
        Kopírovanie obsahu iného elementu pomocou atribútu <span class="tok attr">for</span>.
        <span class="tok tag">&lt;wje-copy-button&gt;</span> si nájde element podľa <span class="tok attr">id</span>
        a skopíruje jeho textový obsah.
      </p>
      <div class="playground">
        <div class="content">
          <wje-label id="copy">I am copy - Element</wje-label>
          <wje-copy-button for="copy"></wje-copy-button>
        </div>
      </div>
      
      <!-- INPUT -->
  
      <h2>Input</h2>
      <p class="description">
        Kopírovanie hodnoty zo štandardného HTML inputu (<span class="tok tag">&lt;input&gt;</span>)
        pomocou atribútu <span class="tok attr">for</span>. Skopíruje sa <span class="tok attr">value</span> inputu.
      </p>
      <div class="playground">
        <div class="content">
          <input id="copy-input" value="I am copy - Input">
          <wje-copy-button for="copy-input"></wje-copy-button>
        </div>
      </div>
      
      <!-- WJ INPUT -->
  
      <h2>WJE Input</h2>
      <p class="description">
        Integrácia s <span class="tok tag">&lt;wje-input&gt;</span>, kde je copy button vložený do slotu
        <span class="tok attr">end</span>. Atribút <span class="tok attr">for</span> odkazuje na ID inputu
        a kopíruje jeho hodnotu.
      </p>
      <div class="playground">
        <div class="content">
          <wje-input label="Label" id="copy-wje-input" value="I am copy - WJ Input">
            <wje-copy-button for="copy-wje-input" slot="end"></wje-copy-button>
          </wje-input>
        </div>
      </div>
      
      <!-- HYPERLINK -->
  
      <h2>Hyperlink</h2>
      <p class="description">
        Kopírovanie textu alebo URL z odkazu (<span class="tok tag">&lt;a&gt;</span>) pomocou
        atribútu <span class="tok attr">for</span>. Typicky sa kopíruje hodnota <span class="tok attr">href</span>
        alebo textový obsah odkazu.
      </p>
      <div class="playground">
        <div class="content">
          <a href="http://www.google.com" id="copy-href">I am copy - Href</a>
          <wje-copy-button for="copy-href"></wje-copy-button>
        </div>
      </div>
    </div>`;

export default class DemoCopyButton extends WJElement {
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

customElements.get('demo-copy-button') || window.customElements.define('demo-copy-button', DemoCopyButton);
