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
    
    <!-- FALLOUT -DELETE -->

    <h3>Fallout - Delete</h3>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img-error.png" alt="Niekedy máme pocit, že chodíme v kruhoch..." fallout="delete"></wje-img>
        </div>
    </div>
    
    <!-- FALLOUT - FCE -->

    <h3>Fallout - Function</h3>
    <div class="playground">
        <div class="content">
            <wje-img src="/demo/assets/img/img-error.png" alt="Niekedy máme pocit, že chodíme v kruhoch..." fallout="alert" id="img-example"></wje-img>
            <script>
                document.querySelector('#img-example').addAction('alert', () => {
                    window.alert(1);
                });
            </script>
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
    this.querySelector('#img-example').addAction('alert', () => {
      window.alert(1);
    });
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-img') || window.customElements.define('demo-img', DemoImg);
