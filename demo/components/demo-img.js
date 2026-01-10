import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
<h1>Image</h1>
<div class="container">

    <!-- DEFAULT IMAGE -->

    <h3>Default image</h3>
    <p class="description">
      Základné použitie komponentu <span class="tok tag">&lt;wje-img&gt;</span> s atribútmi
      <span class="tok attr">src</span> a <span class="tok attr">alt</span>.
      Komponent rieši lazy rendering a štandardné správanie obrázka.
    </p>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img.png" alt="Niekedy máme pocit, že chodíme v kruhoch..."></wje-img>
        </div>
    </div>
    
    <!-- IMAGE INSIDE DROPDOWN -->

    <h3>Image inside dropdown</h3>
    <p class="description">
      Použitie <span class="tok tag">&lt;wje-img&gt;</span> ako vnoreného obsahu v
      <span class="tok tag">&lt;wje-avatar&gt;</span> a <span class="tok tag">&lt;wje-dropdown&gt;</span>.
      Obrázok slúži ako vizuálny prvok triggeru aj obsahu menu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-dropdown id="custom-dropdown" placement="right-start" offset="5" collapsible>
          <wje-avatar slot="trigger">
                <wje-img src="/assets/img/avatar.svg"></wje-img>
              </wje-avatar>
          <wje-menu class="custom-menu" active>
            <div style="display: flex; align-items: center;">
              <wje-avatar>
                <wje-img src="/assets/img/avatar.svg"></wje-img>
              </wje-avatar>
              <h5 style="margin: 0 0 0 .5rem; line-height: normal;">Petr Rahman</h5>
            </div>
            <wje-divider style="--wje-divider-spacing: .5rem"></wje-divider>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
            <wje-divider></wje-divider>
            <wje-menu-item>Link A</wje-menu-item>
            <wje-menu-item>Link B</wje-menu-item>
          </wje-menu>
        </wje-dropdown>
        <style>
          .custom-menu {
            width: 200px;
            padding: 1rem 1rem 1rem;
          }
        </style>
      </div>
    </div>
    
    <!-- REPEATED IMAGE -->

    <h3>Repeated image</h3>
    <p class="description">
      Opakovaná ukážka základného obrázka – slúži na porovnanie správania v rôznych kontextoch layoutu.
    </p>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img.png" alt="Niekedy máme pocit, že chodíme v kruhoch..."></wje-img>
        </div>
    </div>
    
    <!-- JAVASCRIPT CREATION -->

    <h3>JavaScript creation</h3>
    <p class="description">
      Dynamické vytvorenie <span class="tok tag">&lt;wje-img&gt;</span> v JavaScripte v hooku
      <span class="tok method">beforeDraw()</span>. Nastavenie <span class="tok attr">src</span>,
      <span class="tok attr">alt</span> a <span class="tok attr">fallout</span> prebieha imperatívne.
      Vlastná fallback logika je definovaná cez <span class="tok attr">actions</span>.
    </p>
    <div class="playground">
        <div class="content" id="example-js">
            
        </div>
    </div>
    
    <!-- FALLBACK: DELETE -->

    <h3>Fallback: delete</h3>
    <p class="description">
      Správanie pri chybe načítania obrázka pomocou atribútu
      <span class="tok attr">fallout="delete"</span>. Pri zlyhaní sa element automaticky odstráni z DOM.
    </p>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img-error-1.png" alt="Niekedy máme pocit, že chodíme v kruhoch..." fallout="delete"></wje-img>
        </div>
    </div>
    
    <!-- FALLBACK: CUSTOM FUNCTION -->

    <h3>Fallback: custom function</h3>
    <p class="description">
      Vlastná fallback funkcia cez <span class="tok attr">fallout="log"</span>.
      Logika je definovaná v <span class="tok attr">actions</span> a spustí sa pri chybe načítania obrázka.
    </p>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img-error-2.png" alt="Niekedy máme pocit, že chodíme v kruhoch..." fallout="log" id="img-example"></wje-img>
        </div>
    </div>
    
    <!-- OBSERVER -->

    <h3>Observer</h3>
    <p class="description">
      Ukážka pozorovania obrázka (napr. lazy load / visibility).
      Komponent reaguje na zmenu viditeľnosti bez potreby externého JavaScriptu.
    </p>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img.png" alt="Niekedy máme pocit, že chodíme v kruhoch..." fallout="log" id="img-example"></wje-img>
        </div>
    </div>
</div>
`;

export default class DemoImg extends WJElement {
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

  beforeDraw() {
    let img = document.createElement('wje-img');
    img.src = '/demo/assets/img/img-error-3.png';
    img.alt = "TEST"
    img.fallout = 'log';
    img.actions['log'] = () => {
      console.error('MOJ Error log pre obrázok:', img.src);
    }
    this.querySelector('#example-js')?.appendChild(img);

    if (this.querySelector('#img-example')?.actions) {
      this.querySelector('#img-example').actions['log'] = () => {
        console.log('Log pre obrázok', this.src);
      };
    }
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-img') || window.customElements.define('demo-img', DemoImg);
