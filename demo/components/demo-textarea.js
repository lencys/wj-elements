import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Textarea</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základné použitie <span class="tok tag">&lt;wje-textarea&gt;</span> s atribútmi
      <span class="tok attr">label</span>, <span class="tok attr">name</span> a
      <span class="tok attr">rows</span>. Komponent obalí natívny textarea a zachováva
      štandardné správanie.
    </p>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog" rows="4"></wje-textarea>
      </div>
    </div>
    
    <!-- BASIC - INNER TEXT -->

    <h2>Default (inner text)</h2>
    <p class="description">
      Predvyplnený obsah textarea pomocou vnútorného textu medzi tagmi
      <span class="tok tag">&lt;wje-textarea&gt;</span>…<span class="tok tag">&lt;/wje-textarea&gt;</span>.
      Hodnota sa nastaví z tohto textu namiesto atribútu <span class="tok attr">value</span>.
    </p>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog" rows="4">Lorem ipsum dolor sit amet</wje-textarea>
      </div>
    </div>
    
    <!-- STANDARD -->

    <h2>Standard</h2>
    <p class="description">
      Variant <span class="tok attr">variant="standard"</span> pre
      <span class="tok tag">&lt;wje-textarea&gt;</span>. Ukážka zároveň používa lokálne CSS,
      ktoré mení padding labelu cez premennú
      <span class="tok css">--wje-textarea-label-padding</span>.
    </p>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog"  variant="standard"></wje-textarea>
        <style>
          [variant=standard] {
            --wje-textarea-label-padding: 0;
          }
        </style>
      </div>
    </div>
    
    <!-- COUNTER -->

    <h2>Counter</h2>
    <p class="description">
      Počítadlo znakov pomocou atribútov
      <span class="tok attr">max-length</span> a boolean
      <span class="tok attr">counter</span>. Komponent zobrazuje aktuálny počet znakov
      voči maximálnemu limitu.
    </p>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog" rows="4" max-length="24" counter></wje-textarea>
      </div>
    </div>
    
    <!-- RESIZE - none -->

    <h2>Resize (none)</h2>
    <p class="description">
      Zakázanie manuálneho zväčšovania textarea cez atribút
      <span class="tok attr">resize="none"</span>. Veľkosť sa nemení dragovaním rohu.
    </p>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog" rows="4" resize="none"></wje-textarea>
      </div>
    </div>

    <!-- AUTO HEIGHT -->

    <h2>Auto height</h2>
    <p class="description">
      Automatické prispôsobenie výšky obsahu pomocou
      <span class="tok attr">resize="auto"</span>. Výška textarea rastie podľa počtu riadkov,
      pričom je možné kombinovať s <span class="tok attr">counter</span> a
      atribútom <span class="tok attr">rows</span> ako počiatočnou výškou.
    </p>
    <div class="playground" style="display: block;">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" name="dog" rows="3" resize="auto" counter></wje-textarea>
      </div>
    </div>

    <!-- DISABLED -->

    <h2>Disabled</h2>
    <p class="description">
      Režim len na čítanie cez boolean atribút
      <span class="tok attr">disabled</span>. Používateľ nemôže meniť obsah textarea
      a komponent sa vizuálne zobrazí ako neaktívny.
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-textarea label="Label" disabled></wje-textarea>
      </div>
    </div>
  </div>`;

export default class DemoTextarea extends WJElement {
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

customElements.get('demo-textarea') || window.customElements.define('demo-textarea', DemoTextarea);
