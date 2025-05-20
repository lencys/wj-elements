import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
<h1>Image</h1>
<div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img.png" alt="Niekedy máme pocit, že chodíme v kruhoch..."></wje-img>
        </div>
    </div>
    
    <!-- INNER AVATAR -->

    <h3>Inner avatar</h3>
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
    
    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img.png" alt="Niekedy máme pocit, že chodíme v kruhoch..."></wje-img>
        </div>
    </div>
    
    <!-- JS -->

    <h3>Javascript</h3>
    <div class="playground">
        <div class="content" id="example-js">
            
        </div>
    </div>
    
    <!-- FALLOUT -DELETE -->

    <h3>Fallout - Delete</h3>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img-error-1.png" alt="Niekedy máme pocit, že chodíme v kruhoch..." fallout="delete"></wje-img>
        </div>
    </div>
    
    <!-- FALLOUT - FCE -->

    <h3>Fallout - Function</h3>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img-error-2.png" alt="Niekedy máme pocit, že chodíme v kruhoch..." fallout="log" id="img-example"></wje-img>
        </div>
    </div>
    
    <!-- OBSERVER -->

    <h3>Observer</h3>
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
