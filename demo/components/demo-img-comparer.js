import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Img Comparer</h1>
  <div class="container">
        
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-img-comparer>
          <wje-img src="/demo/assets/img/example-image.svg" slot="before"></wje-img>
          <wje-img src="/demo/assets/img/example-image2.svg" slot="after"></wje-img>
        </wje-img-comparer>
      </div>
    </div>
  </div>`;

export default class DemoImgComparer extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-img-comparer') || window.customElements.define('demo-img-comparer', DemoImgComparer);
