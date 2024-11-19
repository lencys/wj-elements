import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Icons</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-icon name="check" size="4x-large"></wje-icon>
      </div>
    </div>
    
    <!-- STROKE -->

    <h2>Stroke</h2>
    <div class="playground">
      <div class="content">
        <wje-icon name="check" size="4x-large" stroke="1"></wje-icon>
        <wje-icon name="check" size="4x-large" stroke="1.25"></wje-icon>
        <wje-icon name="check" size="4x-large" stroke="1.5"></wje-icon>
        <wje-icon name="check" size="4x-large" stroke="1.75"></wje-icon>
        <wje-icon name="check" size="4x-large" stroke="2"></wje-icon>
      </div>
    </div>

    <!-- SIZE -->

    <h2>Size</h2>
    <div class="playground">
      <div class="content">
        <wje-icon name="check" size="x-small"></wje-icon>
        <wje-icon name="check" size="small"></wje-icon>
        <wje-icon name="check"></wje-icon>
        <wje-icon name="check" size="medium"></wje-icon>
        <wje-icon name="check" size="large"></wje-icon>
        <wje-icon name="check" size="x-large"></wje-icon>
        <wje-icon name="check" size="2x-large"></wje-icon>
        <wje-icon name="check" size="3x-large"></wje-icon>
        <wje-icon name="check" size="4x-large"></wje-icon>
      </div>
    </div>

    <!-- COLOR -->
    
    <h2>Color</h2>
    <div class="playground">
      <div class="content">
        <wje-icon name="check" size="x-large"></wje-icon>
        <wje-icon name="check" size="x-large" color="primary"></wje-icon>
        <wje-icon name="check" size="x-large" color="complete"></wje-icon>
        <wje-icon name="check" size="x-large" color="success"></wje-icon>
        <wje-icon name="check" size="x-large" color="warning"></wje-icon>
        <wje-icon name="check" size="x-large" color="danger"></wje-icon>
        <wje-icon name="check" size="x-large" color="info"></wje-icon>
        <wje-icon name="check" size="x-large" color="menu"></wje-icon>
      </div>
    </div>

    <!-- STYLE -->

    <h2>Style</h2>
    <div class="playground">
      <div class="content style">
        <wje-icon name="alarm" size="large"></wje-icon>
        <wje-icon name="alarm" size="large" filled></wje-icon>
        <style>
          .style wje-icon:not([filled])::part(svg) {
            color: yellow;
          }
          .style wje-icon[filled]::part(svg) {
            fill: red;
          }
        </style>
      </div>
    </div>
    
    <!-- CUSTOM -->

    <h2>Custom</h2>
    <div class="playground">
      <div class="content">
        <wje-icon class="custom" name="check"></wje-icon>
        <style>
          wje-icon.custom {
            --wje-icon-size: 60px;
            color: blue;
          }
          
          wje-icon.custom::part(svg) {
            stroke-width: 1;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoIcons extends WJElement {
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

customElements.get('demo-icons') || window.customElements.define('demo-icons', DemoIcons);
