import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Icons</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základné použitie ikony pomocou <span class="tok tag">&lt;wje-icon&gt;</span>.
      Atribúty <span class="tok attr">library</span>, <span class="tok attr">name</span> a <span class="tok attr">size</span>
      určujú zdroj ikony, konkrétny symbol a jeho veľkosť.
    </p>
    <div class="playground">
      <div class="content">
        <wje-icon library="default" name="check" size="4x-large"></wje-icon>
      </div>
    </div>
    
    <!-- STROKE -->

    <h2>Stroke</h2>
    <p class="description">
      Hrúbka obrysu ikony cez atribút <span class="tok attr">stroke</span>.
      Vyššia hodnota znamená hrubšiu líniu SVG ikon.
    </p>
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
    <p class="description">
      Preddefinované veľkosti ikony cez atribút <span class="tok attr">size</span>
      (od <span class="tok attr">x-small</span> po <span class="tok attr">4x-large</span>).
    </p>
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
    <p class="description">
      Farebné varianty ikony pomocou atribútu <span class="tok attr">color</span>
      (napr. <span class="tok attr">primary</span>, <span class="tok attr">success</span>, <span class="tok attr">danger</span>, …).
    </p>
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
    <p class="description">
      Rozlíšenie outline vs. filled variantu cez boolean atribút <span class="tok attr">filled</span>.
      Príklad ukazuje použitie <span class="tok css">::part(svg)</span> na priamu úpravu
      <span class="tok css">color</span>, <span class="tok css">fill</span> a ďalších SVG vlastností.
    </p>
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
    <p class="description">
      Vlastný vzhľad ikony pomocou CSS custom properties, napr.
      <span class="tok css">--wje-icon-size</span> a <span class="tok css">--wje-icon-stroke</span>,
      spolu s klasickým CSS selektorom a <span class="tok css">::part(svg)</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-icon class="custom" name="check"></wje-icon>
        <style>
          wje-icon.custom {
            --wje-icon-size: 60px;
            color: blue;
          }
          
          wje-icon.custom::part(svg) {
            --wje-icon-stroke: 3;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoIcons extends WJElement {
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

customElements.get('demo-icons') || window.customElements.define('demo-icons', DemoIcons);
